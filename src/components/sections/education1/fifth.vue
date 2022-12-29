<template>
    <div class="w-full flex flex-col relative py-10 overflow-hidden">
        <img class="w-[104px] absolute -right-[52px] top-10 -z-10" alt="circle"
            src="../../../assets/images/circle-fill.png" />

        <div class="container flex flex-col items-center">
            <div class="w-full flex items-center justify-between">
                <h1 class="text-[42px] text-primary font-extrabold text-left">Docentes de la carrera</h1>
                <div class="flex items-center py-10">
                    <button class="mr-4 p-3 bg-primary rounded-xl hover:bg-secondary">
                        <img class="min-w-[24px] aspecto[1/1]" alt="left" src="../../../assets/images/arrow_back.png" />
                    </button>
                    <button class="p-3 bg-primary rounded-xl hover:bg-secondary">
                        <img class="min-w-[24px] aspecto[1/1]" alt="right"
                            src="../../../assets/images/arrow_next.png" />
                    </button>
                </div>
            </div>
            <div class="w-full flex items-center">

                <Carousel ref="carouselRef" :settings="settings" :transition="500" :wrap-around="true">
                    <slide v-for="slide in 3" :key="slide">
                        <div class="w-full flex items-center p-8 bg-[#F8F9FA] rounded-3xl">
                            <div class="w-[50%]">
                                <img class="aspecto-[2220/283] w-full" alt="chef"
                                    src="../../../assets/images/teacher1.png" />
                            </div>
                            <div class="w-[50%] flex flex-col justify-center p-4">
                                <h4 class="text-primary font-extrabold text-xl mb-4">DIETER TAURER</h4>
                                <p class="text-text mb-4">Especialista en cocina italiana y francesa. Consultor
                                    gastronómico.
                                </p>
                                <img class="w-[40px] h-[40px]" alt="chef" src="../../../assets/images/linkedin.png" />
                            </div>
                        </div>
                    </slide>
                </Carousel>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

export default defineComponent({
    name: 'EducationForthSection',
    components: {
        Carousel,
        Slide,
    },
    data: () => ({
        // carousel settings
        settings: {
            itemsToShow: 2,
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

    .carousel__prev,
    .carousel__next {
        box-sizing: content-box;
        color: color;
        border: 5px solid white;
    }
}
</style>