export default {
    state: {
        category: [],
        post: [],
        user: []
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
        }
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
        }
    }
}
