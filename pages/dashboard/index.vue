<template>
  <div class="container">
    <c-heading marginBottom="20px">Statistics</c-heading>

    <c-stat-group class='statHeader'>
      <c-stat>
        <c-stat-label>Total Registered Businesses</c-stat-label>
        <c-stat-number>{{
          counts.company_aggregate
            ? counts.company_aggregate.aggregate.count
            : 0
        }}</c-stat-number>
        <c-stat-helper-text>
          <c-stat-arrow
            :type="
              graphqData.monthly_growth_company
                ? graphqData.monthly_growth_company[
                    graphqData.monthly_growth_company.lastIndex
                  ].growth >= 0
                  ? 'increase'
                  : 'decrease'
                : 'increase'
            "
          />
          {{
            graphqData.monthly_growth_company
              ? graphqData.monthly_growth_company[
                  graphqData.monthly_growth_company.lastIndex
                ].growth + 0
              : 0
          }}%
        </c-stat-helper-text>
      </c-stat>
      <c-stat>
        <c-stat-label>Total Register Users</c-stat-label>
        <c-stat-number>{{
          counts.user_aggregate ? counts.user_aggregate.aggregate.count : 0
        }}</c-stat-number>
        <c-stat-helper-text>
          <c-stat-arrow
            :type="
              graphqData.monthly_growth
                ? graphqData.monthly_growth[graphqData.monthly_growth.lastIndex]
                    .growth >= 0
                  ? 'increase'
                  : 'decrease'
                : 'increase'
            "
          />
          {{
            graphqData.monthly_growth
              ? graphqData.monthly_growth[graphqData.monthly_growth.lastIndex]
                  .growth + 0
              : 0
          }}%
        </c-stat-helper-text>
      </c-stat>
      <c-stat>
        <c-stat-label>Total Posts on Insights</c-stat-label>
        <c-stat-number>{{
          counts.post_aggregate ? counts.post_aggregate.aggregate.count : 0
        }}</c-stat-number>
        <c-stat-helper-text>
          <c-stat-arrow
            :type="
              graphqData.monthly_growth_post
                ? graphqData.monthly_growth_post[
                    graphqData.monthly_growth_post.lastIndex
                  ].growth >= 0
                  ? 'increase'
                  : 'decrease'
                : 'increase'
            "
          />
          {{
            graphqData.monthly_growth_post
              ? graphqData.monthly_growth_post[
                  graphqData.monthly_growth_post.lastIndex
                ].growth + 0
              : 0
          }}%
        </c-stat-helper-text>
      </c-stat>
      <c-stat>
        <c-stat-label>Total Comments on Insights</c-stat-label>
        <c-stat-number>{{
          counts.post_comment_aggregate
            ? counts.post_comment_aggregate.aggregate.count
            : 0
        }}</c-stat-number>
        <c-stat-helper-text>
          <c-stat-arrow
            :type="
              graphqData.monthly_growth_comment
                ? graphqData.monthly_growth_comment[
                    graphqData.monthly_growth_comment.lastIndex
                  ].growth >= 0
                  ? 'increase'
                  : 'decrease'
                : 'increase'
            "
          />
          {{
            graphqData.monthly_growth_comment
              ? graphqData.monthly_growth_comment[
                  graphqData.monthly_growth_comment.lastIndex
                ].growth + 0
              : 0
          }}%
        </c-stat-helper-text>
      </c-stat>
    </c-stat-group>
    <highchart :options="dailychartOptions" class='chart-container' />
    <highchart :options="weeklychartOptions" class='chart-container'/>
    <highchart :options="monthlychartOptions" class='chart-container'/>

    <highchart :options="dailychartActiveOptions" class='chart-container'/>
    <highchart :options="weeklychartActiveOptions" class='chart-container'/>
    <highchart :options="monthlychartActiveOptions" class='chart-container'/>
  </div>
</template>

<script lang="js">

import countQuery from "~/graphql/queries/counts.gql";
import graphQuery from "~/graphql/queries/stats.gql";

