<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Project from './Project.vue';

interface Projeto {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
}

export default defineComponent({
  name: "ProjectList",
  setup() {
    const projetos = ref<Projeto[]>([]);
    onMounted(() => {
      fetch('http://localhost:3000/projetos/')
        .then(response => response.json())
        .then(data => {
          
          projetos.value = data;
        })
        .catch(error => {
          console.error('Erro ao carregar dados:', error);
        });
    });

    return { projetos };
  },
  components: {
    Project
  }
});
</script>

<template>
  <div id="projetos">
    <h2>Projetos</h2>
  <ul>
    <li v-for="projeto in projetos" :key="projeto.id"><Project :objeto="projeto"/></li>
  </ul> 
  </div>
  
</template>

<style scoped>
#projetos{
  padding-top:60px;
  width:70%;
}
li{
  list-style: none;
}
</style>
