<template>
    <div>
        <Navbar />

        <div class="w-full">
            <EducationFirstSection />
            <EducationSecondSection />
            <EducationThirdSection />
            <EducationForthSection />
            <EducationFifthSection />
            <EducationSixthSection />
        </div>

        <Footer />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '../../components/layers/Navbar.vue';
import Footer from '../../components/layers/Footer.vue';

import EducationFirstSection from "../../components/sections/education1/first.vue";
import EducationSecondSection from "../../components/sections/education1/second.vue";
import EducationThirdSection from "../../components/sections/education1/third.vue";
import EducationForthSection from "../../components/sections/education1/forth.vue";
import EducationFifthSection from "../../components/sections/education1/fifth.vue";
import EducationSixthSection from "../../components/sections/education1/sixth.vue";

export default defineComponent({
    name: 'Education1Page',
    components: { Navbar, Footer, 
        EducationFirstSection, 
        EducationSecondSection, 
        EducationThirdSection, 
        EducationForthSection, 
        EducationFifthSection, 
        EducationSixthSection
    },
})
</script>