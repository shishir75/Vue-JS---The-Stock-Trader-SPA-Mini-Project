<template>
    <div class="col-md-6">
        <div class="card mt-3">
            <h5 class="card-header">{{ stock.name }} <small>(Price: {{ stock.price }})</small></h5>
            <div class="card-body">
                <div style="width: 68%">
                    <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" :class="{danger: insufficientFunds}">
                </div>
                <div class="float-right" style="margin-top: -38px;">
                    <button class="btn btn-success ml-2"
                            @click="buyStock"
                            :disabled="quantity <= 0 || insufficientFunds"
                            :class="{'btn-danger': insufficientFunds}"
                    >{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Stock",
        props: ['stock'],
        data() {
            return {
              quantity: 0,
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            insufficientFunds() {
                return this.quantity * this.stock.price > this.funds;
            },

        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            },
        }
    }
</script>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>
