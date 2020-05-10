export default {
    state: {
        category: [],
        post: [],
        user: [],
        blogPost: [],
        singlePost: [],
        allCategories: [],
    },
    getters: {
        getCategory(state){
            return state.category
        },
        getAllPost(state){
            return state.post
        },
        getAllUser(state){
            return state.user
        },
        getAllBlogPost(state){
            return state.blogPost
        },
        getSinglePost(state) {
            return state.singlePost;
        },
        allCategories(state) {
            return state.allCategories;
        }
    },
    actions: {
        allCategory(context){
            axios.get('/category')
                .then((response)=>{
                    context.commit('mCategory',response.data.AllCategories)
                    //store.commit('mCategory',response.data.AllCategories)
                })
        },
        getAllPost(context){
            axios.get('/post')
                .then((response)=>{
                    context.commit('allPost',response.data.posts)
                })
        },
        getAllUser(context){
            axios.get('/users')
                .then((response =>{
                    context.commit('mUser',response.data.users)
                }))
        },
        getAllBlogPost(context){
            axios.get('/blogPost')
                .then((response =>{
                    context.commit('mBlogPost',response.data.posts)
                }))
        },
        getPostById(context, payload){
            axios.get('/singlePost/'+payload)
                .then((response => {
                    context.commit('singlePost',response.data.singlePost)
                }))
        },
        allCategories(context){
            axios.get('/categories/')
                .then((response => {
                    context.commit('categories',response.data.categories)
                }))
        },
        getPostByCatId(context, payload){
            axios.get('/categoryPost/'+payload)
                .then((response => {
                    context.commit('getPostByCatId',response.data.posts)
                }))
        },
    },
    mutations: {
        mCategory(state,data){
            return state.category = data;
        },
        allPost(state, payload){
            return state.post = payload;
        },
        mUser(state, payload){
            return state.user = payload;
        },
        mBlogPost(state, payload){
            return state.blogPost = payload;
        },
        singlePost(state, payload){
            return state.singlePost = payload;
        },
        categories(state, payload){
            return state.allCategories = payload;
        },
        getPostByCatId(state, payload){
            return state.blogPost = payload;
        }
    }
}
