<template>
  <div class="container">
    <c-heading marginBottom="20px">Affiliates</c-heading>
    <c-stat marginBottom="20px">
      <c-stat-label>Total Registered Affiliates</c-stat-label>
      <c-stat-number>{{
          counts.company_aggregate ? counts.company_aggregate.aggregate.count : 0
        }}</c-stat-number>
      <c-stat-helper-text>
        <c-stat-arrow type="increase" />0.0%
      </c-stat-helper-text>
    </c-stat>
    <c-box d="flex" align-items="center" mb="5">
      <c-input-group w="100" mr="5">
        <c-input-left-element
        ><i class="fa fa-search"></i
        ></c-input-left-element>
        <c-input
          v-model="search"
          type="text"
          placeholder="Search business by name, email"
        />
      </c-input-group>
      <c-button
        @click="$refs.downloadCSV2.$el.click()"
        variant-color="blue"
        size="sm"
      >
        Export
      </c-button>
      <download-csv
        v-show="false"
        ref="downloadCSV2"
        :data="businessesToDownload"
        :name="`VC-BUSINESSES-${new Date()}.csv`"
      />
    </c-box>
    <div>
      <c-stack :spacing="5">
        <c-box :p="5" border-width="1px">
          <template v-for="(business, ix) in filteredBusinesses">
            <c-grid template-columns="repeat(11, 1fr)">
              <c-box>
                <c-text fontSize="11px" color="gray.500">Company ID</c-text>
                <c-text fontSize="13px">{{ business.id }}</c-text>
              </c-box>
              <c-box>
                <c-text fontSize="11px" color="gray.500">Company name</c-text>
                <c-text fontSize="13px">{{ business.name }}</c-text>
              </c-box>
              <c-box>
                <c-text fontSize="11px" color="gray.500">Stage</c-text>
                <c-text fontSize="13px">{{
                    business.business_stage.name
                  }}</c-text>
              </c-box>
              <c-box>
                <c-text fontSize="11px" color="gray.500">Objective</c-text>
                <c-text fontSize="13px">{{
                    business.business_objective.description
                  }}</c-text>
              </c-box>
              <c-box>
                <c-text fontSize="11px" color="gray.500">Location</c-text>
                <c-text fontSize="13px"
                >{{ business.city }}, {{ business.country }}</c-text
                >
              </c-box>
              <c-box>
                <c-text fontSize="11px" color="gray.500"
                >Investment Ready</c-text
                >
                <c-text fontSize="13px"
                >{{ business.investmentEtaValue }}
                  {{ business.investmentEtaMetric }}</c-text
                >
              </c-box>
              <c-box>
                <c-text fontSize="11px" color="gray.500">Plan</c-text>
                <c-text
                  v-if="business.billing_subscriptions.length === 0"
                  fontSize="13px"
                >{{ 'free' }} </c-text
                ><c-text v-else fontSize="13px"
              >{{
                  business.billing_subscriptions[0].planId === 2
                    ? 'Pro'
                    : 'Premium'
                }}
              </c-text>
              </c-box>
              <c-box>
                <c-text fontSize="11px" color="gray.500">Size</c-text>
                <c-text fontSize="13px">{{ business.size }}</c-text>
              </c-box>

              <c-menu>
                <c-menu-button
                  :aria-controls="ix"
                  class="actions"
                  mx='4'
                  size='sm'
                  right-icon="chevron-down"
                >Actions</c-menu-button
                >
                <c-menu-list :id="ix">
                  <c-menu-item as="nuxt-link" :to="'./business/' + business.id"
                  >View</c-menu-item
                  >
                  <c-menu-item
                    as="nuxt-link"
                    :to="'/dashboard/coupon/' + business.id"
                  >Generate Coupon</c-menu-item
                  >
                </c-menu-list>
              </c-menu>

              <div>
                <c-button
                  v-if="business.affiliateStatus === 'REQUESTED'"
                  size="sm"
                  mx='4'
                  variant-color="green"
                  @click='approveAffiliateRequest(business, ix)'
                >
                  Accept
                </c-button>
                <c-button
                  v-if="business.affiliateStatus === 'AFFILIATE'"
                  size="sm"
                  mx='4'
                  variant-color="orange"
                  @click='suspendAffiliateMembership(business, ix)'
                >
                  Suspend
                </c-button>
              </div>
              <c-button
                size="sm"
                mx='4'
                variant-color="red"
                @click='cancelAffiliateMembership(business, ix)'
              >
                Remove
              </c-button>
            </c-grid>
            <c-divider :key="business.id"></c-divider>
          </template>
        </c-box>
      </c-stack>
    </div>
  </div>
