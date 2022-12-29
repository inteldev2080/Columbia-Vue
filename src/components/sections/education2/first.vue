<template>
    <div class="w-full flex flex-col">
        <div class="w-full relative flex items-center">
            <img class="w-full aspect-[4/1]" alt="bg" src="../../../assets/images/banner1.png" />
            <div class="w-full h-full flex flex-col justify-center absolute left-0 top-0 bg-[#00000044]">
                <h1 class="flex items-center justify-center text-white text-6xl font-extrabold">
                    Pastelería y Panadería</h1>
                <p class="flex items-center justify-center text-white mb-4">
                    Sede: San Isidro
                </p>
                <div class="flex justify-center">
                    <button class="flex items-center uppercase rounded-full mx-2 text-sm font-medium px-5 pr-3 py-2 bg-primary text-white">
                        matricularme
                        <img class="w-[20px] h-[20px] ml-2" alt="image" src="../../../assets/images/arrow_next.png" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'EducationFirstSection'
})

</script>