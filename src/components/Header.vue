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
      console.log(route);
      if(route!=undefined){
        route.push('/').then(() => {
        const projetosElement = document.getElementById('projetos');
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
              <li><RouterLink class="color1" to="/" @click="scrollToProjetos"> Home</RouterLink></li>
              <li><a class="color2" href="#sobre">Sobre</a></li>
              <li><a class="color3" href="#projetos">Projetos</a></li>
              <li><a class="color4" href="#filosofia">Filosofia</a></li>
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
  padding: 10px 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
  z-index: 1000; 
}
.dark header{
  background-color:rgb(24,24,24);
  color: rgb(245,245,245);
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.2); /* Sombra para efeito de elevação */
}
ul{
  list-style-type: none;
  display: flex;
  margin:auto;
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
  margin:5px;

}
a{
  text-decoration: none;
  padding:2px;
  
}
.sun{
  background-color:rgb(245,245,245);
}
.moon{
  background-color:rgb(24,24,24);
}
a:hover{
  color:rgb(253, 153, 81);
  border-bottom: 3px solid rgb(253, 153, 81);
}
button div{
  padding:5px;
  border-radius: 50%;
}

button{
  padding-right:20px;
  cursor:pointer;
  border:none;
  background-color:rba(24,24,24);
}

.dark button{
  background-color:currentColor;
}
@media only screen and (min-width: 400px) and (max-width: 620px) {
  a {
    font-size:26px;
  }
  button{
    font-size:25px;
  }

}
@media only screen and (min-width: 620px) and (max-width: 1000px) {
  a {
    font-size:16px;
  }
  button{
    font-size:15px;
  }

}
</style>
