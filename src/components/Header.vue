<script setup lang="ts">
import { useDark, useToggle} from '@vueuse/core';

const isDark = useDark()
const toggleDark = useToggle(isDark);

function callToggle(){
  toggleDark();
}


/*
<label class="switch">
  <input type="checkbox" @click="toggleDark()">
  <span class="slider"></span>
</label>

*/
</script>
<template>
  <header id="header">
    <ul>
      <li><a href="#id">Home</a></li>
      <li><a href="#id">Skills</a></li>
      <li><a href="#id">Projects</a></li>
      <li><a href="#id">About</a></li>
      <li>
        <button  id="dark-mode-button" @click="callToggle()">{{ isDark ? '☀️' : '🌙' }}</button>
      </li>
    </ul>
  </header>
  <header id="header-mobile">
    <div id="div-dark-mode">
      <button  id="dark-mode-button" @click="callToggle()">{{ isDark ? '☀️' : '🌙' }}</button>
    </div>
    <div id="menu-mobile">
      <button ><img src="../assets/menu.png"></button>
    </div>
  </header>

</template>

<style scoped>
  #dark-mode-button{
    cursor:pointer;
    padding-top:2px;
    font-size: larger;
    background: none;
    border: none;
  }
  #header-mobile{
    display:none;
  }

  #dark-mode-button:hover{
    border:none;
  }

  #title-name{
    font-size: 1.6em;
    margin-top:13px;
  }
  
  .dark a{
    color:rgb(231, 229, 229);;
  }
  .dark a:hover{
    color:rgb(127, 21, 214);
  }
  #header{
      position: absolute;
      z-index: 100;
      width: 100%;
      height: 55px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      
      background-color: rgb(246, 246, 246);
      border: 1px 1px 0px 0px solid black;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
    }
  .dark #header{
      color:rgb(231, 229, 229);
      background-color:rgb(17, 17, 17);
      border: 1px 1px 0px 0px solid black;
      box-shadow: rgba(68, 68, 68, 0.35) 0px 5px 10px;
  }
  @media screen and (max-width: 400px) {
  /* Estilos para telas menores que 600px */
  #header {
    height: 60px;
    flex-direction: column;
    justify-content: center;
    text-align:center;
    display: none;
  }
  #header-mobile{
    display: flex;
  }
  ul{
    margin:auto;
  }
  #header-mobile{
    display:flex;
    justify-content: space-between;
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 55px;
    display: flex;
    flex-direction: row;
    padding:5px 0px;
    background-color: rgb(246, 246, 246);
    border: 1px 1px 0px 0px solid black;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
  }
  .dark #header-mobile {
    color:rgb(231, 229, 229);
      background-color:rgb(17, 17, 17);
      border: 1px 1px 0px 0px solid black;
      box-shadow: rgba(68, 68, 68, 0.35) 0px 5px 10px;
  }

  #header-mobile img{
    width:40px;
  }
  #header-mobile button{
    max-width: 100%; /* Garante que a imagem não ultrapasse a largura da div */
    max-height: 100%; 
  }
  #div-dark-mode{
    margin:10px;
  }
  #dark-mode-button{
    cursor:pointer;
    padding-top:2px;
    font-size: 30px;
  }
  #menu-mobile{
    margin:5px;
  }
}

  a{
    font-size:1.4em;
    text-decoration: none; 
    color:rgb(23, 23, 23);
  }
  a:hover{
    color:rgb(25, 193, 226);
    text-decoration:underline;
  }

  ul{
    list-style-type: none;
    overflow: hidden;
    justify-items:center;

    margin-top:15px;
  }
  li{
    display: block;
    
    float: left;
    padding-inline: 10px;
    text-align:center;
  }
  
</style>

