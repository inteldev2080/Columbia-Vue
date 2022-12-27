<template>
    <div class="w-full flex justify-around overflow-hidden relative">
        <img class="w-[320px] h-[320px] absolute -right-[160px] -bottom-[160px]" src="../../../assets/images/circle-fill.png" alt="circle" />

        <div class="container flex justify-between items-center py-20">
            <div class="w-[40%] flex items-center justify-start">
                <h3 class="w-[400px] text-5xl leading-snug text-primary font-extrabold relative">
                    Beneficios de ser parte de Columbia
                    <img class="w-[96px] absolute left-0 -top-[118px]" alt="circle" src="../../../assets/images/circle.png" />
                </h3>
            </div>
            <div class="w-[60%] flex flex-col items-center ">
                <div class="flex items-stretch">
                    <div class="w-1/2 flex flex-col p-8 border-r border-b border-primary relative">
                        <h3 class="text-text font-extrabold text-[64px]">1.</h3>
                        <div class="flex items-center mb-4">
                            <img class="w-[34px] mr-2" alt="star" src="../../../assets/images/blue-star.png" />
                            <h5 class="text-lg font-semibold">PRESTIGIO</h5>
                        </div>
                        <p class="font-light text-[#69696B]">Somos una institución educativa que ofrece educación de calidad en la industria de los viajes, el turismo, la hotelería, la alta cocina, los idiomas y las tecnologías.</p>

                        <div class="bg-white w-[80px] h-[40px] absolute -right-[40px] -bottom-[20px]"></div>
                    </div>
                    <div class="w-1/2 flex flex-col p-8 border-l border-b border-primary">
                        <h3 class="text-text font-extrabold text-[64px]">2.</h3>
                        <div class="flex items-center mb-4">
                            <img class="w-[34px] mr-2" alt="trank" src="../../../assets/images/blue-trank.png" />
                            <h5 class="text-lg font-semibold">INSTITUTO INCENCIADO</h5>
                        </div>
                        <p class="font-light text-[#69696B]">Reconocidos con el licenciamiento Institucional otorgado por el MINEDU, al haber cumplido con los requisitos establecidos en la ley N° 30512.</p>
                    </div>
                </div>
                <div class="flex items-stretch">
                    <div class="w-1/2 flex flex-col p-8 border-r border-t border-primary">
                        <h3 class="text-text font-extrabold text-[64px]">3.</h3>
                        <div class="flex items-center mb-4">
                            <img class="w-[34px] mr-2" alt="flag" src="../../../assets/images/blue-flag.png" />
                            <h5 class="text-lg font-semibold">INFRAESTRUCTURA</h5>
                        </div>
                        <p class="font-light text-[#69696B]">Nuestros alumnos podrán tener experiencias vivenciales en nuestros módulos de avión, restaurante, housekeeping, bar, y cocinas.</p>
                    </div>
                    <div class="w-1/2 flex flex-col p-8 border-l border-t border-primary">
                        <h3 class="text-text font-extrabold text-[64px]">4.</h3>
                        <div class="flex items-center mb-4">
                            <img class="w-[34px] mr-2" alt="book" src="../../../assets/images/book.png" />
                            <h5 class="text-lg font-semibold">PROGRAMAS</h5>
                        </div>
                        <p class="font-light text-[#69696B]">Realizamos viajes nacionales e internacionales que fortalecen el conocimiento práctico de nuestros estudiantes</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HomeForthSection'
})

</script>