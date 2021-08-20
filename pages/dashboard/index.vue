<template>
  <div class="container">
    <c-heading marginBottom="20px">Statistics</c-heading>

    <c-stat-group>
      <c-stat>
        <c-stat-label>Total Registered Businesses</c-stat-label>
        <c-stat-number>{{counts.company_aggregate ? counts.company_aggregate.aggregate.count : 0}}</c-stat-number>
        <c-stat-helper-text>
          <c-stat-arrow :type="graphqData.monthly_growth_company ? graphqData.monthly_growth_company[graphqData.monthly_growth_company.lastIndex].growth >= 0 ? 'increase' : 'decrease' : 'increase'" />
          {{graphqData.monthly_growth_company ? graphqData.monthly_growth_company[graphqData.monthly_growth_company.lastIndex].growth + 0 : 0 }}%
        </c-stat-helper-text>
      </c-stat>
      <c-stat>
        <c-stat-label>Total Register Users</c-stat-label>
        <c-stat-number>{{ counts.user_aggregate ? counts.user_aggregate.aggregate.count : 0}}</c-stat-number>
        <c-stat-helper-text>
          <c-stat-arrow :type="graphqData.monthly_growth ? graphqData.monthly_growth[graphqData.monthly_growth.lastIndex].growth >= 0 ? 'increase' : 'decrease' : 'increase'" />
            {{graphqData.monthly_growth ? graphqData.monthly_growth[graphqData.monthly_growth.lastIndex].growth + 0 : 0 }}%
        </c-stat-helper-text>
      </c-stat>
      <c-stat>
        <c-stat-label>Total Posts on Insights</c-stat-label>
        <c-stat-number>{{ counts.post_aggregate ? counts.post_aggregate.aggregate.count : 0}}</c-stat-number>
        <c-stat-helper-text>
          <c-stat-arrow :type="graphqData.monthly_growth_post ? graphqData.monthly_growth_post[graphqData.monthly_growth_post.lastIndex].growth >= 0 ? 'increase' : 'decrease' : 'increase'" />
            {{graphqData.monthly_growth_post ? graphqData.monthly_growth_post[graphqData.monthly_growth_post.lastIndex].growth + 0 : 0 }}%
        </c-stat-helper-text>
      </c-stat>
      <c-stat>
        <c-stat-label>Total Comments on Insights</c-stat-label>
        <c-stat-number>{{ counts.post_comment_aggregate ? counts.post_comment_aggregate.aggregate.count : 0}}</c-stat-number>
        <c-stat-helper-text>
            <c-stat-arrow :type="graphqData.monthly_growth_comment ? graphqData.monthly_growth_comment[graphqData.monthly_growth_comment.lastIndex].growth >= 0 ? 'increase' : 'decrease' : 'increase'" />
            {{graphqData.monthly_growth_comment ? graphqData.monthly_growth_comment[graphqData.monthly_growth_comment.lastIndex].growth + 0 : 0 }}%
        </c-stat-helper-text>
      </c-stat>
    </c-stat-group>
    <highchart :options="chartOptions" />
  </div>
</template>

<script lang="js">

import countQuery from "~/graphql/queries/counts.gql";
import graphQuery from "~/graphql/queries/mom.gql";

export default {
  name: 'App',
  components: {},
  layout: 'dashboard',
  data () {
        return {
      chartOptions: {

          title: {
              text: 'Growth'
          },

          subtitle: {
              text: 'Business, User, Post and Comment Growoth MoM'
          },

          yAxis: {
              title: {
                  text: 'Units'
              }
          },

          xAxis: {
              type: 'datetime',
              tickInterval: 1000 * 3600 * 24 *30,
              accessibility: {
                  rangeDescription: 'Jan - Dec'
              }
          },

          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
          },

          plotOptions: {
              series: {
                  label: {
                      connectorAllowed: false
                  },
                  pointStart: 2014
              }
          },

          series: [{
              name: 'Business',
              data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
          }, {
              name: 'Users',
              data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
          }, {
              name: 'Posts',
              data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
          }, {
              name: 'Comments',
              data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
          }],

          responsive: {
              rules: [{
                  condition: {
                      maxWidth: 500
                  },
                  chartOptions: {
                      legend: {
                          layout: 'horizontal',
                          align: 'center',
                          verticalAlign: 'bottom'
                      }
                  }
              }]
          }
      },
      counts : {},
      graphqData :{}
  }
  },
  fetch(){
    this.getCounts();
    this.getGraphData();
  },

  computed: {
  },
  methods: {
    getCounts(){
      this.$apollo.query({query : countQuery})
        .then(({ data }) => {
          // do what you want with data
          this.counts = data
        })
    },
    async getGraphData(){
     this.$apollo.query({query : graphQuery}).then(({data})=> {
       console.log(data);
       this.graphqData = data;
       this.chartOptions.series[0].data = this.graphqData.monthly_growth_company.map((user_month)=>{
         return {
           x : new Date(user_month.month),
           y : user_month.total
         }
       })
       this.chartOptions.series[1].data = this.graphqData.monthly_growth.map((user_month)=>{
         return {
           x : new Date(user_month.month),
           y : user_month.total
         }
       })
       this.chartOptions.series[2].data = this.graphqData.monthly_growth_post.map((user_month)=>{
         return {
           x : new Date(user_month.month),
           y : user_month.total
         }
       })
       this.chartOptions.series[3].data = this.graphqData.monthly_growth_comment.map((user_month)=>{
         return {
           x : new Date(user_month.month),
           y : user_month.total
         }
       })
     })
    }
  }
}
</script>
