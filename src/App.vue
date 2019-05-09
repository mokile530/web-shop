<template>
  <div>
    <header class="home-head">
      <!-- logo图片 -->
      <router-link to="/">
        <img class="logo" src="./assets/logo.png">
      </router-link>
      <!-- 导航 -->
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        active-text-color="#000"
      >
        <el-menu-item class="nav-item" index="1">
          <router-link to="/">首页</router-link>
        </el-menu-item>
        <el-menu-item class="nav-item" index="2">
          <router-link to="/">鼠标</router-link>
        </el-menu-item>
        <!-- <el-submenu index="2">鼠标
          <template slot="title">商城</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">购物车</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>-->
        <el-menu-item class="nav-item" index="3">
          <router-link to="/">键盘</router-link>
        </el-menu-item>
        <el-menu-item class="nav-item" index="4">
          <router-link to="/">耳机</router-link>
        </el-menu-item>
        <el-menu-item class="nav-item" index="5">
          <router-link to="/">购物车</router-link>
        </el-menu-item>
      </el-menu>
      <!-- 搜索框 -->
      <el-select
        class="pos"
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <!-- 登录 / 注册 -->
      <div class="logined" v-if="logined">
        <img class="avatar" src="./assets/logo.png" alt="">
        <span class="nick-name">123</span>
      </div>
      <div class="logined" v-else>
        <router-link class="nav-login" to="/login">登录</router-link>&nbsp;/&nbsp;
        <router-link class="nav-reg" to="/reg">注册</router-link>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      logined: false
    };
  }
};
</script>

<style scoped>
.home-head {
  padding: 5px 150px;
  overflow: hidden;
  border-bottom: 1px solid #222;
}
.logo {
  margin: 10px;
  float: left;
}
.el-menu-demo {
  float: left;
  margin: 20px 20px 0 10px;
  border-radius: 5px;
}
.pos {
  float: left;
  margin: 30px 20px 0 40px;
}
.nav-item {
  padding: 0 30px;
  margin: 0 5px;
}
.logined {
  float: left;
  margin: 33px 20px 0 10px;
  line-height: 30px;
  height: 30px;
}

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  float: left;
}
.nick-name {
  margin-left: 5px;
  font-size: 12px;
  color: rgb(56, 2, 87);
  display: block;
  float: right;
}
.nick-name:hover {
  color: rgb(216, 21, 102);
}
.nav-login,
.nav-reg {
  font-size: 13px;
  color: #333;
}
.nav-login:hover {
  color: rgb(216, 21, 102);
}
.nav-reg:hover {
  color: rgb(216, 21, 102);
}
</style>





<style>
html,
body,
ul,
li,
ol,
dl,
dd,
dt,
p,
h1,
h2,
h3,
h4,
h5,
h6,
form,
fieldset,
legend,
img,
figure {
  margin: 0;
  padding: 0;
}
fieldset,
img {
  border: none;
}
address,
caption,
cite,
code,
dfn,
th,
var {
  font-style: normal;
  font-weight: normal;
}
ul,
ol,
li {
  list-style: none;
}
body {
  color: #333;
  font-family: "微软雅黑";
  background: #e5e5e5;
}
a {
  text-decoration: none;
}
</style>