<template>
    <span id="singleBlog">
        <section id="content">
      <div class="container">
        <div class="row">
          <div class="span8">
            <article  v-for="post in singlePost">
              <div class="row">
                <div class="span8">
                  <div class="post-image">
                    <div class="post-heading">
                      <h3><a href="#">{{ post.title }}</a></h3>
                    </div>
                    <img :src="`uploadImage/${post.photo}`" alt="" />

                  </div>
                  <p>
                    {{ post.description }}
                  </p>
                  <!--<blockquote>
                    <i class="icon-quote-left"></i> Lorem ipsum dolor sit amet, ei quod constituto qui. Summo labores expetendis ad quo, lorem luptatum et vis. No qui vidisse signiferumque...
                  </blockquote>
                  <p>
                    Fierent adipisci iracundia est ei, usu timeam persius ea. Usu ea justo malis, pri quando everti electram ei, ex homero omittam salutatus sed. Dicam appetere ne qui, no has scripta appellantur. Mazim alienum appellantur eu cum, cu ullum officiis pro, pri
                    at eius erat accusamus.
                  </p>-->
                  <div class="bottom-article">
                    <ul class="meta-post">
                      <li><i class="icon-user"></i><a href="#">{{ post.user.name }}</a></li>
                      <li><i class="icon-folder-open"></i><a href="#">{{ post.category.cat_name }}</a></li>

                    </ul>
                  </div>
                </div>
              </div>

            </article>
          </div>
            <BlogSideBar></BlogSideBar>
        </div>
      </div>
    </section>
    </span>
</template>

<script>
    import BlogSideBar from "./BlogSideBar.vue";
    export default {
        name: "SingleBlog",
        /*data(){

        },*/
        components:{
            BlogSideBar
        },
        computed:{
            singlePost(){
                return this.$store.getters.getSinglePost
            }
        },
        mounted() {
            this.$store.dispatch('getPostById',this.$route.params.id)
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
