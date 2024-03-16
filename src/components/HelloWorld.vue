<script lang="ts">
import { defineComponent } from 'vue';
import { useDark, useToggle } from "@vueuse/core";

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);

    return { isDark, toggleDark };
  }
});
</script>

<template>
  <div>
    <p>Dark theme: {{ isDark }}</p>
    <button @click="toggleDark()">Toggle Color Mode</button>
  </div>
</template>

<style scoped>
/* Estilos do componente HelloWorld */
</style>
