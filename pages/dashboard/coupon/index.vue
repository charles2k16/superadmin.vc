<template>
  <div class="container">
    <c-heading marginBottom="20px">Coupons</c-heading>
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
    </c-box>

    <div>
      <c-stack :spacing="5">
        <c-box :p="5" border-width="1px">
          <template v-for="coupon in coupons">
            <c-grid template-columns="repeat(9, 1fr)">
              <c-box>
                <c-text fontSize="11px" color="gray.500">Parent Company</c-text>
                <c-box
                  v-for="business in filteredBusinesses"
                  :key="business.id"
                >
                  <c-box
                    v-if="business.id === coupon.company_id"
                    fontSize="13px"
                  >
                    {{ business.name }}
                  </c-box>
                </c-box>
              </c-box>
              <c-box>
                <c-text fontSize="11px" color="gray.500"
                  >Recipient Company</c-text
                >
                <c-box
                  v-for="business in filteredBusinesses"
                  :key="business.id"
                >
                  <c-box
                    v-if="business.id === coupon.company_id"
                    fontSize="13px"
                  >
                    {{ business.name }}
                  </c-box>
                </c-box>
              </c-box>
              <c-box>
                <c-text fontSize="11px" color="gray.500">Created At</c-text>

                <c-text fontSize="13px">
                  {{
                    $moment(coupon.created_at).format('MM / DD / YYYY')
                  }}</c-text
                >
              </c-box>
              <c-box>
                <c-text fontSize="11px" color="gray.500">Discount</c-text>
                <c-text fontSize="13px">{{ coupon.discount }} % </c-text>
              </c-box>

              <c-box>
                <c-text fontSize="11px" color="gray.500">Commission</c-text>
                <c-text fontSize="13px">{{ coupon.commission }} % </c-text>
              </c-box>
              <c-box>
                <c-text fontSize="11px" color="gray.500">Status</c-text>
                <c-text fontSize="13px">
                  <c-badge
                    mx="2"
                    v-if="coupon.status === 'ACTIVE'"
                    variant-color="green"
                    >{{ coupon.status }}</c-badge
                  >
                  <c-badge
                    mx="2"
                    v-if="coupon.status === 'USED'"
                    variant-color="red"
                    >{{ coupon.status }}</c-badge
                  ></c-text
                > </c-box
              ><c-box>
                <c-text fontSize="11px" color="gray.500">Code</c-text>

                <c-flex>
                  <c-text fontSize="13px">{{ coupon.code }}</c-text>
                </c-flex>
              </c-box>
              <c-box>
                <c-button
                  @click="copyToClipboard(coupon.code)"
                  variant-color="blue"
                  size="xs"
                  mt="3"
                >
                  Copy
                </c-button>
              </c-box>

              <c-box>
                <c-button
                  @click="sendToMail(coupon.code)"
                  variant-color="blue"
                  size="xs"
                  mt="3"
                >
                  Send
                </c-button>
              </c-box>

              <!-- <c-menu>
                <c-menu-button
                  :aria-controls=""
                  class="actions"
                  right-icon="chevron-down"
                  >Actions</c-menu-button
                >
                <c-menu-list :id="">
                  <c-menu-item as="nuxt-link" :to="'./business/' + business.id"
                    >View</c-menu-item
                  >
                  <c-menu-item
                    as="nuxt-link"
                    :to="'/dashboard/coupon/' + business.id"
                    >Generate Coupon</c-menu-item
                  >
                </c-menu-list>
              </c-menu> -->
            </c-grid>
            <c-divider></c-divider>
          </template>
        </c-box>
      </c-stack>
    </div>
  </div>
</template>

<script lang="js">

import countQuery from "~/graphql/queries/counts.gql";
import businessQuery from "~/graphql/queries/businesses.gql";
import couponQuery from "~/graphql/queries/coupons.gql";


export default {
  name: 'Coupons',
  components: {},
  layout: 'dashboard',
  data () {
      return {
        isOpen:false,
         counts : {} ,
         businesses : [],
         coupons:[],
               search: ''

    }
  },
  fetch(){
    this.getCounts();
    this.getBusiness();
    this.getCoupons();
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
    async copyToClipboard(code) {
      try {
        await navigator.clipboard.writeText(String(code));
        alert("Coupon copied successfully")
        // this.$toast({
        //   title: "Coupon Copied ",
        //   description: "Coupon copied successfully",
        //   status: 'success',
        //   duration: 5000
        // })
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    },

    async sendToMail(code) {
      try {
        await this.$axios.$post(`https://vibrantcreator-backend-dev.herokuapp.com/v1/api/admin/${code}/coupon/send`)
        alert("Coupon successfully sent to Company Mail")

        // this.$toast({
        //   title: "Coupon Copied ",
        //   description: "Coupon copied successfully",
        //   status: 'success',
        //   duration: 5000
        // })
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    },
    getCounts(){
      this.$apollo.query({query : countQuery})
        .then(({ data }) => {

          this.counts = data
        })
    },
     getBusiness(){
      this.$apollo.query({query : businessQuery})
        .then(({ data }) => {
          this.businesses = data.company
        })
    },
    getCoupons(){
      this.$apollo.query({query : couponQuery})
        .then(({ data }) => {

          this.coupons = data.coupon
        })
    },
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    }
  }
}
</script>
