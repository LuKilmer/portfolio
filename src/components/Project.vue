
<template>
  <div>
    <h3 @click="okok">{{ objeto.nome }}</h3>
    <p>{{ objeto.descricao }}</p>
    <img :src="objeto.imagem" :alt="objeto.nome"><br>
    <router-link :to="'/project/' + objeto.id">{{"link to "+objeto.nome}}</router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

interface Projeto {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
}
let objeto: Object;

export default defineComponent({
  props: {
    objeto: {
      type: Object as () => Projeto,
      required: true
    }
  },
  methods:{
    okok(){
      console.log(objeto);
    }
  },
  beforeMount() {
      console.log(this.objeto);
  },
})
</script>

<style scoped>

img{
  width:50px;
}
</style>
