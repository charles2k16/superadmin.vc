<template>
  <div class="container">
    <c-heading marginBottom="20px">Users</c-heading>
<c-stat-group>
      <c-stat>
        <c-stat-label>Total Register Users</c-stat-label>
        <c-stat-number>{{ counts.user_aggregate ? counts.user_aggregate.aggregate.count : 0}}</c-stat-number>
        <c-stat-helper-text>
          <c-stat-arrow type="increase" />
          0.0%
        </c-stat-helper-text>
      </c-stat>
</c-stat-group>
    <div>
        
      <c-stack :spacing="5">
        <c-box :p="5" border-width="1px">
          <template v-for="user in users">
            <nuxt-link :to="'./user/'+user.id" :key="user.id">
               <c-grid template-columns="100px repeat(4, 1fr)">
                <c-box>
                <c-avatar :name="user.firstname ? `${user.firstname} ${user.lastname}` : null" />
                </c-box>
                <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Name
                    </c-text>
                    <c-text fontSize="13px">
                        {{user.firstname ? `${user.firstname} ${user.lastname}` : `No name`}}
                    </c-text>
                </c-box>
                <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Email
                    </c-text>
                    <c-text fontSize="13px">
                        {{user.email}}
                    </c-text>
                </c-box>
                  <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Companies
                    </c-text>
                    <c-text fontSize="13px">
                      {{user.teams.length ? '' : 'Pending Invites'}}
                        <ul>
                          <li v-for="team in user.teams" :key="team.id">
                            {{team.company.name}}
                          </li>
                        </ul>
                    </c-text>
                </c-box>
                 <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Registeration Date
                    </c-text>
                    <c-text fontSize="13px">
                        {{$moment(user.createdAt).calendar()}}
                    </c-text>
                </c-box>       
            </c-grid>
            </nuxt-link>
           
            <c-divider :key="user.id">
            </c-divider>
          </template>
        </c-box>
      </c-stack>
    </div>
  </div>
</template>

<script lang="js">

import countQuery from "~/graphql/queries/counts.gql";
import userQuery from "~/graphql/queries/users.gql";

export default {
  name: 'App',
  components: {},
  layout: 'dashboard',
  data () {
    return {
      counts : {},
      users : []
    }
  },
  fetch(){
    this.getCounts();
    this.getUsers();
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
     getUsers(){
      this.$apollo.query({query : userQuery})
        .then(({ data }) => {
          // do what you want with data
          console.log(data);
          this.users = data.user
        })
    }
  }
}
</script>
