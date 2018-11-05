import Vue from 'vue'
import Vuex from 'vuex'

// 加载模块
import MovieList from './modules/movie-list'
import MovieDetail from './modules/movie-detail'


// 注册插件
Vue.use(Vuex)

// 创建仓库
const store=new Vuex.Store({
    modules:{
        MovieList,
        MovieDetail
    },
    state:{

    },
    mutations:{

    },
    actions:{

    }
});

export default store;