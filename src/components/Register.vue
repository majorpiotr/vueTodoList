<template>
  <div>
    Register
    <div class="row">
      <div class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">account_circle</i>
            <input 
              id="email" 
              type="email" 
              class="validate"
              v-model="mail">
            <label for="email">Mail</label>
            <span class="helper-text" data-error="wrong" data-success="right"></span>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">phone</i>
            <input 
              id="Password" 
              type="password" 
              class="validate"
              minlength="9" 
              v-model="password">
            <label for="Password">Password</label>
            <span class="helper-text" data-error="wrong" data-success="right"></span>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">phone</i>
            <input 
              id="Password2" 
              type="password" 
              class="validate"
              minlength="9" 
              v-model="passwordConfirm">
            <label for="Password2">Repeat Password</label>
            <span class="helper-text" data-error="wrong" data-success="right"></span>
          </div>
        </div>
        <button 
          id="submitRegister"
          class="btn waves-effect waves-light" 
          :class="isFilled()?'':'disabled'"
          v-on:click="register()">Submit
          <i class="material-icons right">send</i>
        </button>
        <div>
          <p id="errorMail" class="deep-orange lighten-1" v-if="!isMailOk()">Mail is not valid</p>
          <p id="errorPassword" class="deep-orange lighten-1" v-if="!ispasswordOk()">Passwords are not the same or too short</p>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import axios from "axios";
  import M from 'materialize-css';
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
      isMailOk:function()
      {
        return(this.mail.length>5 && this.mail.includes("@"));
      },
      ispasswordOk:function()
      {
        return(this.passwordConfirm.length>8 && this.passwordConfirm==this.password);
      },
      isFilled:function()
      {
        return( this.isMailOk() && this.ispasswordOk());
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
              this.$emit('loggedIn');
            }).catch(function (error) {
            console.log(JSON.stringify(error.response.data));
            if(error?.response?.data?.errors)
            {
              M.toast({html: error?.response?.data?.errors[0]});
            }
            else if(error?.response?.data?.message)
            {
              M.toast({html: error?.response?.data?.message});
            }
        });
      }
    },
    mounted()     {    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
