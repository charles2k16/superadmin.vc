<template>
  <div class="container">
    <c-heading marginBottom="20px">Business</c-heading>
    <c-stat marginBottom="20px">
      <c-stat-label>Total Registered Businesses</c-stat-label>
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
        ref="downloadCSV"
        :data="businessesToDownload"
        :name="`VC-BUSINESSES-${new Date()}.csv`"
      />
    </c-box>
    <div>
      <c-stack :spacing="5">
        <c-box :p="5" border-width="1px">
          <template v-for="(business, ix) in filteredBusinesses">
            <c-grid template-columns="repeat(7, 1fr)" :key="ix">
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
                <c-text fontSize="11px" color="gray.500">Size</c-text>
                <c-text fontSize="13px">{{ business.size }}</c-text>
              </c-box>
              <c-menu>
                <c-menu-button
                  :aria-controls="ix"
                  class="actions"
                  right-icon="chevron-down"
                  >Actions</c-menu-button
                >
                <c-menu-list :id="ix">
                  <c-menu-item as="nuxt-link" :to="'./business/' + business.id"
                    >View</c-menu-item
                  >
                </c-menu-list>
              </c-menu>
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


export default {
  name: 'App',
  components: {},
  layout: 'dashboard',
  data () {
      return {
         counts : {} ,
         businesses : [],
               search: ''

    }
  },
  fetch(){
    this.getCounts();
    this.getBusiness();
  },
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
    getCounts(){
      this.$apollo.query({query : countQuery})
        .then(({ data }) => {
          // do what you want with data
          console.log(data);
          this.counts = data
        })
    },
     getBusiness(){
      this.$apollo.query({query : businessQuery})
        .then(({ data }) => {
          // do what you want with data
          console.log(data);
          this.businesses = data.company
        })
    }
  }
}
</script>
