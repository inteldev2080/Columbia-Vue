<template>
    <div>
        <Navbar />

        <div class="w-full flex flex-col">
            <div class="w-full relative flex items-center">
                <img class="w-full aspect-[4/1]" alt="bg" src="../../assets/images/Internas.png" />
                <h1
                    class="w-full h-full flex items-center justify-center absolute left-0 top-0 text-white text-6xl font-extrabold bg-[#00000044]">
                    Columbia Instituto</h1>
            </div>
        </div>

        <div class="w-full overflow-hidden relative">
            <img class="w-[300px] h-[300px] absolute -right-[100px] -top-[100px]" alt="circle"
                src="../../assets/images/circle.png" />
            <img class="w-[228px] h-[228px] absolute -left-[114PX] -bottom-[114PX]" alt="circle"
                src="../../assets/images/circle.png" />

            <div class="container flex items-center justify-between py-16">
                <div class="w-[35%]">
                    <img class="w-full aspect-[5/4]" alt="bg" src="../../assets/images/bg3.png" />
                </div>
                <div class="w-[65%] pl-10">
                    <h3 class="text-4xl leading-snug text-primary font-extrabold">Sobre Columbia CETPRO</h3>
                    <p class="text-lg text-text">En Columbia te formamos con los conocimientos para adaptarte a los
                        cambios y destacar en el mundo de la Aviación Comercial. Nuestro plan curricular está enfocado
                        en aportar conocimientos técnicos, potenciar habilidades y desarrollar la vocación de servicio
                        de nuestros alumnos, de la mano de profesionales especializados y con gran experiencia en el
                        rubro. Ingresa a un mundo apasionante y lleno de emociones.</p>
                </div>
            </div>
        </div>

        <div class="w-full overflow-hidden bg-[#F8F9FA]">
            <div class="container flex items-center justify-between py-16 relative">
                <div class="w-[35%] order-2">
                    <img class="w-full aspect-[5/4]" alt="bg" src="../../assets/images/bg8.png" />
                </div>
                <div class="w-[65%] flex flex-col items-start pr-10 order-1">
                    <h3 class="text-4xl leading-snug text-primary font-extrabold mb-6">Aviación Comercial</h3>
                    <p class="text-lg text-text mb-4">La Aviación Comercial te permitirá disfrutar de una vida llena de
                        emociones y nuevas experiencias, ya sea como Tripulante de Cabina o Counter, tendrás una
                        formación profesional que te permitirá ingresar a las mejoresaerolíneas y hacer línea de carrera
                        como: Tripulante de cabina, Jefe de Tripulante de Cabina, Instructor de Servicio a bordo,
                        Counter, Manager de jornada, etc</p>
                    <div class="flex items-center mb-6">
                        <img class="w-[35px] mr-2" src="../../assets/images/calendar.png" alt="calendar" />

                        <span class="text-primary">Duración: </span>
                        <span class="text-text text-lg">3 años</span>
                    </div>
                    <button
                        class="bg-primary text-white px-6 py-3 flex items-center rounded-full mb-6 hover:bg-secondary">
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

        <Footer />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '../../components/layers/Navbar.vue';
import Footer from '../../components/layers/Footer.vue';

export default defineComponent({
    name: 'About2Page',
    components: { Navbar, Footer },
})
</script>