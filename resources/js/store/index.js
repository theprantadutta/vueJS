export default {
    state: {
        category: [],
        post: []
    },
    getters: {
        getCategory(state){
            return state.category
        },
        getAllPost(state){
            return state.post
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
        }
    },
    mutations: {
        mCategory(state,data){
            return state.category = data;
        },
        allPost(state, payload){
            return state.post = payload;
        }
    }
}
