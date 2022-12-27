<template>
    <div class="w-full flex">
        <div class="w-1/2 flex justify-center items-center relative border-t-[10px] border-primary">
            <img class="w-[160px] absolute -right-[80px]" alt="circle" src="../../../assets/images/circle.png" />
            <div class="flex flex-col items-start">
                <p class="flex items-center leading-4 text-[#FFC107]">
                    <img class="h-[20px] mr-2" alt="star" src="../../../assets/images/star.png" />
                    <span>ESPECIALIZACIÓN</span>
                </p>
                <h3 class="text-primary font-extrabold leading-snug text-[38px] my-4">Aviación Comercial</h3>
                <div class="flex flex-col">
                    <div class="flex items-center mb-4">
                        <div class="w-[25px]">
                            <img class="h-[20px] mr-2" alt="clock" src="../../../assets/images/clock.png" />
                        </div>
                        <span class="text-primary">Duración: </span>
                        <span class="text-text text-lg">2 años</span>
                    </div>
                    <div class="flex items-center mb-4">
                        <div class="w-[25px]">
                            <img class="h-[20px] mr-2" alt="flag" src="../../../assets/images/flag.png" />
                        </div>
                        <span class="text-primary">Inicio: </span>
                        <span class="text-text text-lg">12 de diciembre 2022</span>
                    </div>
                    <div class="flex items-center mb-4">
                        <div class="w-[25px]">
                            <img class="h-[20px] mr-2" alt="position" src="../../../assets/images/position.png" />
                        </div>
                        <span class="text-primary">Sedes: </span>
                        <span class="text-text text-lg">Lince y Los Olivos</span>
                    </div>
                </div>

                <button class="bg-primary text-white px-6 py-3 flex items-center rounded-full hover:bg-secondary">
                    Más información
                    <svg class="ml-2" width="17" height="14" viewBox="0 0 17 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M1.5 8H13.365L9.732 12.36C9.378 12.784 9.436 13.415 9.86 13.768C10.285 14.122 10.915 14.064 11.269 13.64L16.269 7.64C16.308 7.593 16.327 7.538 16.356 7.486C16.38 7.444 16.409 7.408 16.427 7.362C16.472 7.247 16.499 7.126 16.499 7.004C16.499 7.003 16.5 7.001 16.5 7C16.5 6.999 16.499 6.997 16.499 6.996C16.499 6.874 16.472 6.753 16.427 6.638C16.409 6.592 16.38 6.556 16.356 6.514C16.327 6.462 16.308 6.407 16.269 6.36L11.269 0.36C11.07 0.123 10.786 0 10.5 0C10.274 0 10.047 0.076 9.86 0.232C9.436 0.585 9.378 1.216 9.732 1.64L13.365 6H1.5C0.948 6 0.5 6.448 0.5 7C0.5 7.552 0.948 8 1.5 8Z"
                            fill="white" />
                    </svg>
                </button>

                <div class="w-full mt-10">
                    <Pagination1 :current=(1) />
                </div>
            </div>
        </div>
        <div class="w-1/2 relative overflow-hidden">
            <img class="w-full aspect-[4/3]" alt="image" src="../../../assets/images/bg1.png" />
            <img class="w-full h-full absolute left-5 bottom-5" alt="border" src="../../../assets/images/border.png" />
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import Pagination1 from '../../wizards/pagination1.vue'

export default defineComponent({
    name: 'HomeFirstSection',
    components: {
        Pagination1
    }
})

</script>