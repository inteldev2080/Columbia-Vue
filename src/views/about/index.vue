<template>
    <div>
        <Navbar />

        <div class="home">
            <HelloWorld msg="Welcome to Your Vue3 Boilerplate" />
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '../../components/HelloWorld.vue'
import Navbar from '../../components/sections/Navbar.vue';

export default defineComponent({
    name: 'AboutPage',
    components: { HelloWorld, Navbar },
})
</script>