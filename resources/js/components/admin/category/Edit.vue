<template>
    <div class="row justify-content-around">
        <div class="col-md-6">
            <!-- general form elements -->
            <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">Edit Category</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->
                <form role="form" @submit.prevent="updateCategory()">
                    <div class="card-body">
                        <div class="form-group">
                            <label for="categoryId">Edit Category</label>
                            <input type="text" class="form-control" id="categoryId" placeholder="Add New Category" v-model="form.cat_name" name="cat_name" :class="{ 'is-invalid': form.errors.has('cat_name') }">
                            <has-error :form="form" field="cat_name"></has-error>
                        </div>
                    </div>
                    <!-- /.card-body -->

                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Update</button>
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
        name: "Edit",
        mounted(){
          axios.get(`/toEditCategory/${this.$route.params.categoryId}`)
              .then((response)=>{
                  this.form.fill(response.data.category)
              })
        },
        data () {
            return {
                // Create a new form instance
                form: new Form({
                    cat_name: ''
                })
            }
        },

        methods: {
            updateCategory(){
                this.form.post(`/updateCategory/${this.$route.params.categoryId}`)
                    .then((response)=>{
                        this.$router.push('/category-list');
                        Toast.fire({
                            icon: 'success',
                            title: 'Category Updated Successfully'
                        })
                    })
                    .catch(()=>{

                    })
            }
        }
    }
</script>

<style scoped>

</style>
