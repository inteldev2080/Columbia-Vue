<template>
    <div class="w-full flex justify-around overflow-x-hidden overflow-y-visible relative">
        <img class="w-[228px] h-[228px] absolute -left-[114px] -top-[114px] z-100"
            src="../../../assets/images/circle.png" alt="circle" />

        <div class="container flex justify-between items-center py-20">
            <div class="flex flex-col items-center ">
                <div class="flex items-stretch">
                    <div class="w-1/2 flex flex-col p-8 relative">
                        <h3 class="text-text font-extrabold text-[64px]">1.</h3>
                        <div class="flex items-center mb-4">
                            <img class="w-[34px] mr-2" alt="star" src="../../../assets/images/b-world.png" />
                            <h5 class="text-sm font-semibold uppercase">pasantías internacionales</h5>
                        </div>
                        <p class="font-light text-[#69696B]">Viajes internacionales de estudio,visitas y prácticas en
                            los mejoresresorts y hoteles cinco estrellas.</p>

                        <div class="bg-white w-[80px] h-[40px] absolute -right-[40px] -bottom-[20px]"></div>
                    </div>
                    <div class="w-1/2 flex flex-col p-8">
                        <h3 class="text-text font-extrabold text-[64px]">2.</h3>
                        <div class="flex items-center mb-4">
                            <img class="w-[34px] mr-2" alt="trank" src="../../../assets/images/blue-trank.png" />
                            <h5 class="text-sm font-semibold uppercase">convenios</h5>
                        </div>
                        <p class="font-light text-[#69696B]">Oportunidades laborales y conveniosen nuestra Área de
                            Columbia Jobs.</p>
                    </div>
                    <div class="w-1/2 flex flex-col p-8">
                        <h3 class="text-text font-extrabold text-[64px]">3.</h3>
                        <div class="flex items-center mb-4">
                            <img class="w-[34px] mr-2" alt="flag" src="../../../assets/images/b-certific.png" />
                            <h5 class="text-sm font-semibold uppercase">certificación por competencias</h5>
                        </div>
                        <p class="font-light text-[#69696B]">Recibe una certificación porcada módulo terminado.</p>
                    </div>
                </div>
                <div class="flex items-stretch">
                    <div class="w-1/2 flex flex-col p-8">
                        <h3 class="text-text font-extrabold text-[64px]">4.</h3>
                        <div class="flex items-center mb-4">
                            <img class="w-[34px] mr-2" alt="book" src="../../../assets/images/b-bookmark.png" />
                            <h5 class="text-sm font-semibold uppercase">formación práctica vivencial</h5>
                        </div>
                        <p class="font-light text-[#69696B]">Visitas guiadas a reconocidascadenas hoteleras desde
                            elprimer ciclo.</p>
                    </div>
                    <div class="w-1/2 flex flex-col p-8">
                        <h3 class="text-text font-extrabold text-[64px]">5.</h3>
                        <div class="flex items-center mb-4">
                            <img class="w-[34px] mr-2" alt="book" src="../../../assets/images/blue-star.png" />
                            <h5 class="text-sm font-semibold uppercase">módulos modernos</h5>
                        </div>
                        <p class="font-light text-[#69696B]">Modernos módulos implementadoscon todo lo necesario para
                            quedesarrolles tu potencial.</p>
                    </div>
                    <div class="w-1/2 flex flex-col p-8">
                        <h3 class="text-text font-extrabold text-[64px]">6.</h3>
                        <div class="flex items-center mb-4">
                            <img class="w-[34px] mr-2" alt="book" src="../../../assets/images/b-global.png" />
                            <h5 class="text-sm font-semibold uppercase">inglés especializado</h5>
                        </div>
                        <p class="font-light text-[#69696B]">Reforzamos tus habilidades conel idioma inglés enclases
                            prácticas vivenciales.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'EducationForthSection'
})

</script>