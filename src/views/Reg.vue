<template>
	<div>
		<!-- <header class="header">
			<img class="logo" src="../assets/logo.png" alt="">
			<span class="head-title">注册账号</span>
		</header> -->
		<section class="section-box">
			<div class="reg-title">
				<h2 class="reg-txt">注册</h2>
				<p class="exist-count">已有账号？点击
					<router-link class="to-login" to="/Login">登录</router-link>
				</p>
			</div>
			<hr>
			<!-- 注册信息 -->
			<div class="reg-body">
				<el-form
					:model="ruleForm"
					:rules="rules"
					ref="ruleForm"
					label-width="100px"
					class="demo-ruleForm"
				>
					<!-- 手机号 -->
					<el-form-item class="l-width" label="手机号" prop="MP">
						<el-input v-model="ruleForm.MP"></el-input>
					</el-form-item>
					<!-- 短信验证 -->
					<el-form-item class="s-width" label="短信验证码" prop="mes_ident">
						<el-input v-model="ruleForm.mes_ident"></el-input>
						<el-button class="btn-send" type="info" plain :disabled="send">{{send_mes}}</el-button>
					</el-form-item>
					<!-- 用户名 -->
					<el-form-item class="l-width" label="用户名" prop="username">
						<el-input v-model="ruleForm.username"></el-input>
					</el-form-item>
					<!-- 密码 -->
					<el-form-item class="l-width" label="密码" prop="pass">
						<el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
					</el-form-item>
					<!-- 确认密码 -->
					<el-form-item class="l-width" label="确认密码" prop="checkPass">
						<el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
					</el-form-item>
					<!-- 协议 -->
					<div class="protocol">
						<el-checkbox fill="#000" v-model="checked">我已同意用户服务协议</el-checkbox>
					</div>
				</el-form>
				<!-- 注册按钮 -->
				<el-button @click="submitForm('ruleForm')" type="primary" class="login-button">注册</el-button>
			</div>
		</section>
	</div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      checked: true, //协议复选框
      send: false, //发送验证码按钮是否为禁用状态
      send_mes: "发送验证码", //发送验证码按钮value值
      ruleForm: {
        MP: "",
        mes_ident: "",
        username: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        MP: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 11, max: 11, message: "请输入11位手机号码", trigger: "blur" }
        ],
        mes_ident: [
          { required: true, message: "请输入手机验证码", trigger: "blur" },
          { min: 6, max: 6, message: "验证码为6位数字", trigger: "blur" }
        ],
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 16, message: "用户名为2-16个字符", trigger: "blur" }
        ],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ]
      },
      methods: {
        /* submitForm(formName) {
          
        } */
      }
    };
  }
};
</script>

<style scoped>
.home-head {
  display: none;
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
  border-bottom: 1px solid #000;
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
  width: 900px;
  height: 500px;
  background-color: #fff;
  padding: 40px 80px;
}
.reg-title {
  padding: 0 40px;
  overflow: hidden;
}
.reg-txt {
  color: rgb(228, 42, 150);
  float: left;
}
.to-login {
  font-size: 14px;
  color: rgb(231, 26, 95);
}
.exist-count {
  font-size: 14px;
  color: #333;
  margin-top: 10px;
}
.exist-count {
  display: block;
  float: right;
}
.reg-body {
  position: relative;
}
.l-width {
  width: 500px;
}
.s-width {
  width: 300px;
}
.protocol {
  margin-left: 35px;
}
.login-button {
  background-color: #111;
  border-color: #111;
  width: 50%;
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
.btn-send {
  position: absolute;
  margin-left: 20px;
}
</style>



