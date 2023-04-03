<template>

    <div class="aviso">
    <img src="caution.png" height="30">
    <h1>Para continuar é necessário estar logado.</h1>
    <router-link to='/login'><button >Login / Registrar-se</button></router-link>
    </div>


</template>
<script>


export default ({
    
})
</script>
<style>

.aviso{
    text-align: center;
    margin-top: 40px;
    margin-bottom:200px ;
}
.aviso button{
    margin-top:10px ;
    padding: 5px 10px;
    margin-right: 20px;
    margin-left:20px;
    background: rgb(236, 29, 29);
    color: aliceblue;
    border-color:white ;
    border-radius: 7px;
}

</style>
