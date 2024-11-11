<template>
  <div>
    <a-modal
      style="font-family: Montserrat,serif"
      title="Confirm Payment"
      :dialog-style="{ top: '20px' }"
      :visible="modalVisible"
      centered
      @cancel="setModalVisible(false)"
    >
      <template slot="footer">
        <a-button key="back" @click="setModalVisible(false)">
          Cancel
        </a-button>
        <a-button :disabled="!paymentInvoice" key="submit" type="primary" :loading="loading" @click="confirmPayment">
          Confirm
        </a-button>
      </template>
      <label>Payment Reciept URL</label>
      <a-input v-model="paymentInvoice" placeholder="Enter Reciept Url Here" />
    </a-modal>

    <a-alert
      v-if="error"
      message="Error Occured"
      :description="error.message"
      type="error"
      :banner='true'
      :show-icon='true'
    />
    <a-alert
      v-if="success"
      message="Success"
      type="success"
    >
      <p slot="description">
        You have successfully confirmed payment of affiliate's commission.
      </p>
    </a-alert>

    <a-table
      class="m-table"
      :columns="columns"
      :data-source="coupons"
    >
      <span slot="status" slot-scope="status">
        <a-tag :color="status === 'PAID' ? 'green' : status === 'PENDING' ? 'orange': 'geekblue'">
          {{status}}
        </a-tag>
      </span>
      <span slot="action" slot-scope="action">
        <a-button @click="showDialog(action)" v-if="action.commissionPaymentStatus === 'PENDING'">Confirm Payment</a-button>
      </span>
    </a-table>
  </div>
</template>

<script>
import appliedCoupons from "~/graphql/queries/applied_coupons.graphql"

export default {
  name: 'index',
  layout: 'dashboard',
  component: {

  },
  data(){
    return {
      coupons: null,
      loading: false,
      modalVisible: false,
      paymentInvoice: '',
      selectedItem: null,
      error: '',
      success:false,
      columns: [
        { title: 'Code', dataIndex: 'coupon.code', key: 'code' },
        { title: 'Affiliate', dataIndex: 'companyByProviderid.name', key: 'affiliate' },
        { title: 'Commission(%)', dataIndex: 'coupon.commission', key: 'commission' },
        { title: 'Used By', dataIndex: 'company.name', key: 'used_by' },
        { title: 'Discount(%)', dataIndex: 'coupon.discount', key: 'discount' },
        { title: 'Amount', dataIndex: 'commissionAmount', key: 'amount' },
        { title: 'Payment Status', dataIndex: 'commissionPaymentStatus', key: 'status', scopedSlots: { customRender: 'status'} },
        { title: 'Payment Confirmation', key: 'action', scopedSlots: { customRender: 'action'} },
      ]
    }
  },
  methods: {
    setModalVisible(modalVisible) {
      this.modalVisible = modalVisible;
    },
    async confirmPayment(){
      const payload = {
        receiptUrl: this.paymentInvoice
      }
      const earningId = this.selectedItem.id
      await this.$axios.$post(`/admin/${earningId}/commission`, payload)
        .then((res) => {
          console.log(res);
          this.success = true;
          const payment = this.coupons.find(coup => coup.id === this.selectedItem.id);
          if(payment){
            payment.commissionPaymentStatus = 'PAID'
          }
        }).catch((e) => {
          console.log(e)
        this.success = false
        this.error = e
      })
    },
    showDialog(selected){
      console.log('Selected', selected);
      this.selectedItem = selected
      this.setModalVisible(true)
    },
    getAllAppliedCoupons(){
      this.loading = true;
      this.$apollo.query({query: appliedCoupons})
        .then(({data}) => {
          this.coupons = data.coupon_company
        })
      this.loading = false;
    }
  },

  mounted() {
    this.getAllAppliedCoupons()
  }
};
</script>

<style scoped>
.m-table{
  font-family: Montserrat,sans-serif
}


</style>
