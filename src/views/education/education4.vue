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

import EducationFirstSection from "../../components/sections/education4/first.vue";
import EducationSecondSection from "../../components/sections/education4/second.vue";
import EducationThirdSection from "../../components/sections/education4/third.vue";
import EducationForthSection from "../../components/sections/education4/forth.vue";
import EducationFifthSection from "../../components/sections/education4/fifth.vue";

export default defineComponent({
    name: 'Education4Page',
    components: { Navbar, Footer, 
        EducationFirstSection, 
        EducationSecondSection, 
        EducationThirdSection, 
        EducationForthSection, 
        EducationFifthSection, 
    },
})
</script>