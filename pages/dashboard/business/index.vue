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
    <div class="filters">
      <c-input-group mr="5">
        <c-input-left-element
          ><i class="fa fa-search"></i
        ></c-input-left-element>
        <c-input
          v-model="search"
          type="text"
          class="search"
          placeholder="Search business by name,stage,objective,location,plan,size and channel"
        />
      </c-input-group>
      <c-select
        class="search"
        mr="5"
        v-model="size"
        placeholder="Filter by size"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="2-10">2-10</option>
        <option value="11-50">11-50</option>
        <option value="51-200">51-200</option>
      </c-select>
      <c-select
        class="search"
        mr="5"
        v-model="stage"
        placeholder="Filter by stage"
      >
        <option value="Idea stage">Idea stage</option>
        <option value="MVP Stage (Minimum Variable Product)"
          >MVP Stage (Minimum Variable Product)</option
        >
        <option value="Operational Stage">Operational Stage</option>
        <option value="Scaling Stage">Scaling Stage</option>
        <option value="Testing Stage">Testing Stage</option>
        <option value="Validation Stage">Validation Stage</option>
        <option value="Fully established stage">Fully established stage</option>
      </c-select>
      <date-picker
        v-model="dateRange"
        range
        class="search"
        placeholder="Filter by date"
      ></date-picker>
      <download-csv
        v-show="false"
        ref="downloadCSV2"
        :data="businessesToDownload"
        :name="`VC-BUSINESSES-${new Date()}.csv`"
      />
    </div>

    <div class="filters">
      <c-select
        class="search"
        mr="5"
        v-model="selectedContinent"
        placeholder="Filter by continent"
        @change="changeContinent()"
      >
        <option :value="ct.name" v-for="ct in continents" :key="ct.id">
          {{ ct.name }}
        </option>
      </c-select>
      <c-select
        class="search"
        mr="5"
        v-model="location"
        placeholder="Filter by country"
        v-show="selectedContinent"
        @change="filterCountryHandler()"
      >
        <option :value="country" v-for="country in countries" :key="country.id">
          {{ country }}
        </option>
      </c-select>
      <c-select
        class="search"
        mr="5"
        v-model="plan"
        @change="filterHandlerByPlan()"
        placeholder="Filter by subscription"
      >
        <option value="free">Freemium</option>
        <option value="pro">Pro</option>
        <option value="premium">Premium</option>
      </c-select>
      <c-button
        v-show="
          search ||
            size ||
            stage ||
            dateRange ||
            selectedContinent ||
            location ||
            plan
        "
        @click="resetFilters"
        variant-color="gray"
        size="sm"
      >
        Reset Filters
      </c-button>
      <c-button @click="exportBusinesses" variant-color="blue" size="sm">
        Export
      </c-button>
    </div>

    <div class="tableWrapper">
      <table class="table" id="datatable">
        <thead>
          <tr>
            <th>Company name</th>
            <th>Stage</th>
            <th>Objective</th>
            <th>Location</th>
            <th>Investment Ready</th>
            <th>Plan</th>
            <th>Size</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(business, ix) in filteredBusinesses" :key="business.id">
            <td>{{ business.name }}</td>
            <td>{{ business.business_stage.name }}</td>
            <td>{{ business.business_objective.description }}</td>
            <td>{{ business.city }}, {{ business.country }}</td>
            <td>
              {{ business.investmentEtaValue }}
              {{ business.investmentEtaMetric }}
            </td>
            <td v-if="business.billing_subscriptions.length === 0">
              {{ 'free' }}
            </td>
            <td v-else>
              {{
                business.billing_subscriptions[0].planId === 2
                  ? 'Pro'
                  : 'Premium'
              }}
            </td>
            <td>{{ business.size }}</td>
            <td>{{ business.createdAt }}</td>

            <td>
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
                  <c-menu-item
                    as="nuxt-link"
                    :to="'/dashboard/coupon/' + business.id"
                    >Generate Coupon</c-menu-item
                  >
                </c-menu-list>
              </c-menu>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="js">

import countQuery from "~/graphql/queries/counts.gql";
import businessQuery from "~/graphql/queries/businesses.gql";

