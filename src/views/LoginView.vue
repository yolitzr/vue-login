<template>
  <div class="login">
    <h2>This is an login page</h2>
    <div class="form">
      <form action @submit.prevent="getLogin">
        <div class="email">
          <label for="#email" name="username">Email</label>
          <input v-model="email" type="email" id="email" required />
        </div>
        <div class="password">
          <label for="#password" name="password">Password</label>
          <input v-model="password" type="password" id="password" />
        </div>
        <p v-if="error">Datos invalidos</p>
        <div class="submit">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import auth from "@/auth/";
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      error: false,
    };
  },

  methods: {
    async getLogin() {
      try {
        let result = await auth.login(this.email, this.password);
        if (result.status === 200) {
          localStorage.setItem("user-data", result.data.token);
          this.$router.push("/home");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    let userLooged = localStorage.getItem("user-data");
    if (userLooged) {
      this.$router.push("/home");
    }
  },
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 750px;
}

.form {
  min-width: 320px;
}

.form .email,
.form .password {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  text-transform: uppercase;
}

.form .email label,
.form .password label {
  margin-bottom: 0.5rem;
}

.form .email input,
.form .password input {
  width: 95%;
  padding: 10px;
  border: 1px solid cornflowerblue;
  border-radius: 15px;
}

.form .submit {
  width: 100%;
}

.form .submit input {
  width: 100%;
  padding: 10px;
  border-radius: 15px;
  border: 0;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: plum;
  color: white;
}
</style>
