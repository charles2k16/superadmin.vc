<template>
  <div class="container">
    <c-heading marginBottom="20px">Admins</c-heading>
<!-- <c-stat-group>
      <c-stat>
        <c-stat-label>Total Register admins</c-stat-label>
        <c-stat-number>{{ counts.admin_aggregate ? counts.admin_aggregate.aggregate.count : 0}}</c-stat-number>
        <c-stat-helper-text>
          <c-stat-arrow type="increase" />
          0.0%
        </c-stat-helper-text>
      </c-stat>
</c-stat-group> -->
    <div>
        
      <c-stack :spacing="5">
        <c-box :p="5" border-width="1px">
          <template v-for="admin in admins">
            <nuxt-link :to="'./admin/'+admin.id" :key="admin.id">
               <c-grid template-columns="100px repeat(3, 1fr)">
                <c-box>
                <c-avatar :name="admin.firstname ? `${admin.firstname} ${admin.lastname}` : null" />
                </c-box>
                <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Name
                    </c-text>
                    <c-text fontSize="13px">
                        {{admin.firstname ? `${admin.firstname} ${admin.lastname}` : `No name`}}
                    </c-text>
                </c-box>
                <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Email
                    </c-text>
                    <c-text fontSize="13px">
                        {{admin.email}}
                    </c-text>
                </c-box>
                 <c-box>
                    <c-text fontSize="11px" color="gray.500">
                        Registeration Date
                    </c-text>
                    <c-text fontSize="13px">
                        {{$moment(admin.createdAt).calendar()}}
                    </c-text>
                </c-box>       
            </c-grid>
            </nuxt-link>
           
            <c-divider :key="admin.id">
            </c-divider>
          </template>
        </c-box>
      </c-stack>
    </div>
  </div>
</template>

<script lang="js">

import adminQuery from "~/graphql/queries/admins.gql";

export default {
  name: 'App',
  components: {},
  layout: 'dashboard',
  data () {
    return {
      counts : {},
      admins : []
    }
  },
  fetch(){
    this.getAdmins();
  },
  computed: {
  },
  methods: {
     getAdmins(){
      this.$apollo.query({query : adminQuery})
        .then(({ data }) => {
          // do what you want with data
          console.log(data);
          this.admins = data.admin
        })
    }
  }
}
</script>
