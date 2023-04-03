<template>
    <main>
    <div class="banner">

     <img src="banner.jpg" class="banner_img">

    </div>
    <div class="titulo_pag">
      <h1>DESTAQUES</h1>
    </div>
 
    <div class="resolver">

      <div class="div_margin">

        <div class="container_item" v-for="product in products" :key="product.id= 1" :title="product.title"
          :description="product.description" :img="product.img" :precoReal="product.precoReal"
          :precoFake="product.precoFake">
          <img v-bind:src="product.img" width="250" height="140">
          <h4 class="titleItem">{{ product.title }}</h4>
          <p class="descriptionItem"> {{product.description }}</p>
          <p class="estoqueItem">de: <span class="preco_fake"> R$ {{ product.precoFake}} </span><br>
            por: <span class="preco_real"> R$ {{product.precoReal}} </span></p>
            
          <router-link to="/produto"><button class="btn_Item" v-on:click="mudanca_pag(product)">COMPRAR AGORA</button></router-link>
        </div>
      </div>
      </div>

   
  </main>
</template>
<script>
import axios from "axios";

export default({
  data() {
    return {
      products: [],
    }
  },created() {
    axios.get('https://jogatina-2a7a2-default-rtdb.firebaseio.com/products.json')
      .then(response => {
        this.products = response.data;
        console.log(this.products)
      })
      .catch(error => {
        console.log(error);
      });
  }, methods: {
    mudanca_pag(product) {
      localStorage.setItem('product', JSON.stringify(product));
      console.log(product)
      

    }
  }
})
</script>

<style>
.banner_img{
  width: 100%;
  height: 250px;
  border-radius: 10px;
}


body{
  background-color: rgb(255, 255, 255);
}
.banner{
 
  color: white;
  width:80%;
  height: 250px;
  text-align: center;
  margin: 15px auto;
  

}


.div_margin{
  width: 67%;
  margin: auto;
  
}


nav a{
color: white;
}
nav ul a  li:hover{
  background-color: #a42d2d;
}
main p{
  font-size: 30px;
}
#app{
  width:100%;
   ;
  
  
}
.container_item{
  margin: 50px 20px;
  float: left;
  width: 250px;
  height: 350px;
  background-color: #d5d3d3;
  border-radius: 7px;
  text-align: center;
  
}



.descriptionItem{
  font-size: 17px;
  width: 240px;
}
.container_item img{
  border-radius: 7px 7px 0px 0px;
  
}
.titleItem{
  font-size: 24px;
  padding-bottom: 10px;
}
.estoqueItem{
  font-size: 17px;
  padding-top: 15px;
}
.btn_Item{
  margin-top:17px ;
  padding: 20px 30px;
  border-radius:0px 0px 10px 10px;
  border: 1px;
  background-color: green;
  color: white;
  font-weight: bold;
   cursor:pointer;
   width: 100%;
}
.titulo_pag{
  text-align: center;
  padding: 30px;
 
}

.preco_fake{
  text-decoration: line-through;
  color: red;
}

.preco_real{
  font-size: 18px;
  font-weight: bold;
  color: green;
}
.containerItens{
  background-color: white;
  width: 80%;
  margin: auto;
  height: auto;
  
}

</style>