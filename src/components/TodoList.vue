<template>
  <div class="lime darken-1">
    <AddTask @updated="init"></AddTask>
    <ul class="collection with-header">
      <li class="collection-header  amber darken-1"><h4>TodoList</h4></li>
      <li class="collection-item avatar orange darken-1" v-for="item in items" :key="item.id">
        <ListItem :item="item" @updated="init"></ListItem>
      </li>
    </ul>
  </div>
</template>
<script>
    import axios from "axios";
    import AddTask from './AddTask.vue'
    import ListItem from './ListItem.vue'
export default {
  name: 'TodoList',
  components:{
    AddTask,ListItem
  },
  props: {
    
  },
  data() {
    return {
      items:[]
    }
  },
  watch: {
  },
  methods:
  {
    init:function()
    {
      axios({
        method: 'get',
        headers: {
          Authorization:"Bearer "+localStorage.getItem("token"),
        },
        url: this.$hostname+"todo",
        data:{}
      }).then((result) => {
        this.items=result.data;
        });
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
