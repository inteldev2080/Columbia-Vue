<template>
    <div>
        <Navbar />

        <div class="w-full">
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <ForthSection />
        </div>

        <Footer />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '../../components/layers/Navbar.vue';
import Footer from '../../components/layers/Footer.vue';

import FirstSection from "../../components/sections/home/first.vue";
import SecondSection from "../../components/sections/home/second.vue";
import ThirdSection from "../../components/sections/home/third.vue";
import ForthSection from "../../components/sections/home/forth.vue";

export default defineComponent({
    name: 'HomePage',
    components: { Navbar, Footer, FirstSection, SecondSection, ThirdSection, ForthSection },
})
</script>