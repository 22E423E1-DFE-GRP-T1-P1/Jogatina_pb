<template>

    
     <div class="item"> 
     
        <div class="img_container">
         <img :src="products.img"  class="img_prod">
        </div>
        <div class="store_menu">
        <h1 class="title_prod" >{{products.title}}</h1>
        <p>{{products.description_complete}}</p>
        <div class="precos_div">
        <h4 class="preco_antigo">De R$ {{products.precoFake}}</h4>
        <h3 class="preco_atual">Por R$ {{products.precoReal}}</h3>
        </div>
        <div class="container_bt">
        <button class="btn_compra">Comprar</button>
        </div>
      </div>
      
      <div class="avaliacao_container">
       
        <h2>Avaliações da loja</h2>
       <div class="reviews_itens" v-for="review in reviews" :key="review.id">
           <img src="5star.jpg"  height="40">
      <h3>{{review.titulo}}</h3>
      <p>{{review.descricao}}</p>

      </div>
      </div>
     

        </div>


</template>
<script>
export default({
  data() {
    return {
     products: [],
     reviews: [{
      id: 1,
      titulo:"Ótimo atendimento" ,
      descricao:"Loja de confiança!"
     },{
      id: 2,
      titulo:"As melhores ofertas" ,
      descricao:"Com o cupom do bahiano ficou  mais barato!"
     },{
      id: 3,
      titulo:"Melhor fórum" ,
      descricao:"Muitas sugestões de jogos!"
     },{
      id: 4,
      titulo:"Ótimo suporte" ,
      descricao:"Total atenção dos especialistas!"
     },
     ]
    }
  }, mounted(){
    this.mudanca_pag()
}, methods: {
    mudanca_pag() {
        const prod = JSON.parse(localStorage.getItem('product'));
        this.products=prod ;
        console.log(this.products.img)
    }
  }
})
</script>
<style >
.item{
    width: 70%;
    margin: 5% auto;
   
}
.img_prod{
    text-align: center;
    width:100%;
    border-radius: 10px;

}

.title_prod{
  text-align: center;
  padding-bottom: 10px;
    
}
.img_container{

float: left;
  width: 40%;
}

.store_menu{
  box-shadow: 0 1px 6px 0 rgba(180, 179, 179, 0.63);
  display: inline-block;
  margin-left: 15px;
  height: auto;
  width: 43.5%;
  padding: 10px;
  border-radius: 10px;
}
.precos_div{
  text-align: center;
  padding: 10px;
}
.preco_antigo{
  color: red;
  text-decoration: line-through;

}
.preco_atual{
  color: green;
  
}
.btn_compra{
  
  background-color: green;
  padding: 10px 20px;
  color: white;
  border-color: white;
  border-radius: 10px;
}
.container_bt{
  text-align: center;
}
.avaliacao_container{
  clear: both;
   box-shadow: 0 1px 6px 0 rgba(180, 179, 179, 0.63);
   height: auto;
   border-radius:10px ;
   width: 85%;
  padding-bottom:10px ;
   margin-top:10px ;
}
.avaliacao_container h2{
  text-align: center;
}
.reviews_itens{
box-shadow: 0 1px 6px 0 rgba(180, 179, 179, 0.63);
  width: 43%;

  margin: 10px 25px;
  border-radius: 10px;
  height: auto;
    text-align: center;
  display: inline-block;
  

}
.reviews_itens h3{
  text-align: center;
  padding: 10px;
}
.reviews_itens p {
  font-weight: bold;
  text-align: center;
  padding:10px;
}
.reviews_itens img{
  text-align: center;
}
@media screen and (max-width: 480px) {
    .container {
      width: 100%;
    }
    .img_container{

        float: none;
          width: 100%;
        }
    .store_menu{
        box-shadow: 0 1px 6px 0 rgba(180, 179, 179, 0.63);
       display: block;
       
        height: auto;
        width: 100%;
        padding-top: 10px;
        border-radius: 10px;
      }
    .reviews_itens{
    box-shadow: 0 1px 6px 0 rgba(180, 179, 179, 0.63);
      width: 80%;
      margin: 10px 25px;
      border-radius: 10px;
      height: auto;
        text-align: center;
      display:block;
      

    }
  }
</style>