export default {
  name: 'App',
  components: {DatePicker},
  layout: 'dashboard',
  data () {
      return {
        isOpen:false,
        counts : {} ,
        businesses : [],
        search: '',
        columns: ['name'],
        query: {
          page: 1,
          rowsPerPage: 10,
          sort: [{ column: 'Name', type: 'asc' }],
          filters: {}
        }
    }
  },
  fetch(){
    this.getCounts();
    this.getBusiness();
    this.getBusinessStage();
  },
  computed: {
    filteredBusinesses() {
      return this.businesses.filter(business => {
        // Check for name, city, country, or business stage matching the search term
        const searchTerm = this.search ? this.search.toLowerCase() : '';
        const matchesSearchTerm = business.name.toLowerCase().includes(searchTerm) ||
          business.city.toLowerCase().includes(searchTerm) ||
          business.country.toLowerCase().includes(searchTerm) ||
          business.business_stage.name.toLowerCase().includes(searchTerm);

        // Filter by location
        const matchesLocation = !this.location || business.country.toLowerCase().includes(this.location.toLowerCase());

        // Filter by stage
        const matchesStage = !this.stage || business.business_stage.name.toLowerCase() === this.stage.toLowerCase();

        // Filter by plan (considering zero subscriptions as 'free')
        let selectedPlanCount = null;
        if (this.plan === 'free') {
          selectedPlanCount = 0; // Freemium (no billing subscriptions)
        } else if (this.plan === 'pro') {
          selectedPlanCount = 1; // Pro subscription count
        } else if (this.plan === 'premium') {
          selectedPlanCount = 2; // Premium subscription count
        }
        const matchesPlan = selectedPlanCount === null || business.billing_subscriptions.length === selectedPlanCount;

        // Filter by size
        const matchesSize = !this.size || business.size.toLowerCase() === this.size.toLowerCase();

        // Filter by date
        const matchesDate = !this.dateRange || (
          business.createdAt >= this.dateRange[0] && business.createdAt <= this.dateRange[1]
        );

        return matchesSearchTerm && matchesLocation && matchesStage && matchesPlan  && matchesSize && matchesDate;
      });
    },
    filtereBusinessByLocation(){
      if(!this.location){
        return this.businesses;
      }
      return this.businesses.filter(business => business.country?.toLowerCase().includes(this.location?.toLowerCase()))
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
          created_at: business.created_at,
        }
      })
    },
  },
  methods: {
     getCounts(){
      this.$apollo.query({query : countQuery})
        .then(({ data }) => {
          this.counts = data
        })
    },
    getBusiness () {
      this.$apollo.query({ query: businessQuery })
        .then(({ data }) => {
          this.businesses = data.company
          $("#datatable").DataTable({
            responsive: true
          });
        })
    },

    getBusinessStage(){
      this.$apollo.query({query : businessStage})
        .then(({ data }) => {
          //console.log(data.company.map((item)=> item));
          // this.businesses = data.company
          // $("#datatable").DataTable({
          //   responsive: true
          // });
        })
    },
    changeContinent(){
      if(this.selectedContinent){
        this.continents.forEach(continent => {
          if(continent.name === this.selectedContinent){
            this.countries = continent.countries;
          }
        })
      }
    },
    filterHandlerByPlan() {
      if (this.plan) {
        return this.filteredBusinesses.filter(business => business.plan?.name === this.plan);
      }
      return this.filteredBusinesses;
    },
    filterCountryHandler(){
      if(this.location){
        this.filterHandlerByPlan().filter(business => business.country === this.location);
      }
      return this.filtereBusinessByLocation
    },
     open() {
      this.isOpen = true;
    },
     close() {
      this.isOpen = false;
    },
    resetFilters() {
      this.location = null;
      this.stage = null;
      this.plan = null;
      this.size = null;
      this.search = null;
      this.dateRange = null;
    },
    exportBusinesses(){
      const data = this.filteredBusinesses.map(business => {

        let plan;

        if (business.billing_subscriptions.length === 0) {
          plan = 'free';
        } else if (business.billing_subscriptions.length === 1) {
          plan = 'pro';
        } else if (business.billing_subscriptions.length === 2) {
          plan = 'premium';
        }

        return {
          name: business.name,
          stage: business.business_stage?.name,
          city: business.city,
          country: business.country,
          objective: business.business_objective?.description,
          investmentReady: `${business.investmentEtaValue} ${business.investmentEtaMetric}`,
          plan: plan,
          size: business.size,
          Date: business.createdAt,
        }
      });

      const fileName = 'businesses';
      const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      const fileExtension = '.csv';
      const exportToCSV = (csvData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'csv', type: 'array' });
        const data1 = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data1, fileName);
      };
      exportToCSV(data, fileName);
    }
  },
  watch: {
    filteredBusinesses(val){
      $("#datatable").DataTable().destroy();
      this.$nextTick(function () {
        $("#datatable").DataTable({
          searching: false,
          lengthChange: false,
          responsive: true,
        });
      });
    },
  },
}
</script>

<style>
.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.search {
  width: 300px;
}
.table {
  width: 100%;
  border: 1px solid #e0e0e0;
  padding: 20px;
}
.table thead {
  background-color: #f5f5f5;
}

.table tbody tr:hover {
  background-color: #f5f5f5;
}
.table.dataTable {
  border-collapse: collapse;
}
@media (max-width: 768px) {
  .search {
    width: 100%;
    margin-bottom: 10px;
  }
  .filters {
    flex-wrap: wrap;
  }
  .tableWrapper {
    clear: both;
    max-width: 100%;
    overflow-x: auto;
    position: relative;
  }
  .table {
    width: 100%;
    border: 1px solid #e0e0e0;
    padding: 20px;
    position: relative;
  }
  .table thead {
    width: 100%;
  }
  .table thead tr th {
    width: 100%;
    font-size: 12px;
  }
  .table tbody tr td {
    font-size: 12px;
  }
}
</style>
