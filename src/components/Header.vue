<script setup lang="ts">
import { useDark, useToggle} from '@vueuse/core';

const isDark = useDark()
const toggleDark = useToggle(isDark);

</script>
<template>
  <header id="header" >
 
    <h1 id="title-name">&lt;LuKilmer&frasl;&gt;</h1>
    <ul>
      <li><a href="#id">Home</a></li>
      <li><a href="#id">Projects</a></li>
      <li><a href="#id">About</a></li>
      <li><a href="#id">Articles</a></li>
      <li>
        <label class="switch">
          <input type="checkbox" @click="toggleDark()">
          <span class="slider"></span>
        </label>
      </li>
    </ul>

  </header>
</template>

<style scoped>
  #title-name{
    font-size: 1.6em;
    margin-top:12px;
  }
  .dark #header{
    background-color:red;
  }
 #header{
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
    background-color: rgb(246, 246, 246);
    border: 1px 1px 0px 0px solid black;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
  }
  @media screen and (max-width: 600px) {
  /* Estilos para telas menores que 600px */
  #header {
    height: 100px;
    flex-direction: column;
    justify-content: center;
    text-align:center;
  }
  ul{
    margin:auto;
  }
}

  a{
    font-size:1.4em;
    text-decoration: none; 
    color:rgb(23, 23, 23);
  }
  a:hover{
    color:rgb(17, 167, 197);
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
    padding:0px 10px;
    text-align:center;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 54px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #131313;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #181818;
  }

  input:checked + .slider:before {
    transform: translateX(20px);
  }
</style>

