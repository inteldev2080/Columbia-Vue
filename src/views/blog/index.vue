<template>
    <div>
        <Navbar />

        <div class="w-full">
            <BlogFirstSection />
            <BlogSecondSection />
        </div>

        <Footer />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '../../components/layers/Navbar.vue';
import Footer from '../../components/layers/Footer.vue';

import BlogFirstSection from "../../components/sections/blog/first.vue";
import BlogSecondSection from "../../components/sections/blog/second.vue";

export default defineComponent({
    name: 'BlogPage',
    components: { Navbar, Footer, 
        BlogFirstSection, 
        BlogSecondSection, 
    },
})
</script>