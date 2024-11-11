<template>
  <div class="container">
    <c-heading marginBottom="20px">Users</c-heading>
    <c-stat-group>
      <c-stat>
        <c-stat-label>Total Register Users</c-stat-label>
        <c-stat-number>{{
          counts.user_aggregate ? counts.user_aggregate.aggregate.count : 0
        }}</c-stat-number>
        <c-stat-helper-text>
          <c-stat-arrow type="increase" />
          0.0%
        </c-stat-helper-text>
      </c-stat>
    </c-stat-group>

    <div class="filters">
      <c-input-group mr="5">
        <c-input-left-element
          ><i class="fa fa-search"></i
        ></c-input-left-element>
        <c-input
          v-model="search"
          type="text"
          class="search"
          placeholder="Search business by name,company"
        />
      </c-input-group>

      <date-picker v-model="dateRange" range class="search"></date-picker>
      <download-csv
        v-show="false"
        ref="downloadCSV1"
        :data="usersToDownload"
        :name="`VC-USERS-${new Date()}.csv`"
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
        <option value="freemium">Freemium</option>
        <option value="pro">Pro</option>
        <option value="premium">Premium</option>
      </c-select>
      <c-button
        @click="$refs.downloadCSV1.$el.click()"
        variant-color="blue"
        size="sm"
      >
        Export
      </c-button>
    </div>

    <div class="tableWrapper">
      <table id="datatable" class="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Companies</th>
            <th>Registeration Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in filteredUsers" :key="index">
            <td>
              <c-avatar
                :name="
                  user.firstname ? `${user.firstname} ${user.lastname}` : null
                "
              />
            </td>
            <td>
              {{
                user.firstname
                  ? `${user.firstname} ${user.lastname}`
                  : `No name`
              }}
              <c-badge mx="2" v-if="user.isBlocked" variant-color="yellow"
                >blocked</c-badge
              >
              <c-badge mx="2" v-if="user.isDeleted" variant-color="red"
                >deleted</c-badge
              >
            </td>
            <td>{{ user.email }}</td>
            <td>
              {{ user.teams.length ? '' : 'Pending Invites' }}
              <ul>
                <li v-for="(team, index) in user.teams" :key="index">
                  {{ team.company.name }}
                </li>
              </ul>
            </td>
            <td>{{ $moment(user.createdAt).calendar() }}</td>
            <td>
              <c-menu>
                <c-menu-button
                  :aria-controls="index"
                  class="actions"
                  right-icon="chevron-down"
                >
                  Actions
                </c-menu-button>
                <c-menu-list :id="index">
                  <c-menu-item as="nuxt-link" :to="'./user/' + user.id"
                    >View</c-menu-item
                  >
                  <c-menu-item
                    @click="toggleBlock(user.id, user.isBlocked)"
                    v-if="!user.isDeleted"
                    >{{ user.isBlocked ? 'Unblock' : 'Block' }}</c-menu-item
                  >
                  <c-menu-item
                    @click="toggleDelete(user.id, user.isDeleted)"
                    v-if="!user.isBlocked"
                    >{{ user.isDeleted ? 'Undelete' : 'Delete' }}</c-menu-item
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
import userQuery from "~/graphql/queries/users.gql";
import toggleBlockUser from "~/graphql/mutations/toggleBlockUser.gql";
import toggleDeleteUser from "~/graphql/mutations/toggleDeleteUser.gql";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

