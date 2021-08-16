<template>
  <div class="container">
    <c-stat-group>
      <c-stat>
        <c-stat-label>Total Registered Businesses</c-stat-label>
        <c-stat-number>380,610</c-stat-number>
        <c-stat-helper-text>
          <c-stat-arrow type="increase" />
          30.60%
        </c-stat-helper-text>
      </c-stat>
      <c-stat>
        <c-stat-label>Total Register Users</c-stat-label>
        <c-stat-number>45</c-stat-number>
        <c-stat-helper-text>
          <c-stat-arrow type="increase" />
          -5.20%
        </c-stat-helper-text>
      </c-stat>
      <c-stat>
        <c-stat-label>Total Posts on Insights</c-stat-label>
        <c-stat-number>45</c-stat-number>
        <c-stat-helper-text>
          <c-stat-arrow type="increase" />
          -5.20%
        </c-stat-helper-text>
      </c-stat>
      <c-stat>
        <c-stat-label>Total Comments on Insights</c-stat-label>
        <c-stat-number>45</c-stat-number>
        <c-stat-helper-text>
          <c-stat-arrow type="increase" />
          -5.20%
        </c-stat-helper-text>
      </c-stat>
    </c-stat-group>
    <highchart :options="chartOptions" />
  </div>
</template>

<script lang="js">
export default {
  name: 'App',
  components: {},
  layout: 'dashboard',
  data () {
      return {
        chartOptions : {

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

}
      }
  },
  computed: {
  },
  methods: {
    getCounts(){
      
    }
  }
}
</script>
