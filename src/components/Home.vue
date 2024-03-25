<template>
    <div id="home">
        <div id="title">
            <h2>LuKilmer (Luis Kilmer)</h2>
            <p> Desenvolvedor de algumas coisas ae...</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Home",
    setup() {
        
    },
})
</script>

<style scoped>
#home{
    width:100%;
    padding-top:60px;
}
#title{
    margin:auto;
}
</style>
