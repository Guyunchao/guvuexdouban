<template>

    <div>
        <h1>{{movie.title}}</h1>
        <p>{{movie.summary}}</p>
        <img v-if="movie.images" :src="'https://images.weserv.nl/?url='+
                    movie.images.small.substr(7)" alt="">
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    created() {
        this.setMovie();
    },
    methods: {
        ...mapActions("MovieDetail", ["setMovie"])
    },
    computed: {
        ...mapState("MovieDetail", ["movie"])
    }
};
</script>

<style>
</style>
