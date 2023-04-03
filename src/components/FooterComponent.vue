<template>
    <footer>
    <div class="top_footer">
      <p><b>10% DE DESCONTO</b> USANDO CUPOM <b>DUKEIRA_BAHIANO24</b></p>
    </div>
   <img src="logo.png" height="200" class="foto_footer">
    <div   class="itens_footer">
      <ul class="ul_footer">
        <router-link to="/"><li class="li_footer">Loja</li></router-link>
       <router-link to="/classificados"><li class="li_footer">Classificados</li></router-link>
       <router-link to="/sobre"> <li class="li_footer">Sobre Nós</li></router-link>
       <router-link to="/login"> <li class="li_footer">Login / Registre-se</li></router-link>
       


      </ul>

    </div>
    <div class="palav">
      <p> JOGATINA! 2023-2023 nenhum direito reservado</p>
    </div>
    
  </footer>

    
</template>
<script>


</script>
<style>

.top_footer{
  background-color: green;
  height: 30px;
  text-align:center;
  color: white;
  
}
.top_footer p{
  position: relative;
  top: 20%;
  
}

footer{
  clear: both;
  


  height:400px;
  background-color: #ad3838;
  width: 100%;
  color: white;
  
  
}
.itens_footer{
  float: right;
  width: 50%;
  margin-top:20px;
}
.li_footer{
  display: inline-block;
  width: 40%;
  margin-top: 20px;
  color: white;
}

footer h1{

  position: relative;
  margin-top: 50px;
  margin-left: 30px;

}
.palav{
  bottom:  0;
}
  
.foto_footer{
  padding-left: 10px;
}
  
</style>
