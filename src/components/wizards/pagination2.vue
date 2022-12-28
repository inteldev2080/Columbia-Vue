<template>
    <div class="flex justify-center items-end">
        <span class="mr-4 text-black text-2xl font-semibold leading-4">01</span>
        <div v-for="item in total" class="h-[4px] w-[16px]" :class="current == item ? 'bg-primary' : 'bg-[#99C9FF]'">
        </div>
        <span class="ml-4 text-black text-2xl font-semibold leading-4">0{{ total }}</span>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Pagination2',
    props: {
        total: {
            type: Number,
            default: 4
        },
        current: {
            type: Number,
            default: 1
        }
    }
})

</script>