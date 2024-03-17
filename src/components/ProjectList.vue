<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Project from './Project.vue';

interface Projeto {
  id: number;
  nome: string;
}

export default defineComponent({
  name: "ProjectList",
  setup() {
    const projetos = ref<Projeto[]>([]);
    onMounted(() => {
      fetch('https://lukilmer.github.io/portfolio/src/assets/json/projects.json')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          projetos.value = data.projetos;
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
/* Estilos específicos do componente */
</style>
