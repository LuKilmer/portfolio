<template>
    <h1>Projects {{ quantidade }}</h1>
    <div >
      <div v-for="(projeto) in projetos" v-bind:key="projeto.id">{{ projeto.nome }} {{ projeto.linguagens }}</div>
    </div>
</template>

  <script lang="ts">
    import Card from './Card.vue'
  
    export default {
      name:'Projects',
        components: {
            Card
        },
      data () {
      return {
          quantidade:6,
          projetos:[
            {"id":1,"nome":"portfolio","linguagens":"html,css"},
            {"id":2,"nome":"portfolio","linguagens":"html,css"},
            {"id":3,"nome":"portfolio","linguagens":"html,css"},
            {"id":4,"nome":"portfolio","linguagens":"html,css"},
            {"id":5,"nome":"portfolio","linguagens":"html,css"}
          ]
        }
      }
   
    }
  </script>