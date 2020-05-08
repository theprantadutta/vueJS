<template>
    <div>
        <!-- Main content -->
        <section class="content">
            <div class="row justify-content-around">
                <div class="col-8">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Category List</h3>
                            <div class="card-tools">
                                <router-link to="/add-category" class="btn btn-success">Add Category</router-link>
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="example2" class="table table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>Sl</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(category,index) in getAllCategory" :key="category.id">
                                    <td>{{ index+1 }}</td>
                                    <td>{{ category.cat_name }}</td>
                                    <td>{{ category.created_at | timeformat }}</td>
                                    <td><a class="btn btn-primary" href="">Edit</a>
                                        <a class="btn btn-danger" href="" @click.prevent = "deleteCategory(category.id)">Delete</a>
                                    </td>
                                </tr>

                                </tbody>
                                <!--<tfoot>
                                <tr>
                                    <th>Rendering engine</th>
                                    <th>Browser</th>
                                    <th>Platform(s)</th>
                                    <th>Engine version</th>
                                    <th>CSS grade</th>
                                </tr>
                                </tfoot>-->
                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </section>
        <!-- /.content -->
    </div>
</template>

<script>
    export default {
        name: "List",
        mounted(){
            this.$store.dispatch("allCategory")
        },
        computed: {
            getAllCategory(){
                return this.$store.getters.getCategory
            }
        },
        methods: {
            deleteCategory(id){
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                })
                .then((result) => {
                    if (result.value) {
                        axios.get('/deleteCategory/'+id)
                        this.$store.dispatch("allCategory")
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })

                    /*this.$store.dispatch("allCategory")
                    .then(()=>{
                        Toast.fire({
                            icon: 'success',
                            title: 'Category Deleted Successfully'
                        })
                    })
                        .catch(()=>{

                        })*/
            }
        }
    }
</script>

<style scoped>

</style>
