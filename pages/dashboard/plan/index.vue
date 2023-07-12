<template>
  <div class="container">
    <c-heading marginBottom="20px">Plans</c-heading>
    <c-tabs>
      <c-tab-list>
        <c-tab>Free Plan</c-tab>
        <c-tab>Pro Plan</c-tab>
        <c-tab>Premium Plan</c-tab>
      </c-tab-list>
      <c-tab-panels>
        <c-tab-panel>
          <div v-for="business in businesses">
            <div v-if="business.billing_subscriptions.length === 0">
              <c-grid template-columns="repeat(6, 2fr)" py="2">
                <c-box>
                  <c-text fontSize="11px" color="gray.500">Company name</c-text>
                  <c-text fontSize="13px">{{ business.name }}</c-text>
                </c-box>
                <c-box>
                  <c-text fontSize="11px" color="gray.500">Status</c-text>
                  <c-text fontSize="13px">active</c-text>
                </c-box>

                <c-menu>
                  <c-menu-button
                    :aria-controls="ix"
                    class="actions"
                    right-icon="chevron-down"
                    >Actions</c-menu-button
                  >
                  <c-menu-list :id="ix">
                    <c-menu-item
                      as="nuxt-link"
                      :to="'./business/' + business.id"
                      >View</c-menu-item
                    >
                  </c-menu-list>
                </c-menu>
              </c-grid>
            </div>
          </div>
        </c-tab-panel>
        <c-tab-panel>
          <div v-for="business in businesses">
            <div v-if="business.billing_subscriptions.length === 0"></div>
            <div v-else-if="business.billing_subscriptions[0].planId === 2">
              <c-grid template-columns="repeat(6, 2fr)" py="2">
                <c-box>
                  <c-text fontSize="11px" color="gray.500">Company name</c-text>
                  <c-text fontSize="13px">{{ business.name }}</c-text>
                </c-box>
                <c-box>
                  <c-text fontSize="11px" color="gray.500">Status</c-text>
                  <c-text fontSize="13px">active</c-text>
                </c-box>

                <c-menu>
                  <c-menu-button
                    :aria-controls="ix"
                    class="actions"
                    right-icon="chevron-down"
                    >Actions</c-menu-button
                  >
                  <c-menu-list :id="ix">
                    <c-menu-item
                      as="nuxt-link"
                      :to="'./business/' + business.id"
                      >View</c-menu-item
                    >
                  </c-menu-list>
                </c-menu>
              </c-grid>
            </div>
            <div v-else>
              There are no companies on this plan
            </div>
          </div>
        </c-tab-panel>
        <c-tab-panel
          ><div v-for="business in businesses">
            <div v-if="business.billing_subscriptions.length === 0"></div>
            <div v-else-if="business.billing_subscriptions[0].planId === 3">
              <c-grid template-columns="repeat(6, 2fr)" py="2">
                <c-box>
                  <c-text fontSize="11px" color="gray.500">Company name</c-text>
                  <c-text fontSize="13px">{{ business.name }}</c-text>
                </c-box>
                <c-box>
                  <c-text fontSize="11px" color="gray.500">Status</c-text>
                  <c-text fontSize="13px">active</c-text>
                </c-box>

                <c-menu>
                  <c-menu-button
                    :aria-controls="ix"
                    class="actions"
                    right-icon="chevron-down"
                    >Actions</c-menu-button
                  >
                  <c-menu-list :id="ix">
                    <c-menu-item
                      as="nuxt-link"
                      :to="'./business/' + business.id"
                      >View</c-menu-item
                    >
                  </c-menu-list>
                </c-menu>
              </c-grid>
            </div>
            <div v-else>
              There are no companies on this plan currently
            </div>
          </div>
        </c-tab-panel>
      </c-tab-panels>
    </c-tabs>
    <br />
    <br />
  </div>
</template>

<script lang="js">
import businessQuery from "~/graphql/queries/businesses.gql";


export default {
  name: 'App',
  components: {

  },
  layout: 'dashboard',
  data () {
    return {
       businesses : [],
      }
  },
 fetch(){
    this.getBusiness();
  },
  computed: {
  },
  methods: {
  getBusiness(){
      this.$apollo.query({query : businessQuery})
        .then(({ data }) => {
          console.log(data.company.map((item)=> item));
          this.businesses = data.company
        })
    }

  }
}
</script>
