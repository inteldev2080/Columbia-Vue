<template>
    <div class="z-10 w-full h-full fixed left-0 top-0 flex items-center justify-center bg-background transition-all" :class="isShow ? 'opacity-100 visible' : 'opacity-0 invisible' ">
        <div class="w-[550px] flex flex-col rounded-xl bg-white">
            <div class="w-full flex flex-col relative">
                <button class="absolute right-6 top-8" v-on:click="onClose">
                    <img class="w-[34px] h-[34px]" src="../../../assets/images/b-close.png" />
                </button>
                <div class="w-full flex justify-center py-8">
                    <img class="w-[220px]" alt="logo" src="../../../assets/logo-t.png" />
                </div>
                <div class="w-full flex justify-start mb-2">
                    <div class="w-[90%] h-[6px] bg-primary"></div>
                </div>
                <div class="w-full flex justify-end mb-2">
                    <div class="w-[90%] h-[6px] bg-[#00A8FF]"></div>
                </div>
            </div>
            <div class="w-full p-5">
                <div class="w-full max-h-[400px] overflow-y-auto pr-3 scrollbar-w-[8px] scroll-smooth scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent scrollbar-corner-transparent scrollbar-thumb-rounded-full scrollbar-track-p-2">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { defineComponent } from 'vue';
export default defineComponent({
    name: 'SystemModal',
    props: {
        isShow: {
            type: Boolean,
            default: false,
        },
        onClose: {
            type: Function,
            // default: 
        }
    }
})

</script>