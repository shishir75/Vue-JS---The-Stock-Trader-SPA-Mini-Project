<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>

        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <router-link to="/portfolio" class="nav-item" active-class="active" tag="li"><a class="nav-link">Portfolio</a></router-link>
                <router-link to="/stocks" class="nav-item" active-class="active" tag="li"><a class="nav-link">Stocks</a></router-link>
            </ul>
            <strong class="navbar-text navbar-right">Your Funds: {{ funds | currency }}</strong>
            <ul class="navbar-nav my-2 my-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="endDay">End Day</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" @click.prevent="isDropdownShow = !isDropdownShow" href="#">Save & Load</a>
                    <div class="dropdown-menu" :class="{ show: isDropdownShow }">
                        <a class="dropdown-item" href="#" @click.prevent="saveData">Save Data</a>
                        <a class="dropdown-item" href="#" @click.prevent="loadData">Load Data</a>
                    </div>
                </li>

            </ul>
        </div>
    </nav>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: "Header",
        data() {
          return {
              isDropdownShow: false
          }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        },
        methods: {
            ...mapActions({
                randomizeStocks :'randomizeStocks',
                fetchData : 'loadData'
            }),
            endDay() {
                return this.randomizeStocks();
            },
            saveData() {
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                };
                this.$http.put('data.json', data);
                this.isDropdownShow = false;
            },
            loadData() {
                this.fetchData();
                this.isDropdownShow = false;
            }
        }
    }
</script>

<style scoped>
    .active {
        color: red !important;
        background-color: gray;
    }
</style>
