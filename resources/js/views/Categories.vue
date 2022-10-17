<template>
    <div class="container-fluid px-4">
        <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item ">
                <router-link to="/">Dashboard</router-link>
            </li>
            <li class="breadcrumb-item active">Overview</li>
        </ol>
        
        <div class="card mb-4">
            <div class="card-header">
                
            </div>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Image</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Shirt</td>
                            <td>image</td>
                            <td>
                                <button class="btn btn-primary btn-sm"><span class="fa fa-edit"></span></button>
                                <button class="btn btn-danger btn-sm"><span class="fa fa-trash"></span></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <b-modal ref="newCategoryModal" hide-footer title="Using Component Methods">
            <div class="d-block text-center">
                <form v-on:submit.prevent="createCategory">
                    <div class="form-group">
                        <label for="name">Enter Name</label>
                        <input type="email" v-modal="category.name" class="form-control" id="name" placeholder="Enter category name ">
                    </div>
                    <div class="form-group">
                        <label for="image">Choose an image</label>
                        <input type="file" v-on:change="attachImage" class="form-control" id="image" />
                    </div>

                    <hr>
                    <button type="button" class="btn btn-default" v-on:click="hideNewCategoryModal">Cancel</button>
                    <button type="submit" class="btn btn-primary"><span class="fa fa-check"></span>Save</button>

                </form>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default{
    name: 'category',
    data(){
        return{
            categoryData:{
                name: '',
                image: ''
            }
        }
    },
    methods: {
        attachImage(){
            // to use file reader TODO
        },
        hideNewCategoryModal(){
            this.$refs.newCategoryModal.hide();
        },
        showNewCategoryModal(){
            this.$refs.newCategoryModal.show();
        },
        createCategory(){
            console.log('form submitted')
        }
    }
}
</script>