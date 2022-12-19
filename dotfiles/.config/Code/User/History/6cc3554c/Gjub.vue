<template>

    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">Add new Category</h4>
            </div>
        </div>

        <div class="row">
            <div class="col-3"></div>
            <div class="col-md-6 px-5 px-md-0">
                <form>
                    <div class="form-group">
                        <label>Category Name</label>
                        <input type="text" class="form-control" v-model="categoryName" required>
                    </div>
                    <button type="button" class="btn btn-primary" @click="addCategory">Submit</button>
                </form>
            </div>
            <div class="col-3"></div>
        </div>
    </div>

</template>

<script>

const axios = require("axios");

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


            const baseUrl = "";
            axios({
                method: 'post',
                url: "",
                data: JSON.stringify(newCategory),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(() => { })
            .catch((err) => {
                console.log(err);
            })
        }

    }

};
</script>

<style>

</style>