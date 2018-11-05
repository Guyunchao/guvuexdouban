import jsonp from 'jsonp'
export default {
    // 开启命名空间
    namespaced: true,
    state: {
        title: '正在加载...',
        //电影列表
        subjects: []
    },
    mutations: {
        setMovies(state, payload) {
            state.title = payload.title;
            state.subjects = payload.subjects;
        }
    },
    actions: {
        //  异步操作
        setMovies(context) {
            // 获取当前路由规则
            const route=context.rootState.route;
            const path=route.name;
            const searchValue=route.query.q;
            // 发送异步请求
            jsonp(`http://api.douban.com/v2/movie/${path}?q=${searchValue}`, null, (err,data) => {
                 if(err){
                     console.log(err);
                     return;
                 }
                 console.log(data);
                //  调用mutations
                context.commit('setMovies',data);
            })
        }
    }
}