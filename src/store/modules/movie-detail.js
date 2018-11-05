import jsonp from 'jsonp'
export default {
    namespaced: true,
    state: {
        movie: {}
    },
    mutations: {
        setMovie(state, payload) {
            state.movie = payload;
        }
    },
    actions: {
        setMovie(context) {
            // 路由规则
            const route = context.rootState.route;
            const id = route.params.id;
            jsonp(`http://api.douban.com/v2/movie/subject/${id}`, null, (err, data)=>{
               if(err){
                   console.log(ree);
                   return;
               }
           context.commit('setMovie',data)
            })
        }
    }
};