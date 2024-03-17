<script lang="ts">
import { defineComponent } from 'vue';
import { useDark, useToggle } from "@vueuse/core";

export default defineComponent({
  name: 'Header',
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);

    return { isDark, toggleDark };
  }
});
</script>

<template>
    <header>
        <nav>
            <ul>
                <li><RouterLink to="/">Go to Home</RouterLink></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
        <button @click="toggleDark()">Toggle Color Mode</button>
    </header>
  
</template>

<style scoped>

</style>
