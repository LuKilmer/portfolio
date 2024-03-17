<template>
    <h3>{{ objeto.nome }}</h3>
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
