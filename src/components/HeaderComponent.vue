<template>
    
    <header>
      <div class='logo_div'>
    <img src="logo.png" class="logo">
    </div>
         <div class="log" v-if="showMessage" > 
      <button @click="$store.dispatch('logout')" class="logout_btn">Logout</button>
    </div>
    <div class="log" v-else > 
      <ul class="login_ul">
        <router-link to="/login">
          <li class="login_li">
            Login / registre-se
          </li>
      </router-link>
         
        </ul>
    </div>
   

    </header>
  
     
</template>
<script>
import { auth } from '../firebase'


export default{
   data() {
    return {
      showMessage: false
    };
  },mounted(){

    auth.onAuthStateChanged(user =>{
    if(user) {
        this.mudar()
    }
  })}, methods: {
    mudar(){
      this.showMessage = true
    }
    
  }
 
  
}

</script>
<style>
.logout_btn{
  padding: 10px 20px;
  color:#ad3838;
  border-color: #ad3838;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
}
.logout_btn:hover{
  background-color: #ad383811;
}
header{
text-align: center;
  
/*background-color: rgb(255, 3, 3);*/
  background-color: white;
  height: 120px;
  color: white;
}
.logo{
  height: 110px;
}
.logo_div{
  width: auto;
  float: left;
  width: 30%;
}
.log{
  float: right;
  margin-right: 10%;
  margin-top: 40px;
}
.login_li{
  display: inline-block;
  padding: 10px;
  color: #ad3838;
}
.login_li:hover{
  color: rgba(241, 220, 220, 0.445);
}

</style>
