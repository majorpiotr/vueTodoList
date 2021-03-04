<template>
  <div>
    Login
    <div class="row">
      <div class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">account_circle</i>
            <input 
              id="mailbox" 
              type="email" 
              class="validate"
              v-model="mail">
            <label for="mailbox">Mail</label>
            <span class="helper-text" data-error="wrong" data-success="right"></span>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">phone</i>
            <input 
              id="Password" 
              type="password" 
              class="validate"
              minlength="8" 
              v-model="password">
            <label for="Password">Password</label>
            <span class="helper-text" data-error="wrong" data-success="right"></span>
          </div>
        </div>
      <button 
        class="btn waves-effect waves-light" 
        :class="isFilled()?'':'disabled'"
        v-on:click="login()">Submit
        <i class="material-icons right">send</i>
      </button>
      <div>
        <p class="deep-orange lighten-1" v-if="!isMailOk()">Mail is not valid</p>
        <p class="deep-orange lighten-1" v-if="!ispasswordOk()">Password is too short</p>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from "axios";
  import M from 'materialize-css';
export default {
  name: 'Login',
  components:{
    
  },
  props: {
    
  },
  data() {
    return {
      mail:"",
      password:""
    }
  },
  watch: {
  },
  methods:
  {
    isMailOk:function()
    {
      return(this.mail.length>5 && this.mail.includes("@"));
    },
    ispasswordOk:function()
    {
      return(this.password.length>8);
    },
    isFilled:function()
    {
      return( this.isMailOk() && this.ispasswordOk());
    },
    login:function()
    {
      console.log(this.mail);
      console.log(this.password);
      axios({
        method: 'post',
        headers: {},
        url: this.$hostname+"login",
        data:{
          email:this.mail,
          password:this.password,
          password_confirmation:this.password,
        }
        }).then((result) => {
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
  mounted() {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