</template>

<script lang="js">

import countQuery from "~/graphql/queries/counts.gql";
import businessQuery from "~/graphql/queries/businesses.gql";
import affiliateQuery from "~/graphql/queries/affiliates.gql"
import affiliateAccept from "~/graphql/mutations/affiliate/affiliate.graphql"
import removeAffiliate from "~/graphql/mutations/affiliate/removeAffiliate.graphql"
import suspendAffiliate from "~/graphql/mutations/affiliate/suspendAffiliate.graphql"


export default {
  name: 'App',
  components: {},
  layout: 'dashboard',
  data () {
    return {
      affiliates: null,
      loading: false,
      isOpen:false,
      counts : {} ,
      businesses : [],
      search: ''

    }
  },
  mounted() {
    this.getAffiliates();
  },
  // fetch(){
  //   this.getCounts();
  //   this.getBusiness();
  // },
  computed: {
    filteredBusinesses(){
      if(!this.search){
        return this.businesses;
      }
      return this.businesses.filter(business => business.name?.toLowerCase().includes(this.search?.toLowerCase()) || business.city?.toLowerCase().includes(this.search?.toLowerCase()) || business.country?.toLowerCase().includes(this.search?.toLowerCase()) || business.business_stage?.name?.toLowerCase().includes(this.search?.toLowerCase()))
    },
    businessesToDownload(){
      return this.businesses.map(business => {
        return {
          name: business.name,
          stage: business.business_stage?.name,
          city: business.city,
          country: business.country,
          objective: business.business_objective?.description,
          investmentReady: `${business.investmentEtaValue} ${business.investmentEtaMetric}`,
          createdAt: business.createdAt,
        }
      })
    }
  },
  methods: {
    suspendAffiliateMembership(passedAffiliate, index){
      this.loading = true;
      this.$apollo.mutate({
        mutation: suspendAffiliate,
        variables: {
          companyId: passedAffiliate.id
        }
      }).then(() => {
        this.businesses[index].affiliateStatus = 'REQUESTED'
        this.loading = false
      }).catch((e) => {
        console.error(e)
      })
    },
    cancelAffiliateMembership(passedAffiliate, index){
      this.loading = true;
      this.$apollo.mutate({
        mutation: removeAffiliate,
        variables: {
          companyId: passedAffiliate.id
        }
      }).then(() => {
        this.businesses[index].affiliateStatus = 'NON_AFFILIATE'
        this.businesses.splice(index, 1);
        this.loading = false
      }).catch((e) => {
        console.error(e)
      })
    },
    approveAffiliateRequest(passedAffiliate, index){
      this.loading = true;
      this.$apollo.mutate({
        mutation: affiliateAccept,
        variables: {
          companyId: passedAffiliate.id
        }
      }).then(() => {
        this.businesses[index].affiliateStatus = 'AFFILIATE'
        this.loading = false
      })
        .catch((e) => {
          console.error(e)
        })
    },
    getAffiliates(){
      this.loading = true;
      this.$apollo.query({query: affiliateQuery})
        .then(({ data }) => {
          console.log(data);
          this.businesses = data.company
          this.loading = false
        })
        .catch((e) => {
          console.error(e)
        })
    },
    getCounts(){
      this.$apollo.query({query : countQuery})
        .then(({ data }) => {
          console.log(data);
          this.counts = data
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getBusiness(){
      this.$apollo.query({query : businessQuery})
        .then(({ data }) => {
          console.log(data.company.map((item)=> item));
          this.businesses = data.company
        })
    }, open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    }
  }
}
</script>
