<template>
    <div class="w-full flex justify-around overflow-hidden bg-[#E6F1FF]">
        <div class="container flex flex-col justify-between items-center py-20">
            <div class="w-full flex items-center justify-between pb-10">
                <h3 class="w-[420px] text-5xl leading-11 text-primary font-extrabold">¡Somos tu mejor opción!
                </h3>
                <div class="border border-primary rounded-full overflow-hidden">
                    <button class="bg-primary text-white text-base font-semibold px-4 py-2">ALUMNOS EXITOSOS</button>
                    <button class="bg-white text-primary text-base font-semibold px-4 py-2">nuestros docentes</button>
                </div>
            </div>
            <div class="w-full flex items-center justify-between relative">
                <img class="w-[182px] absolute -right-[91px] bottom-0" alt="circle"
                    src="../../../assets/images/circle-fill.png" />
                <div class="w-[40%]">
                    <div class="w-full relative">
                        <img class="w-full aspect-[5/4]" alt="tex1" src="../../../assets/images/text1.png" />
                        <span class="absolute left-2 bottom-2 text-white font-semibold text-2xl">01</span>
                    </div>

                    <div class="w-full flex justify-start mt-8">
                        <Pagination2 :current=(1) />
                    </div>
                </div>
                <div class="w-[60%] flex flex-col justify-center items-start px-8">
                    <div class="flex justify-start items-end mb-4">
                        <h3 class="text-4xl text-text font-extrabold">Mitchell Collantes</h3>
                        <span class="mx-4 w-[50px] h-[6px] bg-primary"></span>
                        <p class="text-text text-xl">Tripulante de cabina</p>
                    </div>
                    <p class="tex-text text-xl mb-4">Terminé mi carrera e inicié en el mundo de la aviación. Hoy soy tripulante de
                        una prestigiosa aerolínea.</p>

                    <button class="bg-primary text-white px-4 py-2 flex items-center rounded-full hover:bg-secondary">
                        Más información
                        <svg class="ml-2" width="17" height="14" viewBox="0 0 17 14" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.5 8H13.365L9.732 12.36C9.378 12.784 9.436 13.415 9.86 13.768C10.285 14.122 10.915 14.064 11.269 13.64L16.269 7.64C16.308 7.593 16.327 7.538 16.356 7.486C16.38 7.444 16.409 7.408 16.427 7.362C16.472 7.247 16.499 7.126 16.499 7.004C16.499 7.003 16.5 7.001 16.5 7C16.5 6.999 16.499 6.997 16.499 6.996C16.499 6.874 16.472 6.753 16.427 6.638C16.409 6.592 16.38 6.556 16.356 6.514C16.327 6.462 16.308 6.407 16.269 6.36L11.269 0.36C11.07 0.123 10.786 0 10.5 0C10.274 0 10.047 0.076 9.86 0.232C9.436 0.585 9.378 1.216 9.732 1.64L13.365 6H1.5C0.948 6 0.5 6.448 0.5 7C0.5 7.552 0.948 8 1.5 8Z"
                                fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import Pagination2 from '../../wizards/pagination2.vue'

export default defineComponent({
    name: 'HomeThirdSection',
    components: {
        Pagination2
    }
})

</script>