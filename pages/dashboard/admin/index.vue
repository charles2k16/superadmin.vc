<template>
  <div class="container">
    <c-heading marginBottom="20px"
      >Admins
      <c-button size="xs" @click="openAddAmin()" variant-color="blue">
        Add Admin
      </c-button>
    </c-heading>

    <div v-if='fetching'>
      <c-spinner color='gray' size="xl" />
    </div>
    <div v-else>
      <c-stack :spacing="5">
        <c-box :p="5" border-width="1px">
          <template v-for="admin in admins">
            <nuxt-link :to="'./admin/' + admin.id">
              <c-grid template-columns="100px repeat(3, 1fr)">
                <c-box>
                  <c-avatar
                    :name="
                      admin.firstName
                        ? `${admin.firstName} ${admin.lastName}`
                        : null
                    "
                  />
                </c-box>
                <c-box>
                  <c-text fontSize="11px" color="gray.500"> Name </c-text>
                  <c-text fontSize="13px">
                    {{
                      admin.firstName
                        ? `${admin.firstName} ${admin.lastName}`
                        : `No name`
                    }}
                  </c-text>
                </c-box>
                <c-box>
                  <c-text fontSize="11px" color="gray.500"> Email </c-text>
                  <c-text fontSize="13px">
                    {{ admin.email }}
                  </c-text>
                </c-box>
                <c-box>
                  <c-text fontSize="11px" color="gray.500">
                    Registeration Date
                  </c-text>
                  <c-text fontSize="13px">
                    {{ $moment(admin.createdAt).calendar() }}
                  </c-text>
                </c-box>
              </c-grid>
            </nuxt-link>

            <c-divider :key="admin.id"> </c-divider>
          </template>
        </c-box>
      </c-stack>
    </div>

    <c-modal
      :is-open="isOpenModal"
      :on-close="closeModal"
      :closeOnOverlayClick="false"
      size="xl"
    >
      <c-modal-content ref="content">
        <c-modal-header>Add Admin</c-modal-header>
        <c-modal-close-button />
        <c-modal-body>
          <c-stack>
            <c-label>
              <b>First name</b>
              <c-input v-model="add.firstName" size="md" required />
            </c-label>
            <c-label>
              <b>Last name</b>
              <c-input v-model="add.lastName" size="md" required />
            </c-label>
            <c-label>
              <b>Email</b>
              <c-input type="email" v-model="add.email" size="md" required />
            </c-label>
          </c-stack>
        </c-modal-body>
        <c-modal-footer>
          <c-button
            :isLoading="addingAdmin"
            @click="addAdmin"
            variant-color="blue"
            mr="3"
          >
            Save
          </c-button>
          <c-button @click="closeModal">Close</c-button>
        </c-modal-footer>
      </c-modal-content>
      <c-modal-overlay />
    </c-modal>
  </div>
</template>

<script lang="js">

import adminQuery from "~/graphql/queries/admins.gql";

export default {
  name: 'Admin',
  components: {},
  layout: 'dashboard',
  data () {
    return {
      fetching: false,
      counts : {},
      admins : [],
      add : {
        firstName : "",
        lastName : "",
        email : ""
      },
      isOpenModal : false,
      addingAdmin : false
    }
  },
  fetch(){
    this.getAdmins();
  },
  computed: {
  },
  methods: {
     getAdmins(){
      this.fetching = true;
      this.$apollo.query({query : adminQuery, })
        .then(({ data }) => {
          // do what you want with data
          console.log(data);
          this.admins = data.admin
        }).catch((e) => {
        console.log(e);
      })
      this.fetching = false;
    },
    openAddAmin(){
      this.isOpenModal = true
    },
    closeModal(){
      this.add = {
        firstName : "",
        lastName : "",
        email : ""
      };
      this.isOpenModal = false;
      this.getAdmins();
    },
    async addAdmin(){
      this.addingAdmin = true;
      try {
        await this.$axios.post('/admin', this.add);
        this.closeModal();
      } catch (e) {
        this.closeModal();
        const {message} = e.response.data;
        this.$toast({
          description: message,
          status: 'error',
          duration: 5000
        })
      }
    }
  }
}
</script>
