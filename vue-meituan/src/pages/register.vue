<template>
  <div class="my-register">
    <div class="reg-header">
      <header>
        <a href="http://www.meituan.com" class="reg-logo"></a>
        <div class="toLogin">
          <span>已有美团账号？</span>
          <router-link :to="{name:'login'}">登录</router-link>
        </div>
      </header>
    </div>
    <div class="reg-container">
      <el-form
        :model="regForm"
        status-icon
        :rules="regRules"
        ref="regForm"
        label-width="100px"
        class="demo-regForm"
      >
        <el-form-item label="用户名" prop="userName" class="">
          <el-input v-model="regForm.userName"></el-input>
        </el-form-item>
        <el-form-item class="button">
          <button>免费获取短信动态码</button>
        </el-form-item>
        <!-- <el-form-item label="短信动态码" prop="regMsg" class="regMsg">
          <el-input v-model="regForm.regMsg"></el-input>
        </el-form-item> -->
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="regForm.password" autocomplete="off" @input="psdInput"></el-input>
        </el-form-item>
        <div class="pswStrength">
          <div :class="['bar', strongClass]"></div>
          <div class="strength">
            <span>弱</span>
            <span>中</span>
            <span>强</span>
          </div>
        </div>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input
            type="password"
            v-model="regForm.rePassword"
            autocomplete="off"
            class="rePassword"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="submitForm('regForm')" class="reg-submit">同意以下协议并注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="reg-footer">
      <span>©meituan.com 京ICP证070791号 京公网安备11010502025545号</span>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    var validatePhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入正确用户名"));
      // } else if (isNaN(value) == true) {
      //   callback(new Error("请输入正确的11位手机号码"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名必须为4-16位的字母数字下划线组成"));
      } else {
        callback();
      }
    };

    var validatePass = (rule, value, callback) => {
      if (value === "" || value.length == 0) {
        callback(new Error("请输入密码"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("密码必须为4-16位"));
      } else {
        if (this.regForm.checkPass !== "") {
          this.$refs.regForm.validateField("rePassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.regForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      regForm: {
        userName: "",
        password: "",
        rePassword: ""
      },
      strongClass: "",
      regRules: {
        userName: [{ validator: validatePhone, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        rePassword: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            api.userRegister({
              params:this.regForm
            }).then(res=>{
              if(res.data.status == 'success'){
                this.$router.push({name:'login'});
              }
              alert(res.data.msg);
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    psdInput() {
      var regStr = /(\w)+/g;
      var regNum = /(\d)+/g;
      var reg = /_/g;
      var strength =
        this.regForm.password.match(regStr) &&
        this.regForm.password.match(regNum) &&
        this.regForm.password.match(reg);
      if (this.regForm.password.length > 12 && strength) {
        this.strongClass = "strong";
      } else if (this.regForm.password.length < 10) {
        this.strongClass = "weak";
      } else if (this.regForm.password.length == 0) {
        this.strongClass = "";
      } else {
        this.strongClass = "normal";
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>