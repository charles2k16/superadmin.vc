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
    <div>
      <c-stack :spacing="5">
        <c-box :p="5" border-width="1px">
          <template v-for="(user, index) in users">
            <c-grid template-columns="100px repeat(4, 1fr) 100px" :key="index">
              <c-box>
                <c-avatar
                  :name="
                    user.firstname ? `${user.firstname} ${user.lastname}` : null
                  "
                />
              </c-box>
              <c-box>
                <c-text fontSize="11px" color="gray.500"> Name </c-text>
                <c-text fontSize="13px">
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
                 
                </c-text>
              </c-box>
              <c-box>
                <c-text fontSize="11px" color="gray.500"> Email </c-text>
                <c-text fontSize="13px">
                  {{ user.email }}
                </c-text>
              </c-box>
              <c-box>
                <c-text fontSize="11px" color="gray.500"> Companies </c-text>
                <c-text fontSize="13px">
                  {{ user.teams.length ? "" : "Pending Invites" }}
                  <ul>
                    <li v-for="(team, index) in user.teams" :key="index">
                      {{ team.company.name }}
                    </li>
                  </ul>
                </c-text>
              </c-box>
              <c-box>
                <c-text fontSize="11px" color="gray.500">
                  Registeration Date
                </c-text>
                <c-text fontSize="13px">
                  {{ $moment(user.createdAt).calendar() }}
                </c-text>
              </c-box>
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
                  <c-menu-item @click="toggleBlock(user.id, user.isBlocked)">{{
                    user.isBlocked ? "Unblock" : "Block"
                  }}</c-menu-item>
                  <c-menu-item @click="toggleDelete(user.id, user.isDeleted)">{{
                    user.isDeleted ? "Undelete" : "Delete"
                  }}</c-menu-item>
                </c-menu-list>
              </c-menu>
            </c-grid>

            <c-divider :key="index"> </c-divider>
          </template>
        </c-box>
      </c-stack>
    </div>
  </div>
</template>

<script lang="js">

import countQuery from "~/graphql/queries/counts.gql";
import userQuery from "~/graphql/queries/users.gql";
import toggleBlockUser from "~/graphql/mutations/toggleBlockUser.gql";
import toggleDeleteUser from "~/graphql/mutations/toggleDeleteUser.gql";

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
  }
  }
}
</script>
