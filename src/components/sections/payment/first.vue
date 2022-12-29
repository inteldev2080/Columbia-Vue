<template>
    <div class="w-full flex flex-col">
        <div class="w-full relative flex items-center">
            <img class="w-full aspect-[4/1]" alt="bg" src="../../../assets/images/banner4.png" />
            <div class="w-full h-full flex flex-col justify-center absolute left-0 top-0 bg-[#00000044]">
                <h1 class="flex items-center justify-center text-white text-6xl font-extrabold">
                    Matrícula en línea</h1>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PaymentFirstSection'
})

</script>