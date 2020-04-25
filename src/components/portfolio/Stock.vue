<template>
    <div class="col-md-6">
        <div class="card mt-3">
            <h5 class="card-header">{{ stock.name }} <small>(Price: {{ stock.price | currency }} | Quantity: {{ stock.quantity }})</small></h5>
            <div class="card-body">
                <div style="width: 68%">
                    <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" :class="{danger: insufficientQuantity}">
                </div>
                <div class="float-right" style="margin-top: -38px;">
                    <button class="btn btn-success ml-2"
                            @click="sellStock"
                            :disabled="quantity <= 0 || insufficientQuantity"
                            :class="{'btn-danger': insufficientQuantity}"
                    >{{ insufficientQuantity ? 'Insufficient Qty' : 'Sell'}}</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "Stock",
        props: ['stock'],
        data() {
            return {
                quantity: 0,
            }
        },
        computed: {
            insufficientQuantity() {
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
            ...mapActions({
                'placeSellOrder': "sellStock"
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.placeSellOrder(order);
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

