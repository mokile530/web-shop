<template>
	<div>
		<header class="header">
			<img class="logo" src="../assets/logo.png" alt="">
			<span class="head-title">注册账号</span>
		</header>

		<section class="section-box">

		</section>
	</div>
</template>

<script>
export default {

}
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
	margin: 40px auto;
	width: 980px;
	height: 200px;
	background-color: #fff;
}
</style>
