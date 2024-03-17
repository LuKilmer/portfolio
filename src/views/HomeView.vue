<script lang="ts">
import ProjectList from '../components/ProjectList.vue';
import Sobre from '../components/Sobre.vue';
import Filosofia from '../components/Filosofia.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    ProjectList,
    Sobre,
    Filosofia
  }
});
</script>

<template>

<Sobre/>
<ProjectList/>
<Filosofia/>
</template>

<style scoped>
</style>
