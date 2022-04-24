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
    getLogin() {
      console.log(this.email, this.password);
    },
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
