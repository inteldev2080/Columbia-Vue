<template>
    <div class="w-full flex flex-col relative py-20">
        <img class="w-[216px] absolute -left-[108px] top-20" alt="circle"
            src="../../../assets/images/circle.png" />

        <div class="container flex items-center">
            <div class="w-[25%] flex items-center justify-center">
                <h1 class="text-[50px] text-primary font-extrabold text-left border-b-[10px] border-primary">Galería</h1>
            </div>
            <div class="w-[75%]">
                <div class="w-full flex items-center justify-between mb-6">
                    <div class="w-[33%] mr-6">
                        <img class="aspect-[1/1] w-full" alt="image" src="../../../assets/images/gallery1.png" />
                    </div>
                    <div class="w-[33%] mr-6">
                        <img class="aspect-[1/1] w-full" alt="image" src="../../../assets/images/gallery2.png" />
                    </div>
                    <div class="w-[33%]">
                        <img class="aspect-[1/1] w-full" alt="image" src="../../../assets/images/gallery3.png" />
                    </div>
                </div>
                <div class="w-full flex items-center justify-between">
                    <div class="w-[33%] mr-6">
                        <img class="aspect-[1/1] w-full" alt="image" src="../../../assets/images/gallery4.png" />
                    </div>
                    <div class="w-[33%] mr-6">
                        <img class="aspect-[1/1] w-full" alt="image" src="../../../assets/images/gallery5.png" />
                    </div>
                    <div class="w-[33%]">
                        <img class="aspect-[1/1] w-full" alt="image" src="../../../assets/images/gallery6.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SobreFirstSection'
})

</script>