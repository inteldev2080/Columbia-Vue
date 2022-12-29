<template>
    <div class="w-full flex justify-around overflow-hidden relative pt-10 py-20 bg-[#F8F9FA]">
        <img class="w-[226px] absolute top-10 -right-[113px]" alt="circle" src="../../../assets/images/circle.png" />
        <img class="w-[112px] absolute left-10 bottom-20" alt="circle" src="../../../assets/images/circle.png" />

        <div class="container flex flex-col justify-between items-center">
            <div class="flex items-center justify-around">
                <h3 class="text-4xl leading-snug text-primary font-extrabold mb-6">¿Qué dicen nuestros alumnos?
                </h3>
            </div>
            <div class="w-full flex items-end justify-between">
                <div class="px-6">
                    <button class="p-3 my-28 bg-primary rounded-xl hover:bg-secondary" v-on:click="backHandle">
                        <img class="min-w-[24px] aspecto[1/1]" alt="left" src="../../../assets/images/arrow_back.png" />
                    </button>
                </div>
                <div class="w-[calc(100%_-_200px)]">
                    <Carousel ref="carouselRef" :settings="settings" :transition="500" :wrap-around="true">
                        <slide v-for="slide in 3" :key="slide">
                            <div class="flex flex-col w-full overflow-hidden rounded-xl pt-[70px] relative">
                                <img class="w-[130px] aspect-[1/1] rounded-full absolute left-[calc(50%_-_65px)] top-[5px]"
                                    alt="card" src="../../../assets/images/card1.png" />
                                <div class="flex flex-col items-center p-4 rounded-[40px] bg-primary pt-[85px]">
                                    <p class="w-[400px] text-white text-lg font-medium text-center mb-8">Columbia me
                                        brindó las
                                        herramientas para poder
                                        formarme y trabajar en las mejores cadenas</p>
                                    <button
                                        class="bg-white font-semibold text-primary mb-6 px-6 py-2 flex items-center rounded-full hover:bg-[#a7d4fffb]">
                                        ALEXANDER ROMERO
                                    </button>
                                    <p class="text-white text-sm font-light mb-2 text-center">BTH HOTEL, Egresado de
                                        Administración en
                                        Servicios de Hostelería y Restaurantes</p>
                                </div>
                            </div>
                        </slide>
                    </Carousel>
                </div>
                <div class="px-6">
                    <button class="p-3 my-28 bg-primary rounded-xl hover:bg-secondary" v-on:click="nextHandle">
                        <img class="min-w-[24px] aspecto[1/1]" alt="right"
                            src="../../../assets/images/arrow_next.png" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { defineComponent, ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
let carouselRef;
export default defineComponent({
    name: 'EducationLastSection',
    components: {
        Carousel,
        Slide,
    },
    data: () => ({
        // carousel settings
        settings: {
            itemsToShow: 1,
        },
    }),
    methods: {
        backHandle: function () {
            const carousel = this.$refs.carouselRef;
            carousel.prev();
        },
        nextHandle: function () {
            const carousel = this.$refs.carouselRef;
            carousel.next();
        },
    }
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

    .carousel__prev,
    .carousel__next {
        box-sizing: content-box;
        color: color;
        border: 5px solid white;
    }
}
</style>