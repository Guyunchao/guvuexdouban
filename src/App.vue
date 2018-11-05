<template>
  <div id="app">
    <!-- 头部 -->
    <app-header></app-header>

    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏 -->
       <app-sidebar></app-sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          
         <!-- 主内容区域 -->
         <router-view>
         </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppSidebar from '@/components/AppSidebar'
export default {
    name: "App",
    components:{
      AppHeader,
      AppSidebar,
    }
};
</script>

<style>
</style>