export default {
  name: 'App',
  components: {},
  layout: 'dashboard',
  data () {
    return {
      monthlychartOptions: {
          title: {
              text: 'Monthly Growth'
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
              data: [0, 0, 0, 0, 0, 0, 0, 0]
          }, {
              name: 'Users',
              data: [0, 0, 0, 0, 0, 0, 0, 0]
          }, {
              name: 'Posts',
              data: [0, 0, 0, 0, 0, 0, 0, 0]
          }, {
              name: 'Comments',
              data: [0, 0, 0, 0, 0, 0, 0, 0]
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
      monthlychartActiveOptions: {
          title: {
              text: 'Monthly Active'
          },

          subtitle: {
              text: 'Post and Comment Active Users'
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

          series: [
              {
              name: 'Users',
              data: [0, 0, 0, 0, 0, 0, 0, 0]
          },
              {
              name: 'Posts',
              data: [0, 0, 0, 0, 0, 0, 0, 0]
          }, {
              name: 'Comments',
              data: [0, 0, 0, 0, 0, 0, 0, 0]
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
        weeklychartOptions: {
          title: {
              text: 'Weekly Growth'
          },

          subtitle: {
              text: 'Business, User, Post and Comment Growth'
          },

          yAxis: {
              title: {
                  text: 'Units'
              }
          },

          xAxis: {
              type: 'linear',
              tickInterval : 1,
              max : 52,
              accessibility: {
                  rangeDescription: 'Weeks'
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
              data: [0, 0, 0, 0, 0, 0, 0, 0]
          }, {
              name: 'Users',
              data: [0, 0, 0, 0, 0, 0, 0, 0]
          }, {
              name: 'Posts',
              data: [0, 0, 0, 0, 0, 0, 0, 0]
          }, {
              name: 'Comments',
              data: [0, 0, 0, 0, 0, 0, 0, 0]
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
      weeklychartActiveOptions: {
          title: {
              text: 'Weekly Active'
          },

          subtitle: {
              text: 'Post and Comment Active Users'
          },

          yAxis: {
              title: {
                  text: 'Units'
              }
          },

          xAxis: {
              type: 'linear',
              tickInterval : 1,
              max : 52,
              accessibility: {
                  rangeDescription: 'Weeks'
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

          series: [
              {
              name: 'Users',
              data: [0, 0, 0, 0, 0, 0, 0, 0]
          },
              {
              name: 'Posts',
              data: [0, 0, 0, 0, 0, 0, 0, 0]
          }, {
              name: 'Comments',
              data: [0, 0, 0, 0, 0, 0, 0, 0]
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
       dailychartOptions: {
          title: {
              text: 'Daily Growth'
          },

          subtitle: {
              text: 'Business, User, Post and Comment Growth'
          },

          yAxis: {
              title: {
                  text: 'Units'
              }
          },


           xAxis: {
              type: 'datetime',
              tickInterval: 1000 * 3600 * 24,
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
              data: [0, 0, 0, 0, 0, 0, 0, 0]
          }, {
              name: 'Users',
              data: [0, 0, 0, 0, 0, 0, 0, 0]
          }, {
              name: 'Posts',
              data: [0, 0, 0, 0, 0, 0, 0, 0]
          }, {
              name: 'Comments',
              data: [0, 0, 0, 0, 0, 0, 0, 0]
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
      dailychartActiveOptions: {
          title: {
              text: 'Daily Active'
          },

          subtitle: {
              text: 'Post and Comment Active Users'
          },

          yAxis: {
              title: {
                  text: 'Units'
              }
          },

          xAxis: {
              type: 'datetime',
              tickInterval: 1000 * 3600 * 24 ,
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

          series: [
              {
              name: 'Users',
              data: [0, 0, 0, 0, 0, 0, 0, 0]
          },
              {
              name: 'Posts',
              data: [0, 0, 0, 0, 0, 0, 0, 0]
          }, {
              name: 'Comments',
              data: [0, 0, 0, 0, 0, 0, 0, 0]
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
       this.graphqData = data;
       this.monthlychartOptions.series[0].data = this.graphqData.monthly_growth_company.map((user_month)=>{
         return {
           x : new Date(user_month.month),
           y : user_month.total
         }
       })
       this.monthlychartOptions.series[1].data = this.graphqData.monthly_growth.map((user_month)=>{
         return {
           x : new Date(user_month.month),
           y : user_month.total
         }
       })
       this.monthlychartOptions.series[2].data = this.graphqData.monthly_growth_post.map((user_month)=>{
         return {
           x : new Date(user_month.month),
           y : user_month.total
         }
       })
       this.monthlychartOptions.series[3].data = this.graphqData.monthly_growth_comment.map((user_month)=>{
         return {
           x : new Date(user_month.month),
           y : user_month.total
         }
       })
        this.monthlychartActiveOptions.series[0].data = this.graphqData.monthly_active_user.map((user_month)=>{
         return {
           x : new Date(user_month.month),
           y : user_month.total
         }
       })
       this.monthlychartActiveOptions.series[1].data = this.graphqData.monthly_active_post_user.map((user_month)=>{
         return {
           x : new Date(user_month.month),
           y : user_month.total
         }
       })
       this.monthlychartActiveOptions.series[2].data = this.graphqData.monthly_active_comment_user.map((user_month)=>{
         return {
           x : new Date(user_month.month),
           y : user_month.total
         }
       })
         this.dailychartOptions.series[0].data = this.graphqData.daily_growth_company.map((user_day)=>{
         return {
           x : new Date(user_day.day),
           y : user_day.total
         }
       })
       this.dailychartOptions.series[1].data = this.graphqData.daily_growth.map((user_day)=>{
         return {
           x : new Date(user_day.day),
           y : user_day.total
         }
       })
       this.dailychartOptions.series[2].data = this.graphqData.daily_growth_post.map((user_day)=>{
         return {
           x : new Date(user_day.day),
           y : user_day.total
         }
       })
       this.dailychartOptions.series[3].data = this.graphqData.daily_growth_comment.map((user_day)=>{
         return {
           x : new Date(user_day.day),
           y : user_day.total
         }
       })
       this.dailychartActiveOptions.series[0].data = this.graphqData.daily_active_user.map((user_day)=>{
         return {
           x : new Date(user_day.day),
           y : user_day.total
         }
       })
      this.dailychartActiveOptions.series[1].data = this.graphqData.daily_active_post_users.map((user_day)=>{
         return {
           x : new Date(user_day.day),
           y : user_day.total
         }
       })
       this.dailychartActiveOptions.series[2].data = this.graphqData.daily_active_comment_users.map((user_day)=>{
         return {
           x : new Date(user_day.day),
           y : user_day.total
         }
       })
      this.weeklychartOptions.series[0].data = this.graphqData.weekly_growth_company.map((user_week)=>{
         return {
           x : user_week.week,
           y : user_week.total
         }
       })
       this.weeklychartOptions.series[1].data = this.graphqData.weekly_growth.map((user_week)=>{
         return {
           x : user_week.week,
           y : user_week.total
         }
       })
       this.weeklychartOptions.series[2].data = this.graphqData.weekly_growth_post.map((user_week)=>{
         return {
           x : user_week.week,
           y : user_week.total
         }
       })
       this.weeklychartOptions.series[3].data = this.graphqData.weekly_growth_comment.map((user_week)=>{
         return {
           x : user_week.week,
           y : user_week.total
         }
       })
       this.weeklychartActiveOptions.series[0].data = this.graphqData.weekly_active_user.map((user_week)=>{
         return {
           x : user_week.week,
           y : user_week.total
         }
       })
        this.weeklychartActiveOptions.series[1].data = this.graphqData.weekly_active_post_user.map((user_week)=>{
         return {
           x : user_week.week,
           y : user_week.total
         }
       })
       this.weeklychartActiveOptions.series[2].data = this.graphqData.weekly_active_comment_user.map((user_week)=>{
         return {
           x : user_week.week,
           y : user_week.total
         }
       })
     })
    }
  }
}
</script>

<style>
@media (max-width: 768px) {
  .container {
    width: 100% !important;
  }
  .chart-container {
    width: 100% !important;
  }
  .statHeader{
    font-size: 1.5rem !important;
    display: block !important;

  }
}
</style>
