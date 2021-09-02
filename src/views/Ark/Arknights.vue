<template>
  <!-- 明日方舟页面 -->
  <div>
    <h1>Arknights寻访分析</h1>
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="rules"
      class="demo-loginForm"
      label-width="100px"
    >
      <el-form-item label="手机号" prop="phone" style="width: 380px">
        <el-input v-model="loginForm.phone"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password" style="width: 380px">
        <el-input v-model="loginForm.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('loginForm')"
          style="position: relative; right: 100px"
          >登录
        </el-button>
        <el-button @click="resetForm('loginForm')" style="position: relative; right: 70px"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "arknights",
  data() {
    return {
      loginForm: {
        phone: "",
        password: "",
      },
      rules: {
        phone: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 11, max: 11, message: "手机号为11位数", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm() {
      console.log(1111);
    },
  },
};
</script>

<style scoped></style>
