<template>
  <div class="register">
    <h2>This is an register page</h2>
    <div class="form">
      <form action @submit.prevent="getRegister">
        <div class="email">
          <label for="#email" name="email">Email</label>
          <input v-model="email" type="email" id="email" required />
        </div>
        <div class="email">
          <label for="#name" name="username">Name</label>
          <input v-model="username" type="text" id="firstName" />
        </div>
        <div class="email">
          <label for="#firstName" name="firstName">Last Name</label>
          <input v-model="firstName" type="text" id="firstName" />
        </div>
        <div class="email">
          <label for="#lastName" name="username">Last Name</label>
          <input v-model="lastName" type="text" id="lastName" />
        </div>
        <div class="password">
          <label for="#password" name="password">Password</label>
          <input v-model="password.first" type="password" id="password" />
        </div>
        <div class="password">
          <label for="#password" name="password">Repetir Password</label>
          <input v-model="password.second" type="password" id="password" />
        </div>
        <div class="submit">
          <input type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import auth from "@/auth/";

export default {
  name: "RegisterView",
  data() {
    return {
      email: "",
      password: { first: "", second: "" },
      firstName: "",
      lastName: "",
      username: "",
    };
  },

  methods: {
    async getRegister() {
      try {
        await auth.register(
          this.email,
          this.firstName,
          this.lastName,
          this.username,
          this.password
        );
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    let userLooged = localStorage.getItem("user-data");
    if (userLooged) {
      this.$router.push("/welcome");
    }
  },
};
</script>

<style scoped>
.register {
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
