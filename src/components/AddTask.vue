<template>
  <div>
    <p>Add New</p>
    <div class="row">
      <div class="input-field col s6">
        <input placeholder="Task Text" id="first_name" type="text" class="validate" v-model="text">
        <label for="first_name">Task Text</label>
      </div>
      <div class="switch col s3">
        <label>
          Active
          <input type="checkbox" v-model="done">
          <span class="lever"></span>
          Done
        </label>
      </div>
      <div class="col s3">
        <button 
          class="btn waves-effect waves-light" 
          :class="isFilled()?'':'disabled'"
          v-on:click="add">Submit
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from "axios";
  import M from 'materialize-css';
export default {
  name: 'AddTask',
  components:{
    
  },
  props: {
    
  },
        data() {
            return {
              text:"",
              done:0
            }
        },
        watch: {

        },
        methods:
        {
          isFilled:function()
          {
            return(this.text.length>0 );
          },
          add:function()
          {
            axios({
              method: 'post',
              headers: {
                Authorization:"Bearer "+localStorage.getItem("token"),
              },
              url: this.$hostname+"todo",
              data:{
                text:this.text,
                done:this.done,
              }
            }).then((result) => {
                M.toast({html: result.data.message});
                if(result.data.id)
                {
                  this.text="";
                  this.done=0;
                }
                this.$emit('updated');
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
