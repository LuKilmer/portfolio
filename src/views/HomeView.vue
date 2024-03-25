<script lang="ts">
import ProjectList from '../components/ProjectList.vue';
import Sobre from '../components/Sobre.vue';
import Filosofia from '../components/Filosofia.vue';
import Home from '../components/Home.vue';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'HomeView',
  components: {
    ProjectList,
    Sobre,
    Filosofia,
    Home
  }
});
</script>

<template>
  <Home/>
  <Sobre/>
  <ProjectList/>
  <Filosofia/>
</template>

<style scoped>

</style>
