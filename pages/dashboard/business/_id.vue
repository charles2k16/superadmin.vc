<template>
  <div class="container">
    <c-heading marginBottom="20px">
      <c-avatar :name="business.name ? `${business.name}` : null" />
      {{business.name}}
    </c-heading>

    <div>
      <c-box :p="5" border-width="1px">
        <c-grid template-columns="repeat(3, 1fr)" gap="6">
          <c-box>
            <c-text fontSize="11px" color="gray.500">Size</c-text>
            <c-text fontSize="13px">{{business.size}}</c-text>
          </c-box>
          <c-box>
            <c-text fontSize="11px" color="gray.500">Stage</c-text>
            <c-text fontSize="13px" v-if="business.business_stage">{{business.business_stage.name}}</c-text>
          </c-box>
          <c-box>
            <c-text fontSize="11px" color="gray.500">Users</c-text>
            <c-text fontSize="13px">
              <!-- {{user.teams.length ? '' : 'Pending Invites'}} -->
              <ul>
                <!-- <li v-for="team in user.teams" :key="team.id">{{team.company.name}}</li> -->
              </ul>
            </c-text>
          </c-box>
          <c-box>
            <c-text fontSize="11px" color="gray.500">Registeration Date</c-text>
            <c-text
              fontSize="13px"
            >{{$moment(business.createdAt).format('MMMM Do YYYY, h:mm:ss a')}}</c-text>
          </c-box>
          <c-box>
            <c-text fontSize="11px" color="gray.500">Company Sector</c-text>
            <c-flex mt="1">
              <c-badge
                :mx="idx!== 0 ? 2: 0"
                variant="subtle"
                variant-color="green"
                v-for="(sector, idx) in business.company_sectors"
                :key="idx"
              >{{sector.business_sector.name}}</c-badge>
            </c-flex>
          </c-box>
        </c-grid>
      </c-box>
      <c-grid template-columns="repeat(3, 1fr)" gap="10px" mt="20px">
        <c-box :p="5" border-width="1px">
          <h4>Saves</h4>
          <br />
        </c-box>
        <c-box :p="5" border-width="1px">
          <h4>Posts</h4>
          <br />
        </c-box>
        <c-box :p="5" border-width="1px">
          <h4>Comments</h4>
          <br />
        </c-box>
      </c-grid>
    </div>
  </div>
</template>

<script lang="js">

import countQuery from "~/graphql/queries/counts.gql";
import businessQuery from "~/graphql/queries/business.gql";

export default {
  name: 'App',
  components: {},
  layout: 'dashboard',
  async asyncData({app, params}){
    const apolloClient = app.apolloProvider.defaultClient
    return {
      businessId : params.id,
      business : (await apolloClient.query({query : businessQuery, variables : {id : params.id}})).data.company_by_pk
    }
  },
  data () {
    return {
      counts : {},
      business : {},
      businessId : null
    }
  },
  methods: {
    getCounts(){
      this.$apollo.query({query : countQuery})
        .then(({ data }) => {
          // do what you want with data
          console.log(data);
          this.counts = data
        })
    }
  },
  computed: {
  }
}
</script>
