<template>
    <main>
        <div class="apresentacao">
       <h1>Classificados!</h1>
       <p>Aqui poderá ter acesso a todas as informações, reviews e sugestões dos games mais jogados do momento.</p>
        </div>
        <div class="top_ranking" >
            <h1>Ranking 10 games mais vendidos</h1>
            <div class="item_game_ranking" v-for="rank in ranking" :key="rank.id" :titulo="rank.titulo">
              <h3>Top {{rank.colocacao}}</h3>
                <img :src="rank.imagem" class="fotocopia">
                <h5>{{rank.titulo}}</h5>
            </div>
        </div>
        <div class="top_ranking" >
          <h1>Avalie os jogos mais em alta!</h1>
        <div class="item_game" v-for="item in jogos_review" :key="item.id">
          <img :src="item.img">
         <h3> {{item.titulo}}</h3>
         <button v-on:click="avaliar(item)">Avalie</button>
         

        </div>
        </div>
    </main>
</template>
<script>
import axios from 'axios';
import games from '../../public/review.json'

export default {
  data() {
    return {
      ranking: [],
      jogos: [],
      jogos_review:games
    }
  },
  mounted() {

    axios.get('/classificados.json')
      .then(response => {
        this.ranking = response.data;
        console.log(this.ranking)
      })
      .catch(error => {
        console.log(error);
      });

 
  }, methods: {
    avaliar(item){
       localStorage.setItem('info_games', JSON.stringify(item));
      this.$router.push('/avaliacao' );
    }
  }}
</script>
<style >
.item_game{
  display: inline-block;
  width:30%;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.26);
}
.item_game img{
  width: 80%;
  height: 300px;
}
.item_game button{
  padding: 10px 20px;
  margin-top: 5px;
  border-radius: 10px;
  background-color: rgb(177, 50, 50);
  color: white;
  border:none;
  cursor:pointer;

}


.fotocopia{
  width: 100%;
  height: 150px;
}
.apresentacao{
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
}
.apresentacao p{
    font-size: 20px;
}
.top_ranking{
     box-shadow: 1px 3px 6px 2px rgba(0, 0, 0, 0.185);
    width: 90%;
    margin: 10px auto;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
}
.item_game_ranking{
    box-shadow: 1px 0px 6px 0px rgba(0, 0, 0, 0.226);
    width: 20%;
    margin: 10px;
    height: auto;
    text-align: center;
   display: inline-block;
   border-radius: 5px;
   padding: 0px 0px 10px 0px;
  
}
@media screen and (max-width: 480px) {
  .item_game_ranking{
    box-shadow: 1px 0px 6px 0px rgba(0, 0, 0, 0.226);
    width: 90%;
    margin: 10px;
    height: auto;
    text-align: center;
   display: block;
   border-radius: 5px;
   padding: 0px 0px 10px 0px;
  
}
}
</style>