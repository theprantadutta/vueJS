<template>
    <div>
        <!-- Main content -->
        <section class="content">
            <div class="row justify-content-around">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Post List</h3>
                            <div class="card-tools">
                                <router-link to="/add-post" class="btn btn-success">Add New Post</router-link>
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="example2" class="table table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>Sl</th>
                                    <th>User</th>
                                    <th>Category</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Photo</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>

                                <tr v-for="(posts,index) in allPost" :key="posts.id">
                                    <td>{{ index+1 }}</td>
                                    <td>{{ posts.user.name }}</td>
                                    <td>{{ posts.category.cat_name }}</td>
                                    <td>{{ posts.title | shortLength(20,"---" ) }}</td>
                                    <td>{{ posts.description | shortLength(40,"...")}}</td>
                                    <td><img :src="ourImage(posts.photo)" alt="" width="40" height="50"></td>
                                    <td><a class="" href="">Edit</a>
                                        <a class="" href="" @click.prevent = "deletePost(posts.id)">Delete</a>
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
        mounted() {
            this.$store.dispatch('getAllPost')
        },
        computed:{
            allPost(){
                return this.$store.getters.getAllPost
            }
        },
        methods: {
            ourImage(img){
                return "uploadImage/"+img;
            },
            deletePost(id){
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
                        axios.get('/deletePost/'+id)
                        this.$store.dispatch("getAllPost")
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
                .catch(()=>{

                })
            }
        }
    }
</script>

<style scoped>

</style>
