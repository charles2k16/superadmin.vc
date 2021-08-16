<template>
  <div class="container">
    <c-heading marginBottom="20px">Business</c-heading>
     <c-stat marginBottom="20px">
        <c-stat-label>Total Registered Businesses</c-stat-label>
        <c-stat-number>{{counts.company_aggregate ? counts.company_aggregate.aggregate.count : 0}}</c-stat-number>
        <c-stat-helper-text>
          <c-stat-arrow type="increase" />
          0.0%
        </c-stat-helper-text>
      </c-stat>
    <div>
      <c-stack :spacing="5">
        <c-box :p="5" border-width="1px">
            <template v-for="business in businesses" >
                <c-grid template-columns="repeat(6, 1fr)" :key="business.id">
                <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Company name
                    </c-text>
                    <c-text fontSize="13px">
                       {{business.name}}
                    </c-text>
                </c-box>
                <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Stage
                    </c-text>
                    <c-text fontSize="13px">
                       {{business.business_stage.name}}
                    </c-text>
                </c-box>
                <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Objective
                    </c-text>
                    <c-text fontSize="13px">
                       {{business.business_objective.description}}
                    </c-text>
                </c-box>
                  <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Location
                    </c-text>
                    <c-text fontSize="13px">
                       {{business.city}}, {{business.country}}
                    </c-text>
                </c-box>
                 <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Investment Ready
                    </c-text>
                    <c-text fontSize="13px">
                        {{business.investmentEtaValue}} {{business.investmentEtaMetric}}
                    </c-text>
                </c-box>
                 <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Size
                    </c-text>
                    <c-text fontSize="13px">
                        {{business.size}}
                    </c-text>
                </c-box>
               
            </c-grid>
            <c-divider :key="business.id">
            </c-divider>
            </template>
        </c-box>
      </c-stack>
    </div>
  </div>
</template>

<script lang="js">

import countQuery from "~/graphql/queries/counts.gql";
import businessQuery from "~/graphql/queries/listBusiness.gql";


export default {
  name: 'App',
  components: {},
  layout: 'dashboard',
  data () {
      return {
         counts : {} ,
         businesses : []
    }
  },
  fetch(){
    this.getCounts();
    this.getBusiness();
  },
  computed: {
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
