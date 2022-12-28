<template>
    <div class="w-full flex justify-around overflow-hidden relative">
        <div class="container flex justify-between items-center py-20">
            <div class="flex items-center justify-around">
                <h3 class="w-[420px] text-5xl leading-snug text-primary font-extrabold">¡Tenemos lo mejor para ti!</h3>
                <img class="w-[226px] absolute -bottom-[113px]" alt="circle"
                    src="../../../assets/images/circle-fill.png" />
            </div>
            <div class="w-[calc(100%_-_450px)] flex items-center">
                <carousel :settings="settings" :breakpoints="breakpoints" :transition="500" :autoplay="3000"
                    :wrap-around="true">
                    <slide v-for="slide in 5" :key="slide">
                        <div class="flex flex-col w-full overflow-hidden rounded-xl shadow-card">
                            <img class="w-full aspect-[5/3]" alt="card" src="../../../assets/images/card1.png" />
                            <div class="p-4">
                                <p class="text-lg text-left text-primary font-semibold mb-2">Columbia Instituto</p>
                                <p class="text-text mb-2 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Quisque ut
                                    pellentesque, Quisque ut pellentesque</p>

                                <button
                                    class="bg-primary text-white mb-2 px-4 py-2 flex items-center rounded-full hover:bg-secondary">
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
                    </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>

import { defineComponent } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default defineComponent({
    name: 'HomeSecondSection',
    components: {
        Carousel,
        Slide,
    },
    data: () => ({
        // carousel settings
        settings: {
            itemsToShow: 2,
            snapAlign: 'start',
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            768: {
                itemsToShow: 1.5,
                snapAlign: 'start',
            },
            1440: {
                itemsToShow: 2,
                snapAlign: 'start',
            },
            1720: {
                itemsToShow: 3,
                snapAlign: 'start',
            },
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