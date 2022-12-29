<template>
    <div class="w-full flex flex-col">
        <div class="container relative flex flex-col items-center py-20">
            <div class="w-full h-full flex flex-col items-start">
                <h1 class="w-[600px] flex items-center justify-center text-primary text-4xl font-extrabold mb-4">
                    Convenios y alianzas estratégicas</h1>

                <div class="w-full flex flex-col">
                    <div class="w-full flex items-center justify-between">
                        <a v-for="item in 4" class="w-[24%] block px-4 py-6">
                            <img class="w-full aspect-[256/130]" alt="convios"
                                :src="'src/assets/images/agreement/agreement' + item + '.png'" />
                        </a>
                    </div>
                    <div class="w-full flex items-center justify-between">
                        <a v-for="item in 4" class="w-[24%] block px-4 py-6">
                            <img class="w-full aspect-[256/130]" alt="convios"
                                :src="'src/assets/images/agreement/agreement' + (item + 4) + '.png'" />
                        </a>
                    </div>
                    <div class="w-full flex items-center justify-between">
                        <a v-for="item in 4" class="w-[24%] block px-4 py-6">
                            <img class="w-full aspect-[256/130]" alt="convios"
                                :src="'src/assets/images/agreement/agreement' + (item + 8) + '.png'" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="w-full h-full flex flex-col items-start">
                <h1 class="flex items-center justify-center text-primary text-4xl font-extrabold my-6">
                    Convenios académicos</h1>

                <div class="w-full flex flex-col">
                    <div class="w-full flex items-center justify-between">
                        <a v-for="item in 4" class="w-[24%] block px-4 py-6">
                            <img class="w-full aspect-[256/130]" alt="convios"
                                :src="'src/assets/images/acedemic/acedemic' + item + '.png'" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PartnerSecondSection'
})

</script>