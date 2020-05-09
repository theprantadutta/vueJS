<template>
    <div class="row justify-content-around">
        <div class="col-md-10">
            <!-- general form elements -->
            <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">Add Post</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->
                <form role="form" enctype="multipart/form-data" @submit.prevent="addNewPost()">
                    <div class="card-body">
                        <div class="form-group">
                            <label for="title">Add New Post</label>
                            <input type="text" class="form-control" id="title" placeholder="Add New Title" v-model="form.title" name="title" :class="{ 'is-invalid': form.errors.has('title') }">
                            <has-error :form="form" field="title"></has-error>
                        </div>

                        <div class="form-group">
                            <label>Select User</label>
                            <select class="form-control" :class="{ 'is-invalid': form.errors.has('user_id') }" v-model="form.user_id">
                                <option disabled value="">Select One</option>
                                <option :value="users.id" v-for="users in getAllUser">{{ users.name }}</option>
                            </select>
                            <has-error :form="form" field="user_id"></has-error>
                        </div>

                        <div class="form-group">
                            <label>Add New Description</label>
                            <!--<textarea type="text" class="form-control" id="description" placeholder="Add New Description" v-model="form.description" name="description" :class="{ 'is-invalid': form.errors.has('description') }"></textarea>-->
                            <markdown-editor v-model="form.description"></markdown-editor>
                            <has-error :form="form" field="description"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Select Category</label>
                            <select class="form-control" :class="{ 'is-invalid': form.errors.has('cat_id') }" v-model="form.cat_id">
                                <option disabled value="">Select One</option>
                                <option :value="category.id" v-for="category in getAllCategory">{{ category.cat_name }}</option>
                            </select>
                            <has-error :form="form" field="cat_id"></has-error>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Select Category</label>
                        <input @change="changePhoto($event)" type="file" >
                        <img alt="" width="80" height="80" :src="form.photo">

                        <has-error :form="form" field="photo" :class="{ 'is-invalid': form.errors.has('photo') }"></has-error>
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
    import Form from "vform/src/Form";

    export default {
        name: "New",
        data(){
            return{
                form:new Form({
                    title: '',
                    description: '',
                    cat_id: '',
                    user_id: '',
                    photo: '',
                })
            }
        },
        mounted(){
            this.$store.dispatch("allCategory")
            this.$store.dispatch("getAllUser")
        },
        computed: {
            getAllCategory() {
                return this.$store.getters.getCategory
            },
            getAllUser(){
                return this.$store.getters.getAllUser
            }
        },
        methods:{
            changePhoto(event){
                let file = event.target.files[0];
                if (file.size > 5242880){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'The Image is over 1MB',
                        footer: '<a href>Why do I have this issue?</a>'
                    })
                }
                else{
                    let reader = new FileReader();
                    reader.onload = event=> {
                        // The file's text will be printed here
                        this.form.photo = event.target.result
                        console.log(event)
                    };
                    reader.readAsDataURL(file);
                }
            },
            addNewPost(){
                this.form.post('/savePost')
                    .then(()=>{
                        this.$router.push('/post-list');
                        Toast.fire({
                            icon: 'success',
                            title: 'Post Added Successfully'
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
