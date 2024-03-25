<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { useDark, useToggle } from "@vueuse/core";
import router from '../routes/routes';

export default defineComponent({
  name: 'Header',
  props: {
    route: Object 
  },
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);

    return { isDark, toggleDark };
  },components:{
    RouterLink
  },
  methods: {
    scrollToProjetos() {
      const route = router;
      if(route!=undefined){
        route.push('/').then(() => {
        const projetosElement = document.getElementById('projetos');
        if (projetosElement) {
          projetosElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
      }
    },
    scrollToSobre() {
      const route = router;
      if(route!=undefined){
        route.push('/').then(() => {
        const projetosElement = document.getElementById('sobre');
        if (projetosElement) {
          projetosElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
      }
    },
    scrollToHome() {
      const route = router;
      
      if(route!=undefined){
        route.push('/').then(() => {
        const projetosElement = document.getElementById('home');
        if (projetosElement) {
          projetosElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
      }
    },
    scrollToFilosofia() {
      const route = router;
      if(route!=undefined){
        route.push('/').then(() => {
        const projetosElement = document.getElementById('filosofia');
        if (projetosElement) {
          projetosElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
      }
    }
  }
});
</script>

<template>
    <header>
        <nav>
            <ul>
              <li><RouterLink class="color1" to="/" @click="scrollToHome"> Home</RouterLink></li>
              <li><RouterLink class="color2" to="/" @click="scrollToSobre">Sobre</RouterLink></li>
              <li><RouterLink class="color3" to="/" @click="scrollToProjetos">Projetos</RouterLink></li>
              <li><RouterLink class="color4" to="/" @click="scrollToFilosofia">Filosofia</RouterLink></li>
            </ul>
        </nav>
        
        <button @click="toggleDark()" v-if="isDark"><div class="sun">🌞</div></button>
        <button @click="toggleDark()" v-else><div class="moon">🌙</div></button>
    </header>
  
</template>

<style scoped>
header{
  display:flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  overflow: hidden;
  font-weight: 500;
  color: #fff; 

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
  z-index: 1000; 
}
.dark header{
  background-color:rgb(24,24,24);
  color: rgb(245,245,245);
}


ul{
  list-style-type: none;
  display: flex;
  justify-content: left;
  
  padding:0;
}
.dark ul{
  background-color:rgb(24,24,24);
}

.dark a{
  background-color:rgb(24,24,24);
  color:rgb(245,245,245);
}

li{
  text-align: center;


}
a{
  text-decoration: none;
  
  
}
.sun{
  background-color:rgb(245,245,245);
}
.moon{
  background-color:rgb(24,24,24);
}
.color1:hover{
  color:rgb(232, 113, 28);
  border-bottom: 4px solid rgb(232, 113, 28);
}
.dark .color1:hover{
  color:rgb(248, 209, 10);
  border-bottom: 4px solid rgb(248, 209, 10);
}
.color2:hover{
  color:rgb(235, 109, 255);
  border-bottom: 4px solid rgb(235, 109, 255);
}
.dark .color2:hover{
  color:rgb(205, 26, 26);
  border-bottom: 4px solid rgb(205, 26, 26);
}
.color3:hover{
  color:rgb(70, 181, 60);
  border-bottom: 4px solid rgb(70, 181, 60);
}
.dark .color3:hover{
  color:rgb(62, 163, 222);
  border-bottom: 4px solid rgb(62, 163, 222);
}
.color4:hover{
  color:rgb(206, 48, 119);
  border-bottom: 4px solid rgb(206, 48, 119);
}
.dark .color4:hover{
  color:rgb(156, 51, 231);
  border-bottom: 4px solid rgb(156, 51, 231);
}

button div{
  font-size:22px;
  padding:5px;
  border-radius: 50%;
}

button{
 
  cursor:pointer;
  border:none;
  background-color:rba(24,24,24);
  width:50px;
  
}

.dark button{
  background-color:rba(24,24,24);
}
@media only screen and (min-width: 400px) and (max-width: 620px) {
  a {
    font-size:20px;
  }
  

}
@media only screen and (min-width: 620px) and (max-width: 1000px) {
  a {
    font-size:16px;
  }

}
</style>
