<template>
 
  <div>
     <TopHeaderComponent/>
     <HeaderComponente />
     <NavComponent/>
     <router-view></router-view>
     <FooterComponente />
   </div>
 
 </template>
 
 <script>
 import './components/global.css'; 
 import NavComponent from './components/NavComponent.vue'
 import TopHeaderComponent from './components/TopHeader.vue'
 import HeaderComponente from './components/HeaderComponent.vue';
 import FooterComponente from './components/FooterComponent.vue';
 
 export default {
     name: "App",
     components: {TopHeaderComponent, HeaderComponente, FooterComponente,NavComponent }
 }
 </script>
 
 <style>
 </style>