<template>
  <div class="user">
      <h1 >User component</h1>
      <ul v-for="key in users" v-bind:key="key.id">
          <li>
              {{ key.name }} - {{ key.email }} 
              <button v-on:click="deleteUser(key)">X</button>
          </li>
      </ul>
      <form v-on:submit.prevent="addUser">
          <input type="text" v-model="newUser.name" placeholder="Name">
          <input type="email" v-model="newUser.email" placeholder="Email">
          <button type="submit">
              add
          </button>
      </form>
  </div>
</template>

<script>
export default {
    name: 'user',
    data(){
        return {
            users: [
               
            ],
            newUser:{}   
        }
    },
    methods:{
        addUser(){
            this.users.push(this.newUser);
            this.newUser = {};
            
            console.log('add', this.newUser); 
        },
        deleteUser(key){
            this.users.splice(this.users.indexOf(key), 1);
            
            alert('eliminando');
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then(res => this.users = res.body); 
        
    }
}
</script>

<style lang="css">
    .user{
        background: #000;
        color: aliceblue;
        padding: 50px;
    }
</style>