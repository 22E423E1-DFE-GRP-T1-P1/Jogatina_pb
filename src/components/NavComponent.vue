<template>
    <nav>
    <ul>
      <router-link to='/'>
        <li>Loja</li>
      </router-link>
     <router-link to='/classificadosLogin'>
        <li>Classificados</li>
      </router-link >

    <router-link to="/sobre">
        <li>Sobre nós</li>
     </router-link>
    </ul>
  </nav>
</template>
<script>


export default {
    
}
</script>

<style >
nav{
  background-color: #ad3838;
  height: 30px;
  text-align: center;
}
nav ul{
  position: relative;
  top: 20%;
  color: white;
}

nav ul li{
  display: inline-block;
  top:25%;

  width: 33%;
  
}
nav a{
color: white;
}
nav ul a  li:hover{
  background-color: #a42d2d;
  color: white;
}

</style>
