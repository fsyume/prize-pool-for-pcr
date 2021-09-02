<template>
  <!-- 明日方舟页面 -->
  <div>
    <h1>Arknights寻访分析</h1>
    <div class="loginFrom">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="rules"
        label-width="70px"
        size="medium"
      >
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="loginForm.phone"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
          <el-button @click="test">测试</el-button>
        </el-form-item>
      </el-form>
    </div>
    <ArkDataCharts></ArkDataCharts>
  </div>
</template>

<script>
import ArkDataCharts from "@/components/ArkComponents/ArkDataCharts";
import { atest } from "@/utils/arkcharts";
import axios from "axios";

export default {
  name: "arknights",
  components: { ArkDataCharts },
  data() {
    return {
      loginForm: {
        phone: "18537683936",
        password: "mlpfim2001.",
      },
      rules: {
        phone: [
          {required: true, message: "请输入用户名", trigger: "blur"},
          {min: 11, max: 11, message: "手机号为11位数", trigger: "blur"},
        ],
        password: [{required: true, message: "请输入密码", trigger: "blur"}],
      },
    };
  },
  methods: {
    test(){
      var httpurl = "api/inquiry/gacha?"

      var token = "f4LPXHr4rhpucWlfe8CX4t73"

      var page = 1


      this.$http.get(httpurl+"page="+page+"&token="+token)
        .then((res)=>{

          console.log("抽卡总次数" + res.data.pagination.total)
          console.log(res.data.list)

        })
    },
    // 重制表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 提交表单
    submitForm(formName) {
      // 验证表单是否符合要求
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 给后台发送post登录请求
          this.$http.post("auth/v1/token_by_phone_password", this.loginForm).then((res) => {
            console.log(res.data);
            var token = res.data.data.token;
            console.log(token)
            if (res.data.status == 0) {
              // 在sessionStorage储存用户信息
              sessionStorage.setItem("token",token)
              // this.$message.success(sessionStorage.getItem("token"));
              this.$message.success("登录成功");
            } else {
              this.$message.error("登录失败，请检查用户名和密码");
            }
          });
        } else {
          this.$message.error("请将表单填写完整");
        }
      });
    },
  },
};
</script>

<style scoped>
.loginFrom {
  width: 280px;
}
</style>
