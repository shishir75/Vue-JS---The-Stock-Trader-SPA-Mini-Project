<template>
    <div class="col-md-6">
        <div class="card mt-3">
            <h5 class="card-header">{{ stock.name }} <small>(Price: {{ stock.price }})</small></h5>
            <div class="card-body">
                <div style="width: 85%">
                    <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
                </div>
                <div class="float-right" style="margin-top: -38px;">
                    <button class="btn btn-success ml-2"
                            @click="buyStock"
                            :disabled="quantity <= 0"
                    >Buy</button>
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
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                console.log(order);
                this.quantity = 0;
            }
        }
    }
</script>

<style scoped>

</style>
