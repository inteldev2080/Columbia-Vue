<template>
    <div class="w-full flex justify-around overflow-hidden relative bg-white">
        <div class="container flex flex-col justify-between items-center py-20">
            <img class="w-[182px] absolute -right-[91px] bottom-0" alt="circle"
                src="../../../assets/images/circle.png" />
            <div class="w-full flex items-center justify-between pb-10">
                <h3 class="w-[420px] text-5xl leading-snug text-primary font-extrabold">Beneficios de Columbia
                </h3>
                <div class="border border-primary rounded-full overflow-hidden">
                    <button class="text-base font-semibold px-4 py-2"
                        :class="isColumbiaStudent ? 'bg-primary text-white' : 'bg-white text-primary'"
                        v-on:click="toggleCT(true)">BENEFICIOS DE COLUMBIA</button>
                    <button class="text-base font-semibold px-4 py-2"
                        :class="!isColumbiaStudent ? 'bg-primary text-white' : 'bg-white text-primary'"
                        v-on:click="toggleCT(false)">BENEFICIOS DEL ALUMNO</button>
                </div>
            </div>
            <div class="w-full flex items-center justify-between">
                <div class="w-full" v-if="isColumbiaStudent">
                    <Carousel :settings="settings" :transition="500" :autoplay="3000" :wrap-around="true">
                        <Slide :key="1">
                            <div class="w-full flex">
                                <div class="w-[40%]">
                                    <div class="w-full relative">
                                        <img class="w-full aspect-[5/4]" alt="tex1"
                                            src="../../../assets/images/benefit1.png" />
                                        <span
                                            class="absolute left-4 bottom-4 text-white font-semibold text-7xl">01</span>
                                    </div>

                                    <div class="w-full flex justify-start mt-8">
                                        <Pagination2 :current=(1) :total=(3) />
                                    </div>
                                </div>
                                <div class="w-[60%] flex flex-col justify-center items-start px-8">
                                    <div class="flex justify-start items-center mb-4">
                                        <img class="w-[60px] h-[60px] mr-2" alt="Prestigio"
                                            src="../../../assets/images/b-star.png" />
                                        <h3 class="text-4xl text-primary font-extrabold text-left">Mitchell Collantes
                                        </h3>
                                    </div>
                                    <p class="tex-text text-xl mb-4 text-left">Somos una institución educativa que
                                        ofrece educación de calidad en la industria de los viajes, el turismo, la
                                        hotelería, la alta cocina, los idiomas y las tecnologías. Estamos seguros de que
                                        nuestra experiencia y tu talento se complementarán y harán de ti un profesional
                                        destacado y exitoso.</p>
                                </div>
                            </div>
                        </Slide>
                        <Slide :key="2">
                            <div class="w-full flex">
                                <div class="w-[40%]">
                                    <div class="w-full relative">
                                        <img class="w-full aspect-[5/4]" alt="tex1"
                                            src="../../../assets/images/benefit2.png" />
                                        <span
                                            class="absolute left-4 bottom-4 text-white font-semibold text-7xl">02</span>
                                    </div>

                                    <div class="w-full flex justify-start mt-8">
                                        <Pagination2 :current=(2) :total=(3) />
                                    </div>
                                </div>
                                <div class="w-[60%] flex flex-col justify-center items-start px-8">
                                    <div class="flex justify-start items-center mb-4">
                                        <img class="w-[60px] h-[60px] mr-2" alt="Prestigio"
                                            src="../../../assets/images/b-star.png" />
                                        <h3 class="text-4xl text-primary font-extrabold text-left">Instituto licenciado
                                        </h3>
                                    </div>
                                    <p class="tex-text text-xl mb-4 text-left">Reconocidos con el Licenciamiento
                                        Institucional otorgado por el MINEDU, al haber cumplido con los requisitos
                                        establecidos en la ley N° 30512..</p>
                                    <img class="w-[256px]" src="../../../assets/images/instituto-li.png"
                                        alt="instituto-li" />
                                </div>
                            </div>
                        </Slide>
                        <Slide :key="3">
                            <div class="w-full flex">
                                <div class="w-[40%]">
                                    <div class="w-full relative">
                                        <img class="w-full aspect-[5/4]" alt="benefit3"
                                            src="../../../assets/images/benefit3.png" />
                                        <span
                                            class="absolute left-4 bottom-4 text-white font-semibold text-7xl">03</span>
                                    </div>

                                    <div class="w-full flex justify-start mt-8">
                                        <Pagination2 :current=(3) :total=(3) />
                                    </div>
                                </div>
                                <div class="w-[60%] flex flex-col justify-center items-start px-8">
                                    <div class="flex justify-start items-center mb-4">
                                        <img class="w-[60px] h-[60px] mr-2" alt="Prestigio"
                                            src="../../../assets/images/b-shield.png" />
                                        <h3 class="text-4xl text-primary font-extrabold text-left">Formación integral
                                        </h3>
                                    </div>
                                    <p class="tex-text text-xl mb-4 text-left">Visitas a diferentes cadenas de hoteles,
                                        aerolíneas, resorts, etc. para tener un aprendizaje más directo y vivencial.</p>
                                </div>
                            </div>
                        </Slide>
                    </Carousel>
                </div>
                <div class="w-full" v-else>
                    <Carousel :settings="settings" :transition="500" :autoplay="3000" :wrap-around="true">
                        <Slide :key="1">
                            <div class="w-full flex">
                                <div class="w-[40%]">
                                    <div class="w-full relative">
                                        <img class="w-full aspect-[5/4]" alt="bg3"
                                            src="../../../assets/images/bg3.png" />
                                        <span
                                            class="absolute left-4 bottom-4 text-white font-semibold text-7xl">01</span>
                                    </div>

                                    <div class="w-full flex justify-start mt-8">
                                        <Pagination2 :current=(1) :total=(3) />
                                    </div>
                                </div>
                                <div class="w-[60%] flex flex-col justify-center items-start px-8">
                                    <div class="flex justify-start items-center mb-4">
                                        <img class="w-[60px] h-[60px] mr-2" alt="Prestigio"
                                            src="../../../assets/images/b-trending-up.png" />
                                        <h3 class="text-4xl text-primary font-extrabold text-left">Aprendizaje vivencial
                                        </h3>
                                    </div>
                                    <p class="tex-text text-xl mb-4 text-left">Realizamos viajes nacionales e
                                        internacionales que fortalecen el conocimiento práctico de nuestros estudiantes,
                                        con la finalidad de otorgarles una mirada mucho más amplia del manejo de los
                                        servicios turísticos y que identifiquen lo que el turista busca para vivir una
                                        experiencia de viaje mucho más completa.</p>
                                </div>
                            </div>
                        </Slide>
                        <Slide :key="2">
                            <div class="w-full flex">
                                <div class="w-[40%]">
                                    <div class="w-full relative">
                                        <img class="w-full aspect-[5/4]" alt="tex1"
                                            src="../../../assets/images/bg13.png" />
                                        <span
                                            class="absolute left-4 bottom-4 text-white font-semibold text-7xl">02</span>
                                    </div>

                                    <div class="w-full flex justify-start mt-8">
                                        <Pagination2 :current=(2) :total=(3) />
                                    </div>
                                </div>
                                <div class="w-[60%] flex flex-col justify-center items-start px-8">
                                    <div class="flex justify-start items-center mb-4">
                                        <img class="w-[60px] h-[60px] mr-2" alt="Prestigio"
                                            src="../../../assets/images/b-briefcase.png" />
                                        <h3 class="text-4xl text-primary font-extrabold text-left">Convenio laboral
                                        </h3>
                                    </div>
                                    <p class="tex-text text-xl mb-4 text-left">Gracias a nuestros convenios de
                                        complementación académica, tienes la oportunidad de vivir una experiencia
                                        estudiantil en la mejor universidad de Cancún y tercera mejor universidad a
                                        nivel México.</p>
                                    <img class="w-[256px]" src="../../../assets/images/convenio-lab.png"
                                        alt="convenio-lab" />
                                </div>
                            </div>
                        </Slide>
                        <Slide :key="3">
                            <div class="w-full flex">
                                <div class="w-[40%]">
                                    <div class="w-full relative">
                                        <img class="w-full aspect-[5/4]" alt="benefit1"
                                            src="../../../assets/images/benefit1.png" />
                                        <span
                                            class="absolute left-4 bottom-4 text-white font-semibold text-7xl">03</span>
                                    </div>

                                    <div class="w-full flex justify-start mt-8">
                                        <Pagination2 :current=(3) :total=(3) />
                                    </div>
                                </div>
                                <div class="w-[60%] flex flex-col justify-center items-start px-8">
                                    <div class="flex justify-start items-center mb-4">
                                        <img class="w-[60px] h-[60px] mr-2" alt="Prestigio"
                                            src="../../../assets/images/b-person.png" />
                                        <h3 class="text-4xl text-primary font-extrabold text-left">Docentes
                                            especializados
                                        </h3>
                                    </div>
                                    <p class="tex-text text-xl mb-4 text-left">Visitas a diferentes cadenas de hoteles,
                                        aerolíneas, resorts, etc. para tener un aprendizaje más directo y vivencial.</p>
                                </div>
                            </div>
                        </Slide>
                    </Carousel>
                </div>
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
    name: 'SobreSecondSection',
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
        isColumbiaStudent: true
    }),
    methods: {
        toggleCT: function (value) {
            this.isColumbiaStudent = value;
        }
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
}
</style>