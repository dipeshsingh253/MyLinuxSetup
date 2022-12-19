<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view v-if="(categories && products)" :baseUrl="baseUrl" :categories="categories" :products="products" />
</template>

<script>

import axios from 'axios';

export default {

  data() {
    return {

      baseUrl: "http://localhost:8088/",
      products: null,
      categories: null

    }
  },

  methods: {

    async fetchData() {

      await axios.get(this.baseUrl + "categories")
        .then((res) => {
          this.categories = res.data
        }).catch((err) => {
          console.log(err);
        });

      await axios.get(this.baseUrl + "products")
        .then((res) => {
          this.products = res.data
        }).catch((err) => {
          console.log(err);
        });
    }


  },

  mounted() {
    this.fetchData();
  }

}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
