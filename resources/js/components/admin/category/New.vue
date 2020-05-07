<template>
    <div class="row justify-content-around">
        <div class="col-md-6">
            <!-- general form elements -->
            <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">Add Category</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->
                <form role="form" v-on:click.prevent="addCategory()">
                    <div class="card-body">
                        <div class="form-group">
                            <label for="categoryId">Add New Category</label>
                            <input type="text" class="form-control" id="categoryId" placeholder="Add New Category" v-model="form.cat_name" name="cat_name">
                        </div>
                    </div>
                    <!-- /.card-body -->

                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <!-- /.card -->
        </div>
    </div>
</template>

<script>
    import { Form } from 'vform'

    export default {
        name: "New",
        data () {
            return {
                // Create a new form instance
                form: new Form({
                    cat_name: ''
                })
            }
        },

        methods: {
            addCategory(){
                this.form.post('/add-category')
                    .then((response)=>{
                        console.log(response.data)
                    })
                    .catch(()=>{

                    })
            }
        }
    }
</script>

<style scoped>

</style>
