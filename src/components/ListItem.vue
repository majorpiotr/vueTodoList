<template>
  <div>
    <div>
      {{item.text}}
    </div>
    <div v-if="edit" >
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">text_fields</i>
          <input 
            :id="'input'.concat('of', item.id)" 
            type="text" 
            class="validate"
            v-model="item.text">
          <label :for="'input'.concat('of', item.id)">Text</label>
        </div>
        <div class="switch col s6">
          <label>
            Active
            <input type="checkbox" v-model="item.done">
            <span class="lever"></span>
              Done
          </label>
        </div>
      </div>
      <div class="btn  waves-effect waves-light red" v-on:click="Remove()">
        Remove
      </div>
      <div class="btn  waves-effect waves-light green" v-on:click="Save()" >
        Save
      </div>
    </div>
    <div class="secondary-content">
      <div class="btn-floating btn-large waves-effect waves-light blue" v-on:click="edit=!edit">
        <i class="material-icons">build</i>
      </div>
    </div>
  </div>
</template>
<script>
    import axios from "axios";
    import M from 'materialize-css';    
export default {
  name: 'ListItem',
  components:{
    
  },
  props: {
    item:Object
  },
  data() {
    return {
      edit:false
    }
  },
  watch: {},
  methods:
  {
    Save:function()
    {
      axios({
        method: 'put',
        headers: {
          Authorization:"Bearer "+localStorage.getItem("token"),
        },
        url: this.$hostname+"todo/"+this.item.id,
        data:{
          done:this.item.done,
          text:this.item.text
        }
      }).then((result) => {
        this.items=result.data;
        M.toast({html: result.data.message});
        this.$emit('updated');
      });
    },
    Remove:function()
    {
      axios({
        method: 'delete',
        headers: {
          Authorization:"Bearer "+localStorage.getItem("token"),
        },
        url: this.$hostname+"todo/"+this.item.id,
        data:{}
      }).then((result) => {
        this.items=result.data;
        M.toast({html: result.data.message});
        this.$emit('updated');
      });
    }
  },
  mounted() {}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
