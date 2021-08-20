<template>
  <div class="container">
    <c-heading marginBottom="20px">
      <c-avatar :name="user.firstname ? `${user.firstname} ${user.lastname}` : null" />
      {{user.firstname}} 
      {{user.lastname}} 
    </c-heading>
    <c-stat-group marginBottom="20px">
      <c-stat>
        <c-stat-label>Saves</c-stat-label>
        <c-stat-number>{{
          user.post_saves_aggregate ? user.post_saves_aggregate.aggregate.count : 0
        }}</c-stat-number>
        <c-stat-helper-text>
          <c-stat-arrow type="increase" />
          0.0%
        </c-stat-helper-text>
      </c-stat>
      <c-stat>
        <c-stat-label>Posts</c-stat-label>
        <c-stat-number>{{
          user.posts_aggregate ? user.posts_aggregate.aggregate.count : 0
        }}</c-stat-number>
        <c-stat-helper-text>
          <c-stat-arrow type="increase" />
          0.0%
        </c-stat-helper-text>
      </c-stat>
      <c-stat>
        <c-stat-label>Comments</c-stat-label>
        <c-stat-number>{{
          user.post_comments_aggregate ? user.post_comments_aggregate.aggregate.count : 0
        }}</c-stat-number>
        <c-stat-helper-text>
          <c-stat-arrow type="increase" />
          0.0%
        </c-stat-helper-text>
      </c-stat>
    </c-stat-group>
    <div>
      <c-box :p="5" border-width="1px">
        <c-grid template-columns="repeat(3, 1fr)">
          <c-box>
            <c-text fontSize="11px" color="gray.500"> Email </c-text>
            <c-text fontSize="13px">
              {{user.email}}
            </c-text>
          </c-box>
          <c-box>
            <c-text fontSize="11px" color="gray.500"> Companies </c-text>
            <c-text fontSize="13px">
                <!-- {{user.teams.length ? '' : 'Pending Invites'}} -->
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
      </c-box>
      <c-grid template-columns="repeat(3, 1fr)" gap="10px" mt="20px">
        <c-box :p="5" border-width="1px">
          <h4>Saves</h4>
        </c-box>
        <c-box :p="5" border-width="1px">
          <h4>Posts</h4>
        </c-box>
        <c-box :p="5" border-width="1px">
          <h4>Comments</h4>
        </c-box>
      </c-grid>
    </div>
  </div>
</template>

<script lang="js">

import countQuery from "~/graphql/queries/counts.gql";
import userQuery from "~/graphql/queries/user.gql";

export default {
  name: 'App',
  components: {},
  layout: 'dashboard',
  data () {
    return {
      counts : {},
      user : {},
      userId : null
    }
  },
  asyncData({app, params}){
    return {
      userId : params.id
    }
  },
  fetch(){
    this.getUser(this.userId);
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
     getUser(id){
      this.$apollo.query({query : userQuery, variables : {id}})
        .then(({ data }) => {
          // do what you want with data
          console.log(data);
          this.user = data.user_by_pk
        })
    }
  }
}
</script>
