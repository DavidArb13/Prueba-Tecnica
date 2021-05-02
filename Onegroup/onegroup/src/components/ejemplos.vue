<template>
<div>
 
  <hr>
  <input type="text" v-model="user.name">
  <div v-html="myhtml"></div>
  <div v-text="title"></div> 
     <div v-if="showName">
       <p>{{ user.name }}</p>
     </div>
     <div v-else>
       <p class="a">
         no puedo mostrar nombre
       </p>
      
       
     </div>
     <hr>
     <!-- <div>
       {{ task[1].title }}
     </div> -->
     <ul v-for="task in tasks" v-bind:key="task.id">
        <li>{{ task.title }}</li>
        <hr>
    </ul>
    <button type="button" name="button" 
      v-on:click="saludar(user.name)">
      CLICK ME
    </button>
    <hr>
    <input type="text" v-on:keyup.enter="EnterWords">
    <hr>
    <div>{{ fullName }}</div>
    <div> {{ msg }}</div>
</div>
         
</template>

<script>
export default {
  name: 'cualquiera',
  data(){
    return{
      title: 'hola VueJs',
      user:{
        name: 'david',
        lastname: 'Daarb'
      },
      myhtml: '<h3>holaVue</h3>',
      showName: false,
      tasks: [
        {title: 'eat'},
        {title: 'dinner'},
        {title: 'foot'}
      ],
    }
  },
  methods:{
    saludar(name){
      alert('hello' + " " + name)
    },
    typing(e){
      console.log(e.target.value);
      if(e.target.keyCode === 13);
    },
    EnterWords(){
      console.log('dio un enter');
    },
  },
  
  computed: {
    fullName(){
      return this.user.name + ' ' + this.user.lastname;
    }
  },
  props: {
    msg: {
      type: String,
      default: 'mensaje por defecto'
    }
  }
}
</script>

<style media="screen">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.a {
  color: #42b983;
  font-family: Arial, Helvetica, sans-serif;
}
</style>