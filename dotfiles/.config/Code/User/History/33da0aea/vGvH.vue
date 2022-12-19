<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">All Categories</h4>
                <router-link id="add-category" :to="{ name: 'AddCategory' }" v-show="$route.name == 'AdminCategory'">
                    <button class="btn">Add a new Category</button>
                </router-link>
            </div>
        </div>
        <div class="row">
            <div v-for="category of categories" :key="category.id"
                class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
                <CategoryBox :category="category">
                </CategoryBox>
            </div>
        </div>
    </div>
</template>

<script>

const axios = require("axios");
const sweetalert = require("sweetalert");

export default {


    data() {
        return {
            categoryName: ""
        };
    },

    methods: {

        addCategory() {
            console.log(this.categoryName);
            const newCategory = {
                categoryName: this.categoryName
            };


            const baseUrl = "http://localhost:8088/";
            axios({
                method: 'post',
                url: baseUrl + '/categories',
                data: JSON.stringify(newCategory),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(() => {
                    sweetalert({
                        text: 'Category added successfully',
                        icon: 'success'
                    })
                })
                .catch((err) => {
                    console.log(err);
                })
        }

    }

};
</script>

<style>

</style>