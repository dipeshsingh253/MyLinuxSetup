<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">All Categories</h4>
                <router-link :to="{ name: 'AddCategory' }">
                    <button class="btn m-3" style="float:right;">Add a new Category</button>
                </router-link>

            </div>
        </div>
        <div class="row">

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="!categories.length">
                        <td colspan="4" style="text-align:center;">Data not found!</td>
                    </tr>
                    <tr v-for="category in categories" :key="category.id">
                        <td>{{ category.id }}</td>
                        <td>{{ category.categoryName }}</td>
                        <td>
                            <button type="button px-2 py-4" class="btn btn-warning">Edit</button>
                            <button type="button px-2 py-4" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>


        </div>
    </div>
</template>

<script>


export default {

    props: ["categories"],


    data() {
        return {
            baseUrl: "http://localhost:8088"
        };
    },

    methods: {
    },

    mounted() {

    }

};
</script>

<style>

</style>