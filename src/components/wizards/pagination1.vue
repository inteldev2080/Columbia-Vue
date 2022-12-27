<template>
    <div class="flex justify-center">
        <div class="rounded-full h-[16px] w-[16px]" :class=" current == 1 ? 'bg-primary w-[54px]' : 'bg-[#E9ECEF]' "></div>
        <div class="rounded-full h-[16px] w-[16px] ml-2" :class=" current == 2 ? 'bg-primary w-[54px]' : 'bg-[#E9ECEF]' "></div>
        <div class="rounded-full h-[16px] w-[16px] ml-2" :class=" current == 3 ? 'bg-primary w-[54px]' : 'bg-[#E9ECEF]' "></div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Pagination1',
    props: {
        current: {
            type: Number, 
            default: 1
        }
    }
})

</script>