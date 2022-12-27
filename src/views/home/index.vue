<template>
    <div>
        <Navbar />

        <div class="home">
            <HelloWorld msg="Welcome to Your Vue3 Boilerplate" />
            <HelloWorld msg="Welcome to Your Vue3 Boilerplate" />
            <HelloWorld msg="Welcome to Your Vue3 Boilerplate" />
            <HelloWorld msg="Welcome to Your Vue3 Boilerplate" />
            <HelloWorld msg="Welcome to Your Vue3 Boilerplate" />
            <HelloWorld msg="Welcome to Your Vue3 Boilerplate" />
        </div>

        <Footer />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '../../components/HelloWorld.vue'
import Navbar from '../../components/sections/Navbar.vue';
import Footer from '../../components/sections/Footer.vue';

export default defineComponent({
    name: 'HomePage',
    components: { HelloWorld, Navbar, Footer },
})
</script>