<template>
<!--白-->

  <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">
        <router-link to='/dynamicform' class="nav-link link" >
          動態表單
        </router-link>
    </el-menu-item>
    <el-menu-item index="2">
        <router-link to='/othertest' class="nav-link link" >
          其他測試
        </router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to='/table' class="nav-link link" >
        table表單
      </router-link>
    </el-menu-item>
    <el-menu-item index="4">
        <router-link to='/login' class="nav-link link" >
          登入頁面TEST
        </router-link>
    </el-menu-item>
    <el-menu-item index="5">
      <router-link to='/search' class="nav-link link" >
        查詢測試
      </router-link>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
  </el-menu> -->

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="d-flex flex-grow-1">
        <span class="w-100 d-lg-none d-block"><!-- hidden spacer to center brand on mobile --></span>
        <a class="navbar-brand d-none d-lg-inline-block" href="#">
          <img class="logo_style" src="@/images/google.png"
          />
        </a>
        <a class="navbar-brand-two mx-auto d-lg-none d-inline-block" href="#">
          <img class="logo_style" src="@/images/google.png"
          />
        </a>
        <div class="w-100 text-right">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </div>
    <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
        <ul class="navbar-nav ms-auto flex-nowrap">
            <li class="nav-item">
              <router-link to='/dynamicform' class="nav-link link m-2" >
                動態表單
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to='/othertest' class="nav-link link m-2" >
                其他測試
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to='/table' class="nav-link link m-2" >
                table表單
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to='/login' class="nav-link link m-2" >
                登入頁面TEST
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to='/search' class="nav-link link m-2" >
                查詢測試
              </router-link>
            </li>
        </ul>
    </div>
</nav>

</template>

<script>
import { useStore } from 'vuex'
import { computed, ref, reactive, toRefs, watch } from 'vue'

export default {
  name: 'navbar',
  props: {
    msg: String
  },
  setup(props,context){
      const store = useStore() ;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration : none ;
}

.logo_style {
  width: auto;
  height: 40px;
  display:block ;
}
</style>
