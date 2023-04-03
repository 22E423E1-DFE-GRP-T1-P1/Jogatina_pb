<template>
    <div>
        <div class="img_info">
            <h1 class="title_info">{{info.titulo}}</h1>
            <img :src="info.img" class="img_ele">
            <p class="historia_info">{{info.historia}}</p>
        </div>
    <div class="inputs_nota">
            <h1>FAÇA SUA REVIEW</h1>
            <div class="margen_2">
           <div class="form-group">
    <label for="exampleFormControlSelect1">Nota:</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
    </select>
  </div>
                 <div class="form-group">
    <label for="exampleFormControlTextarea1">Descrição:</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Conte-nos o que achou do jogo"></textarea>
  </div>
   </div>
                <button  class="btn btn-primary" >ENVIAR</button>

            
   
    </div>
        <div class="review_campo">

        </div>
    </div>
</template>
<script>
export default({
  data() {
    return {
      info: [],
    }
  }, mounted(){
    this.mudanca_pag()
}, methods: {
    mudanca_pag() {
        const prod = JSON.parse(localStorage.getItem('info_games'));
        this.info=prod ;
        console.log(this.info)
    }
  }
})
</script>
<style >
.margen_2{
    width: 90%;
    margin : 10px auto;
    
}
.inputs_nota{
    text-align: center;
    border: none;
    width: 80%;
    margin: auto;
  box-shadow: 1px 0px 6px 0px rgba(0, 0, 0, 0.226);
  border-radius: 10px;
  padding: 10px;
}
.review_campo{
    padding: 10px;
    border: none;
    width: 80%;
    margin: auto;
  box-shadow: 1px 0px 6px 0px rgba(0, 0, 0, 0.226);
  border-radius: 10px;
}
.img_ele{
  
    width: 30%;
}
.img_info{
    text-align: center;
      margin: 100px;
}
.title_info{
    padding-bottom:40px;
}

.historia_info{
    padding:30px ;
}@media screen and (max-width: 480px) {
  
.img_ele{
  
    width: 90%;
}
.historia_info{
    padding:0px ;
}
}
</style>
