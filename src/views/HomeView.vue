<script lang="ts">
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import ProjectList from '../components/ProjectList.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    Footer,
    ProjectList
  }
});
</script>

<template>

<Header/>
<ProjectList/>
<Footer/>

</template>

<style scoped>
</style>
