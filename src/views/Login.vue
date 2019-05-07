<template>
	<div>
		<header class="header">
			<img class="logo" src="../assets/logo.png" alt="">
			<span class="head-title">欢迎登录</span>
		</header>
		<section class="section-box">
			<img class="pic" src="http://file.763g.com/tu/d/file/p/2015-05-21/imp1osfif217552.jpg">
			<div class="login-box">
				<form class="login">
					<h3>
						登录
						<a href="#/Reg" class="reg">注册</a>
					</h3>
					<div class="input">
						<i class="el-icon-user font"></i>
						<el-input class="txt" v-model="input" placeholder="用户名"></el-input>
					</div>
					<div class="input">
						<i class="el-icon-key font"></i>
						<el-input class="password" placeholder="请输入密码" v-model="password" show-password ></el-input>
					</div>
					<el-button type="primary" class="login-button">登录</el-button>
				</form>
			</div>
		</section>
	</div>
</template>

<script>
export default {
  data() {
    return {
      input:'',
			password:''
		};
  }
};
</script>

<style scoped>
body {
  background: #e5e5e5;
}
.logo {
  float: left;
}
.header {
  padding: 20px 15px 15px 50px;
  text-align: center;
}
.header:after {
  content: ".";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
  overflow: hidden;
}
.head-title {
  display: block;
  margin-top: 20px;
  margin-left: 35px;
  float: left;
  font-size: 30px;
  font-weight: bold;
}
.section-box {
  width: auto;
  height: 400px;
  margin: 10px auto;
  background-color: #000;
  padding: 0 30px;
}
.pic {
  width: 650px;
  height: 400px;
  margin-left: 150px;
  float: left;
}
.login-box {
  width: 500px;
  margin-left: 50px;
  float: left;
  padding: 30px;
}
.login {
  height: auto;
  padding: 10px 0;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(250, 250, 250, 0.5);
}
h3 {
  font-size: 30px;
  text-indent: 2em;
}
.reg {
  color: rgb(231, 44, 147);
  font-size: 16px;
  float: right;
	margin-right: 20px;
	margin-top: 5px;
}
.input {
  display: block;
  width: 400px;
  padding: 5px;
}
.txt,
.password {
  display: inline;
  left: 55px;
}
.font {
  font-size: 25px;
  position: relative;
  left: 12px;
  top: 33px;
}
.login-button {
	background-color: #111;
	border-color: #111;
	width: 90%;
	margin: 5%;
}
.login-button:hover {
	background-color: #000;
	border-color: #000;
}
.login-button:focus {
	background-color: #000;
	border-color: #000;
}
</style>
