<template>
  <div>
    <h3>{{ objeto.nome }}</h3>
    <router-link :to="'/project/' + objeto.id">{{"link to "+objeto.nome}}</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Projeto {
  id: number;
  nome: string;
}

export default defineComponent({
  props: {
    objeto: {
      type: Object as () => Projeto,
      required: true
    }
  }
})
</script>

<style scoped>
/* Estilos específicos do componente */
</style>
