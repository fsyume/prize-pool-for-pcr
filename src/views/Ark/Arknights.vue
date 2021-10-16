<template>
  <!-- 明日方舟页面 -->
  <div>
    <h2>明日方舟Arknights寻访分析</h2>
    <div class="main-box">
      <el-card>
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
            <el-input v-model="loginForm.password" type="password" show-password></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
            <el-button @click="resetForm('loginForm')">重置</el-button>
            <br/>
            您的用户令牌（token）：{{ loginForm.token }}
            <br/>
            <span style="color: #ff0000">请注意不要过度重复获取令牌，由于未知原因会出现bug，
            一个用户令牌目前没有测试多长时间过期，但是实际测试可以用好几天，请保存好您的用户令牌，提示过期后再次申请
          <h4>由于请求需要间隔0.5s才能再请求(防止服务器封禁)，需要等待几秒才能出结果（5秒内不出结果请按F12调出控制台查看详情）</h4>
          </span>
          </el-form-item>

        </el-form>
      </el-card>
    </div>

    <div class="main-box">
      <el-card>
        <ArkDataCharts class="findByToken"></ArkDataCharts>
      </el-card>
      <el-card class="card2">
        ©2020 - 2021 By 浮生yume
      </el-card>
    </div>
  </div>

</template>

<script>
import ArkDataCharts from "@/components/ArkComponents/ArkDataCharts";

export default {
  name: "arknights",
  components: {ArkDataCharts},
  data() {
    return {
      loginForm: {
        phone: "",
        password: "",
        token: ""
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
          this.$http.post("https://ark.fsyume.com:9966/usertoken", this.loginForm).then((res) => {
            console.log(res.data);
            this.loginForm.token = res.data.token;
            console.log(this.loginForm.token)
            if (res.data.static) {
              // 在sessionStorage储存用户信息
              sessionStorage.setItem("token", res.data.token)
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
h2{
  margin-top: 25px;
  margin-left: 30px;
}
.findByToken {
  margin-top: 10px;
}

.main-box {
  padding-bottom: 10px;
  margin: 30px;
}

.card2{
  margin-top: 10px;
}
</style>
