<template>
  <div>
    LoginPage
    <div class="card">
      <div class="card-tabs">
        <ul class="tabs tabs-fixed-width" >
          <li class="tab" v-for="tab in tabs" :key="tab" v-on:click="changeTab(tab)">
            <a :class="activeTab==tab? 'active':''">
              {{tab}}
            </a>
          </li>
        </ul>
      </div>
      <div class="card-content">
        <div v-if="activeTab=='Login'">
          <Login></Login>
        </div>
        <div v-if="activeTab=='Register'">
          <Register></Register>
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
      activeTab:"Login"
    }
  },
  watch: {},
  methods:
  {
    changeTab:function(value)
    {
      this.activeTab=value;
    }
  },
  mounted() {}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
