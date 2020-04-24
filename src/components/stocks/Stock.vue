<template>
    <div class="col-md-6">
        <div class="card mt-3">
            <h5 class="card-header">NAME <small>(Price: PRICE)</small></h5>
            <div class="card-body">
                <div style="width: 85%">
                    <input type="number" class="form-control" placeholder="Quantity" >
                </div>
                <div class="float-right" style="margin-top: -38px;">
                    <button class="btn btn-success ml-2">Buy</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Stock"
    }
</script>

<style scoped>

</style>
