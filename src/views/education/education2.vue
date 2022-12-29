<template>
    <div>
        <Navbar />

        <div class="w-full">
            <EducationFirstSection />
            <EducationSecondSection />
            <EducationThirdSection />
            <EducationForthSection />
            <EducationFifthSection />
        </div>

        <Footer />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '../../components/layers/Navbar.vue';
import Footer from '../../components/layers/Footer.vue';

import EducationFirstSection from "../../components/sections/education2/first.vue";
import EducationSecondSection from "../../components/sections/education2/second.vue";
import EducationThirdSection from "../../components/sections/education2/third.vue";
import EducationForthSection from "../../components/sections/education2/forth.vue";
import EducationFifthSection from "../../components/sections/education2/fifth.vue";

export default defineComponent({
    name: 'Education2Page',
    components: { Navbar, Footer, 
        EducationFirstSection, 
        EducationSecondSection, 
        EducationThirdSection, 
        EducationForthSection, 
        EducationFifthSection, 
    },
})
</script>