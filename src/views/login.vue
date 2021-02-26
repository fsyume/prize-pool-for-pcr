<template>
  <!-- 登录页面 -->
  <div id="mainBox">
    <div id="loginBox">
      <span id="loginText">Workbench登录</span>
      <el-form
        class="loginFrom"
        ref="loginForm"
        :rules="loginRules"
        :model="loginForm"
        label-width="80px"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="el-icon-user"
            placeholder="用户名/邮箱"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="el-icon-connection"
            placeholder="密码"
            show-password
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="loginButton">
          <el-button type="primary" @click="userLogin()">登录</el-button>
          <el-button type="info" @click="clearForm('loginForm')"
          >重置
          </el-button
          >
          <el-button type="success">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 数据绑定
      loginForm: {
        username: '',
        password: ''
      },
      // 表单验证
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 登录
    userLogin () {
      this.$http.post('http://localhost:8081/user/loginp', this.loginForm).then((res) => {
        console.log(res.data)
        if (res.data.static === true) {
          console.log('登录成功')
          // 在localStorage储存jwt
          localStorage.setItem('jwt', res.data.token)
          console.log(localStorage.getItem('jwt'))
          // 成功登录弹窗
          this.$message.success('登录成功！欢迎~~')
          // 登录成功后跳转页面
          // this.$router.push('/workbench')
        } else {
          console.log('登录失败')
          // 登录失败弹窗
          this.$message.error('登录失败，请检查用户名和密码')
        }
      })
    },

    // 重置
    clearForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
  #mainBox {
    height: 100%;
    background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
    /* background-image: url(../assets/img/bg.jpg); */
    display: flex;
    justify-content: flex-end;
  }

  #loginBox {
    width: 450px;
    height: 100%;
    background-color: white;
    /* background-color: rgba(255, 255, 255, 60%); */
    /*border-radius: 10px;*/
    /*transform: translateY(30%);*/
    justify-content: center;
  }

  .loginFrom {
    margin: 0 auto;
    position: relative;
    top: 45%;
    right: 8%;
  }

  .loginButton {
    text-align: center;
  }

  #loginText {
    font-size: 30px;
    position: relative;
    top: 250px;
    left: 117px;
    color: rgb(122, 122, 122);
  }
</style>
