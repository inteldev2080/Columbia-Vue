<template>
    <div>
        <Navbar />

        <div class="w-full">
            <SobreFirstSection />
            <SobreSecondSection />
            <SobreThirdSection />
            <SobreForthSection />
        </div>

        <Footer />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '../../components/layers/Navbar.vue';
import Footer from '../../components/layers/Footer.vue';

import SobreFirstSection from "../../components/sections/sobre/first.vue";
import SobreSecondSection from "../../components/sections/sobre/second.vue";
import SobreThirdSection from "../../components/sections/sobre/third.vue";
import SobreForthSection from "../../components/sections/sobre/forth.vue";

export default defineComponent({
    name: 'SobrePage',
    components: { Navbar, Footer, SobreFirstSection, SobreSecondSection, SobreThirdSection, SobreForthSection },
})
</script>