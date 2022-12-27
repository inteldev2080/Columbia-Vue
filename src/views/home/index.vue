<template>
    <div>
        <Navbar />

        <div class="w-full">
            <FirstSection />
        </div>

        <Footer />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '../../components/layers/Navbar.vue';
import Footer from '../../components/layers/Footer.vue';

import FirstSection from "../../components/sections/home/first.vue";

export default defineComponent({
    name: 'HomePage',
    components: { Navbar, Footer, FirstSection, },
})
</script>