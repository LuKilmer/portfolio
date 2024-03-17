<template>
    <div>
      <Header/>
      <h1>Olha só</h1>
      <p>ID: {{ objeto.id }}</p>
      <p>Nome: {{ objeto.nome }}</p>
      <Footer/>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  
  class Projeto {
    id: number;
    nome: string;
    constructor() {
      this.id = 0;
      this.nome = "";
    }
  }
  
  export default defineComponent({
    name: "ProjectView",
    components: {
      Header,
      Footer
    },
    setup() {
      const route = useRoute();
      const id = ref<number | null>(null);
      const objeto = ref<Projeto>(new Projeto());
  
      onMounted(() => {
        if (route.params.id) {
          id.value = Number(route.params.id);
          
          fetch('https://lukilmer.github.io/portfolio/src/assets/json/projects.json')
            .then(response => response.json())
            .then(data => {
              if (id.value !== null && id.value <= data.projetos.length) {
                objeto.value = data.projetos[id.value - 1];
              }
            })
            .catch(error => {
              console.error('Erro ao carregar dados:', error);
            });
        }
      });
  
      return { id, objeto };
    }
  })
  </script>
  