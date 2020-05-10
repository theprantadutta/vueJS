<template>
    <span>
        <div class="span4">
                <aside class="right-sidebar">
                  <div class="widget">
                    <form class="form-search">
                      <input @keyup="RealSearch" placeholder="Type something" type="text" v-model="keyword" class="input-medium search-query">
                      <button type="submit" @click.prevent="RealSearch" class="btn btn-square btn-theme">Search</button>
                    </form>
                  </div>
                  <div class="widget">
                    <h5 class="widgetheading">Categories</h5>
                    <ul class="cat">
                      <li v-for="category in allCategories"><i class="icon-angle-right"></i>
                          <router-link :to="`/categories/${category.id}`">{{ category.cat_name }}</router-link><span> (20)</span>
                      </li>
                    </ul>
                  </div>
                  <div class="widget">
                    <h5 class="widgetheading">Latest posts</h5>
                    <ul class="recent">
                      <li v-for="(post,index) in allBlogPost" v-if="index < 5">
                        <img :src="`uploadImage/${post.photo}`"  height="40" width="40" class="pull-left" alt="" />
                        <h6><router-link :to="`/singleBlog/${post.id}`">{{post.title}}</router-link></h6>
                        <p>
                          {{ post.description | shortLength(100,'...')}}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div class="widget">
                    <h5 class="widgetheading">Popular tags</h5>
                    <ul class="tags">
                      <li><a href="#">Web design</a></li>
                      <li><a href="#">Trends</a></li>
                      <li><a href="#">Technology</a></li>
                      <li><a href="#">Internet</a></li>
                      <li><a href="#">Tutorial</a></li>
                      <li><a href="#">Development</a></li>
                    </ul>
                  </div>
                </aside>
              </div>
    </span>
</template>

<script>
    import _ from 'lodash';
    export default {
        name: "BlogSidebar",
        data(){
            return {
                keyword: ''
            }
        },
        components:{

        },
        mounted() {
            this.$store.dispatch('latestPosts');
            this.$store.dispatch('allCategories')
        },
        computed:{
            allCategories(){
                return this.$store.getters.allCategories
            },
            allBlogPost(){
                return this.$store.getters.latestPost
            },
        },
        methods:{
            RealSearch:_.debounce(function () {
                this.$store.dispatch('searchPost',this.keyword);
            },1000)
        }
    }
</script>

<style scoped>

</style>
