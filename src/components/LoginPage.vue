<template>
  <div>
    <div class="card halfscreen teal accent-1">
      <div class="" v-if="loggedIn">
        <h4 class="amber lighten-5">
          You Are Logged in
        </h4>
        <div class="row">
          <div class="col s6">
            <a
              href="/todo" 
              class="waves-effect waves-light btn  light-green darken-4">
              <i class="material-icons left">
                dashboard
              </i>
              Go To your Todo List
            </a>
          </div>
          <div class="col s6">
            <div 
              v-on:click="logout"
              class="waves-effect waves-light btn  deep-orange darken-3">
              <i class="material-icons left">
                cancel
              </i>
              Log out
            </div>
          </div>
        </div>
      </div>
      <div v-else class="card-tabs">
        <ul class="tabs tabs-fixed-width" >
          <li class="tab" v-for="tab in tabs" :key="tab" v-on:click="changeTab(tab)">
            <a :class="activeTab==tab? 'teal darken-4':'teal accent-1'">
              {{tab}}
            </a>
          </li>
        </ul>
      </div>
      <div v-if="!loggedIn" class="card-content teal accent-1">
        <div v-if="activeTab=='Login'" class="teal accent-1">
          <Login @loggedIn="init()"></Login>
        </div>
        <div v-if="activeTab=='Register'" class="teal accent-1">
          <Register @loggedIn="init()"></Register>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import Login from './Login.vue'
    import Register from './Register.vue'
export default {
  name: 'LoginPage',
  components:{
    Login,Register
  },
  props: {
    
  },
  data() {
    return {
      tabs:["Login","Register"],
      activeTab:"Login",
      loggedIn:false
    }
  },
  watch: {},
  methods:
  {
    changeTab:function(value)
    {
      this.activeTab=value;
    },
    logout:function()
    {
      this.loggedIn=false;
      localStorage.removeItem("token");
    },
    init:function()
    {
      if(localStorage.getItem("token"))
      {
        this.loggedIn=true;
      }
      else
      {
        this.loggedIn=false; 
      }
    }
  },
  mounted() {
    this.init();
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
