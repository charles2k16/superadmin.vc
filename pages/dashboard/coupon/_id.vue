<template>
  <div class="container">
    <c-heading marginBottom="20px">
      <c-avatar :name="business.name ? `${business.name}` : null" />
      {{ business.name }}
    </c-heading>

    <div>
      <c-box :p="5" width="600px" border-width="1px">
        <c-grid template-columns="repeat(1, 1fr)" gap="6">
          <c-box>
            <c-form-control is-required>
              <c-form-label for="discount">Discount (%)</c-form-label>
              <c-input
                type="number"
                id="discount"
                v-model="discount"
                placeholder="Discount"
              /> </c-form-control
          ></c-box>

          <c-box>
            <c-form-control is-required>
              <c-form-label for="commission">Comission (%)</c-form-label>
              <c-input
                type="number"
                id="commission"
                v-model="commission"
                placeholder="Commission"
              /> </c-form-control
          ></c-box>
        </c-grid>
        <c-box> </c-box>
      </c-box>
    </div>
    <c-button variant-color="blue" mt="6" size="sm" @click="fetchSomething()">
      Generate Coupon
    </c-button>
  </div>
</template>

<script lang="js">


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
      coupon : {},
      businessId : null,
      discount:null,
      commission:null,
    }
  },
  methods: {
    async fetchSomething() {
        try {
            const coupon = await this.$axios.$post('https://server.vibrantcreator.com/v1/api/admin/coupon/create',{
        commission:this.commission,
        discount:this.discount,
        companyId: this.businessId
    })

        this.coupon = coupon.data
        alert("Coupon Generated Successfully and sent to Company Mail")
        this.commission = null
        this.discount = null

        await this.$axios.$post(`https://server.vibrantcreator.com/v1/api/admin/${coupon.data}/coupon/send`)

    } catch (error) {
        let e= {error}
        console.log(e,"hi")
    }

  }
  },
  computed: {

  },

}
</script>
