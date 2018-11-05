<template>
    <div>
        <h1>{{title}}</h1>
        <hr>
        <div class="media" v-for="item in subjects" :key="item.id">
            <div class="media-left media-middle">
                <router-link :to="'/movie/'+item.id">
                    <img class="media-object" :src="
                    'https://images.weserv.nl/?url='+
                    item.images.small.substr(7)" :alt="item.title">
                </router-link>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{item.title}}</h4>
                {{item.genres}}<br>
                {{item.year}}
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    // 监视路由的切换
    watch: {
        $route(to, from) {
            this.setMovies(to.name);
        }
    },
    // 当组件加载时调用action
    created() {
        this.setMovies(this.$route.name);
        console.log(this.$route.name);
    },
    methods: {
        //调用action
        // 映射MovieList中的action
        ...mapActions("MovieList", ["setMovies"])
    },
    computed: {
        // 映射MovieList模块中的state
        ...mapState("MovieList", ["title", "subjects"])
    }
};
</script>

<style>
</style>
