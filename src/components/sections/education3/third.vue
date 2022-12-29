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
                            <h5 class="text-sm font-semibold uppercase">fORMACIÓN CON LOS MEJORES CHEF</h5>
                        </div>
                        <p class="font-light text-[#69696B]">Formación profesional con destacados y reconocidos chefs.
                        </p>

                        <div class="bg-white w-[80px] h-[40px] absolute -right-[40px] -bottom-[20px]"></div>
                    </div>
                    <div class="w-1/2 flex flex-col p-8">
                        <h3 class="text-text font-extrabold text-[64px]">2.</h3>
                        <div class="flex items-center mb-4">
                            <img class="w-[34px] mr-2" alt="trank" src="../../../assets/images/b-trending-up.png" />
                            <h5 class="text-sm font-semibold uppercase">DESARROLLA TU CREATIVIDAD</h5>
                        </div>
                        <p class="font-light text-[#69696B]">Elabora cócteles old school, coctelería contemporánea y
                            coctelería evolutiva.</p>
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
                        <p class="font-light text-[#69696B]">Oportunidades laborales yconvenios en nuestra Área
                            deColumbia Jobs.</p>
                    </div>
                    <div class="w-1/2 flex flex-col p-8">
                        <h3 class="text-text font-extrabold text-[64px]">5.</h3>
                        <div class="flex items-center mb-4">
                            <img class="w-[34px] mr-2" alt="book" src="../../../assets/images/blue-star.png" />
                            <h5 class="text-sm font-semibold uppercase">módulos modernos estilo bar inglés</h5>
                        </div>
                        <p class="font-light text-[#69696B]">Moderno módulo de bar implementado con todo lo necesario
                            para que desarrolles tu potencial.</p>
                    </div>
                    <div class="w-1/2 flex flex-col p-8">
                        <h3 class="text-text font-extrabold text-[64px]">6.</h3>
                        <div class="flex items-center mb-4">
                            <img class="w-[34px] mr-2" alt="book" src="../../../assets/images/blue-trank.png" />
                            <h5 class="text-sm font-semibold uppercase">Campo de trabajo</h5>
                        </div>
                        <p class="font-light text-[#69696B]">Bares, hoteles, restaurantes, catering, discotecas, clubs, resorts, cruceros y/o tu propio negocio.</p>
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