export default {
  name: 'App',
  components: {
    DatePicker
  },
  layout: 'dashboard',
  data () {
    return {
      counts : {},
      users : [],
      search: '',
        plan: null,
        location: '',
        continents: [
          { name: 'Europe', value: 'europe', countries: [
              'Albania',
              'Austria',
              'Belgium',
              'Bulgaria',
              'Croatia',
              'Cyprus',
              'Czech Republic',
              'Denmark',
              'Estonia',
              'Finland',
              'France',
              'Germany',
              'Greece',
              'Hungary',
              'Iceland',
              'Ireland',
              'Italy',
              'Latvia',
              'Lithuania',
              'Luxembourg',
              'Malta',
              'Netherlands',
              'Norway',
              'Poland',
              'Portugal',
              'Romania',
              'Slovakia',
              'Slovenia',
              'Spain',
              'Sweden',
              'Switzerland',
              'United Kingdom',
            ] },
          { name: 'Asia', value: 'asia', countries: [
              'Afghanistan',
              'Armenia',
              'Azerbaijan',
              'Bahrain',
              'Bangladesh',
              'Bhutan',
              'Brunei',
              'Cambodia',
              'China',
              'India',
              'Indonesia',
              'Iran',
              'Iraq',
              'Israel',
              'Japan',
              'Jordan',
              'Kazakhstan',
              'Kuwait',
              'Kyrgyzstan',
              'Laos',
              'Lebanon',
              'Malaysia',
              'Maldives',
              'Mongolia',
              'Myanmar',
              'Nepal',
              'North Korea',
              'Oman',
              'Pakistan',
              'Palestine',
              'Philippines',
              'Qatar',
              'Saudi Arabia',
              'Singapore',
              'South Korea',
              'Sri Lanka',
              'Syria',
              'Taiwan',
              'Tajikistan',
              'Thailand',
              'Timor-Leste',
              'Turkmenistan',
              'United Arab Emirates',
              'Uzbekistan',
              'Vietnam',
              'Yemen',
            ] },
          { name: 'Africa', value: 'africa', countries: [
              'Algeria',
              'Angola',
              'Benin',
              'Botswana',
              'Burkina Faso',
              'Burundi',
              'Cabo Verde',
              'Cameroon',
              'Central African Republic',
              'Chad',
              'Comoros',
              'Congo',
              'Côte d\'Ivoire',
              'Djibouti',
              'Egypt',
              'Equatorial Guinea',
              'Eritrea',
              'Eswatini',
              'Ethiopia',
              'Gabon',
              'Gambia',
              'Ghana',
              'Guinea',
              'Guinea-Bissau',
              'Kenya',
              'Lesotho',
              'Liberia',
              'Libya',
              'Madagascar',
              'Malawi',
              'Mali',
              'Mauritania',
              'Mauritius',
              'Morocco',
              'Mozambique',
              'Namibia',
              'Niger',
              'Nigeria',
              'Rwanda',
              'Sao Tome and Principe',
              'Senegal',
              'Seychelles',
              'Sierra Leone',
              'Somalia',
              'South Africa',
              'South Sudan',
              'Sudan',
              'Tanzania',
              'Togo',
              'Tunisia',
              'Uganda',
              'Zambia',
              'Zimbabwe',
            ] },
          { name: 'North America', value: 'north-america', countries: [
              'Canada',
              'United States',
              'Mexico',
            ] },
          { name: 'South America', value: 'south-america', countries: [
              'Argentina',
              'Bolivia',
              'Brazil',
              'Chile',
              'Colombia',
              'Ecuador',
              'Guyana',
              'Paraguay',
              'Peru',
              'Suriname',
              'Uruguay',
              'Venezuela',
            ] },
          { name: 'Oceania', value: 'oceania', countries: [
              'Australia',
              'Fiji',
              'Kiribati',
              'Marshall Islands',
              'Micronesia',
              'Nauru',
              'New Zealand',
              'Palau',
              'Papua New Guinea',
              'Samoa',
              'Solomon Islands',
              'Tonga',
              'Tuvalu',
              'Vanuatu',
            ] },
        ],
        countries: [],
        selectedContinent: null,
        dateRange: null,
    }
  },
  fetch(){
    this.getCounts();
    this.getUsers();
  },
  computed: {
    filteredUsers(){
      if(!this.search){
        return this.users;
      }
      return this.users.filter(user => user.firstname?.toLowerCase().includes(this.search?.toLowerCase()) || user.lastname?.toLowerCase().includes(this.search?.toLowerCase()) || user.email?.toLowerCase().includes(this.search?.toLowerCase()))
    },
    filtereBusinessByLocation(){
      if(!this.location){
        return this.users;
      }
      return this.users.filter(users => users.country?.toLowerCase().includes(this.location?.toLowerCase()))
    },
    usersToDownload(){
      return this.users.map(user => {
        return {
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          createdAt: user.createdAt,
          isBlocked: user.isBlocked,
          isDeleted: user.isDeleted,
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
     getUsers(){
      this.$apollo.query({query : userQuery})
        .then(({ data }) => {

          this.users = data.user
          $("#datatable").DataTable({
            responsive: true,
            searching: false,
          });
        })
    },
    toggleBlock(id,isBlocked){
    const block = !isBlocked;
    this.$apollo.mutate({mutation : toggleBlockUser, variables : {id, isBlocked : block}})
        .then(({data})=>{
          this.getUsers();
        })
  },
  toggleDelete(id,isDeleted){
    const deleted = !isDeleted;
    this.$apollo.mutate({mutation : toggleDeleteUser, variables : {id, isDeleted : deleted}})
        .then(({data})=>{
          this.getUsers();
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
        console.log(this.location, 'location');
        this.filterHandlerByPlan().filter(business => business.country === this.location);
      }
      return this.filtereBusinessByLocation
    },
     open() {
      this.isOpen = true;
    },
     close() {
      this.isOpen = false;
    }
  },
  watch: {
    filteredUsers(val){
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
