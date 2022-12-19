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
                    <tr v-if="!roles.length">
                        <td colspan="4" style="text-align:center;">Data not found!</td>
                    </tr>
                    <tr v-for="role in roles" :key="role.id">
                        <td>{{ role.id }}</td>
                        <td>{{ role.name | capitalizeFirst }}</td>
                        <!-- <td v-for="permission in permissions" :key="permission.id"> -->
                        <td>
                            <span class="label label-info label-many">{{ role.permission }}</span>
                        </td>
                        <td>
                            <a href="#">
                                <i class="fa fa-edit" @click="editModal(role)"></i>
                            </a>
                            /
                            <a href="#" @click="deleteRole(role.id)">
                                <i class="fa fa-trash red"></i>
                            </a>
                        </td>
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
            baseUrl: "http://localhost:8088/",
            categories: []
        };
    },

    methods: {

        async getCategories() {
            console.log(this.categoryName);
            await axios.get(this.baseUrl + '​/categories')
                .then(res => this.categories = res.data)
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