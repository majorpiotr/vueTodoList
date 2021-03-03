<template>
  <div>
    Register
    <div class="row">
      <div class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">account_circle</i>
            <input 
              id="icon_prefix" 
              type="text" 
              class="validate"
              v-model="mail">
            <label for="icon_prefix">Mail</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">phone</i>
            <input 
              id="Password" 
              type="password" 
              class="validate"
              v-model="password">
            <label for="Password">Password</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">phone</i>
            <input 
              id="Password2" 
              type="password" 
              class="validate"
              v-model="passwordConfirm">
            <label for="Password2">Repeat Password</label>
          </div>
        </div>
        <button 

          class="btn waves-effect waves-light" 
          :class="isFilled()?'':'disabled'"
          v-on:click="register()">Submit
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from "axios";
export default {
  name: 'Register',
  components:{
  },
  props: {
    
  },
    data() 
    {
      return{
        mail:"",
        password:"",
        passwordConfirm:""
      }
    },
    watch: 
    {
    },
    methods:
    {
      isFilled:function()
      {
        return( this.mail.length>5 && this.password.length>8 && this.passwordConfirm.length>8 && this.passwordConfirm==this.password );
      },
      register:function()
      {
        axios({
          method: 'post',
          headers: {},
          url: this.$hostname+"register",
          data:{
            email:this.mail,
            password:this.password,
            password_confirmation:this.passwordConfirm,
            name:this.mail
          }
          }).then((result) => {
            console.log(result.data);
            localStorage.setItem("token", result.data.token);
        });
      }
    },
    mounted()     {    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
