<template>
    <div>
        <Navbar />

        <div class="w-full">
            <PartnerFirstSection />
            <PartnerSecondSection />
        </div>

        <Footer />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '../../components/layers/Navbar.vue';
import Footer from '../../components/layers/Footer.vue';

import PartnerFirstSection from "../../components/sections/partner/first.vue";
import PartnerSecondSection from "../../components/sections/partner/second.vue";

export default defineComponent({
    name: 'PartnerPage',
    components: { Navbar, Footer, 
        PartnerFirstSection, 
        PartnerSecondSection, 
    },
})
</script>