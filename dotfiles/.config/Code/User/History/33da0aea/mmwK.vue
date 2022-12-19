<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">All Categories</h4>
                <!-- <router-link id="add-category" :to="{ name: 'AddCategory' }" v-show="$route.name == 'AdminCategory'">
                    <button class="btn">Add a new Category</button>
                </router-link> -->
            </div>
        </div>
        <div class="row">
            <!-- <div v-for="category of categories" :key="category.id"
                class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
                <CategoryBox :category="category">
                </CategoryBox>
            </div> -->
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="!categories.length">
                        <td colspan="4" style="text-align:center;">Data not found!</td>
                    </tr>
                    <tr v-for="category in categories" :key="category.id">
                        <td>{{ category.id }}</td>
                        <td>{{ category.categoryName }}</td>
                    </tr>
                </tbody>
            </table>


        </div>
    </div>
</template>

<script>

const axios = require("axios");
// const sweetalert = require("sweetalert");

export default {


    data() {
        return {
            baseUrl: "http://localhost:8088",
            categories: []
        };
    },

    methods: {

        async getCategories() {

            await axios.get(`${this.baseUrl}/categories`)
                .then(res => {
                    this.categories = res.data;
                    console.log(this.categories);
                })
                .catch(err => console.log(err))
        }

    },

    mounted() {
        this.getCategories();
    }

};
</script>

<style>

</style>