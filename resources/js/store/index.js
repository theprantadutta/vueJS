export default {
    state: {
        category: [],
    },
    getters: {
        getCategory(state){
            return state.category
        },
    },
    actions: {
        allCategory(context){
            axios.get('/category')
                .then((response)=>{
                    context.commit('mCategory',response.data.AllCategories)
                    //store.commit('mCategory',response.data.AllCategories)
                })
        }
    },
    mutations: {
        mCategory(state,data){
            return state.category = data;
        }
    }
}
