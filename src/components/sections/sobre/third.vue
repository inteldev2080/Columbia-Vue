<template>
    <div class="w-full flex justify-around overflow-hidden bg-[#F8F9FA]">
        <div class="container flex flex-col justify-between items-center relative">
            <img class="w-[216px] absolute -top-[108px] left-0" alt="circle" src="../../../assets/images/circle.png" />
            <div class="w-full flex items-center justify-between pt-10">
                <Carousel :settings="settings" :transition="500" :autoplay="3000" :wrap-around="true">
                    <Slide :key="1">
                        <div class="w-full flex">
                            <div class="w-[60%] pl-10 order-2">
                                <div class="w-full relative">
                                    <img class="w-full aspect-[5/4]" alt="tex1"
                                        src="../../../assets/images/benefit4.png" />
                                    <span class="absolute right-4 bottom-4 text-white font-semibold text-7xl">01</span>
                                </div>

                                <div class="w-full flex justify-end mt-8 pb-20">
                                    <Pagination2 :current=(1) :total=(3) />
                                </div>
                            </div>
                            <div class="w-[40%] flex flex-col justify-center items-end order-1">
                                <div class="w-full flex justify-start items-center mb-8">
                                    <h3 class="text-5xl text-primary font-extrabold text-left">Nuestras sedes
                                    </h3>
                                </div>
                                <div class="w-full flex justify-start items-center mb-4">
                                    <img class="w-[35px] h-[35px] mr-2" alt="Prestigio"
                                        src="../../../assets/images/pin.png" />
                                    <h5 class="text-2xl text-[#33B9FF] font-extrabold text-left">San Isidro
                                    </h5>
                                </div>
                                <p class="w-full tex-text text-xl mb-4 text-left">Av. Javier Prado Este 515</p>
                                <div class="w-full flex justify-start items-center">
                                    <img class="w-[35px] h-[35px] mr-2" alt="Prestigio"
                                        src="../../../assets/images/Whatsapp.png" />
                                    <p class="text-lg text-text text-left">994605508</p>
                                </div>


                                <img class="w-[160px] absolute -bottom-[80px]" alt="circle"
                                    src="../../../assets/images/circle.png" />
                            </div>
                        </div>
                    </Slide>
                    <Slide :key="2">
                        <div class="w-full flex">
                            <div class="w-[60%] pl-10 order-2">
                                <div class="w-full relative">
                                    <img class="w-full aspect-[5/4]" alt="tex1"
                                        src="../../../assets/images/benefit5.png" />
                                    <span class="absolute right-4 bottom-4 text-white font-semibold text-7xl">02</span>
                                </div>

                                <div class="w-full flex justify-end mt-8 pb-10">
                                    <Pagination2 :current=(2) :total=(3) />
                                </div>
                            </div>
                            <div class="w-[40%] flex flex-col justify-center items-end order-1">
                                <div class="w-full flex justify-start items-center mb-8">
                                    <h3 class="text-5xl text-primary font-extrabold text-left">Nuestras sedes
                                    </h3>
                                </div>
                                <div class="w-full flex justify-start items-center mb-4">
                                    <img class="w-[35px] h-[35px] mr-2" alt="Prestigio"
                                        src="../../../assets/images/pin.png" />
                                    <h5 class="text-2xl text-[#33B9FF] font-extrabold text-left">Lince
                                    </h5>
                                </div>
                                <p class="w-full tex-text text-xl mb-4 text-left">Av. Paseo de la República 2232, Vía Expresa</p>
                                <div class="w-full flex justify-start items-center">
                                    <img class="w-[35px] h-[35px] mr-2" alt="Prestigio"
                                        src="../../../assets/images/Whatsapp.png" />
                                    <p class="text-lg text-text text-left mr-6">944462471</p>
                                    <img class="w-[35px] h-[35px] mr-2" alt="Prestigio"
                                        src="../../../assets/images/Whatsapp.png" />
                                    <p class="text-lg text-text text-left">943783858</p>
                                </div>


                                <img class="w-[160px] absolute -bottom-[80px]" alt="circle"
                                    src="../../../assets/images/circle.png" />
                            </div>
                        </div>
                    </Slide>
                    <Slide :key="3">
                        <div class="w-full flex">
                            <div class="w-[60%] pl-10 order-2">
                                <div class="w-full relative">
                                    <img class="w-full aspect-[5/4]" alt="tex1"
                                        src="../../../assets/images/benefit6.png" />
                                    <span class="absolute right-4 bottom-4 text-white font-semibold text-7xl">03</span>
                                </div>

                                <div class="w-full flex justify-end mt-8 pb-10">
                                    <Pagination2 :current=(3) :total=(3) />
                                </div>
                            </div>
                            <div class="w-[40%] flex flex-col justify-center items-end order-1">
                                <div class="w-full flex justify-start items-center mb-8">
                                    <h3 class="text-5xl text-primary font-extrabold text-left">Nuestras sedes
                                    </h3>
                                </div>
                                <div class="w-full flex justify-start items-center mb-4">
                                    <img class="w-[35px] h-[35px] mr-2" alt="Prestigio"
                                        src="../../../assets/images/pin.png" />
                                    <h5 class="text-2xl text-[#33B9FF] font-extrabold text-left">Los Olivos
                                    </h5>
                                </div>
                                <p class="w-full tex-text text-xl mb-4 text-left">Av. Angélica Gamarra 160 – 174</p>
                                <div class="w-full flex justify-start items-center">
                                    <img class="w-[35px] h-[35px] mr-2" alt="Prestigio"
                                        src="../../../assets/images/Whatsapp.png" />
                                    <p class="text-lg text-text text-left mr-6">948488581</p>
                                    <img class="w-[35px] h-[35px] mr-2" alt="Prestigio"
                                        src="../../../assets/images/Whatsapp.png" />
                                    <p class="text-lg text-text text-left">989177686</p>
                                </div>


                                <img class="w-[160px] absolute -bottom-[80px]" alt="circle"
                                    src="../../../assets/images/circle.png" />
                            </div>
                        </div>
                    </Slide>
                </Carousel>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import Pagination2 from '../../wizards/pagination2.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

export default defineComponent({
    name: 'SobreThirdSection',
    components: {
        Pagination2,
        Carousel,
        Slide,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'start',
        },
    }),
})

</script>


<style scoped lang="scss">
.carousel {
    @apply w-full;

    .carousel__slide {
        padding: 5px;
    }

    .carousel__viewport {
        perspective: 2000px;
    }

    .carousel__track {
        transform-style: preserve-3d;
    }

    .carousel__slide--sliding {
        transition: 0.5s;
    }

    .carousel__slide {
        opacity: 0.9;
        transform: rotateY(-20deg); // scale(0.9);
    }

    .carousel__slide--active~.carousel__slide {
        transform: rotateY(20deg); // scale(0.9);
    }

    .carousel__slide--prev {
        opacity: 1;
        transform: rotateY(-10deg); // scale(0.95);
    }

    .carousel__slide--next {
        opacity: 1;
        transform: rotateY(10deg); // scale(0.95);
    }

    .carousel__slide--active {
        opacity: 1;
        transform: rotateY(0); // scale(1.05);
    }
}
</style>