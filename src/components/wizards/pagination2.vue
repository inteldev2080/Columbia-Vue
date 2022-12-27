<template>
    <div class="flex justify-center items-end">
        <span class="mr-4 text-black text-2xl font-semibold leading-4">01</span>
        <div class="h-[4px] w-[16px]" :class=" current == 1 ? 'bg-primary' : 'bg-[#99C9FF]' "></div>
        <div class="h-[4px] w-[16px]" :class=" current == 2 ? 'bg-primary' : 'bg-[#99C9FF]' "></div>
        <div class="h-[4px] w-[16px]" :class=" current == 3 ? 'bg-primary' : 'bg-[#99C9FF]' "></div>
        <div class="h-[4px] w-[16px]" :class=" current == 4 ? 'bg-primary' : 'bg-[#99C9FF]' "></div>
        <span class="ml-4 text-black text-2xl font-semibold leading-4">04</span>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Pagination2',
    props: {
        current: {
            type: Number, 
            default: 1
        }
    }
})

</script>