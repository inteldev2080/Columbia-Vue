<template>
    <div>
        <Navbar />

        <div class="w-full flex flex-col">
            <div class="w-full relative flex items-center">
                <img class="w-full aspect-[4/1]" alt="bg" src="../../assets/images/online.png" />
                <h1
                    class="w-full h-full flex items-center justify-center absolute left-0 top-0 text-white text-6xl font-extrabold bg-[#00000044]">
                    Columbia Online</h1>
            </div>
        </div>

        <div class="w-full overflow-hidden relative">
            <div class="container flex items-center justify-between py-16">
                <img class="w-[300px] h-[300px] absolute -right-[100px] -top-[100px]" alt="circle"
                    src="../../assets/images/circle.png" />

                <div class="w-[35%]">
                    <img class="w-full aspect-[5/4]" alt="bg" src="../../assets/images/bg3.png" />
                </div>
                <div class="w-[65%] pl-10">
                    <h3 class="text-4xl leading-snug text-primary font-extrabold">Sobre Columbia Online</h3>
                    <p class="text-lg text-text">La adaptación al cambio es una de las principales habilidades que
                        Columbia fomenta entre su comunidad. Esto nos ha impulsado a crear una propuesta educativa
                        adecuada a los tiempos actuales, por ello te presentamos Columbia Online, una plataforma en
                        donde encontrarás programas de extensión que el mercado laboral de hoy solicita y a la cual
                        podrás acceder desde cualquier parte del mundo. Nuestro objetivo es acortar distancias para
                        extender límites y acompañar a nuestros alumnos a alcanzar sus objetivos.</p>
                </div>
            </div>
        </div>

        <div class="w-full overflow-hidden bg-[#F8F9FA]">
            <div class="container flex items-center justify-between py-16 relative">
                <img class="w-[128px] h-[128px] absolute left-0 -top-[64px]" alt="circle"
                    src="../../assets/images/circle.png" />

                <div class="w-[35%] order-2">
                    <img class="w-full aspect-[5/4]" alt="bg" src="../../assets/images/bg9.png" />
                </div>
                <div class="w-[65%] flex flex-col items-start pr-10 order-1">
                    <h3 class="text-4xl leading-snug text-primary font-extrabold mb-6">Cabin Crew</h3>
                    <p class="text-lg text-text mb-4">La principal función de un Tripulante de Cabina es brindar
                        seguridad a bordo a los pasajeros. En Columbia te formamos con los conocimientos para adaptarte
                        a los cambios y destacar en el mundo de la Aviación Comercial, de la mano de profesionales
                        especializados en la industria.</p>
                    <div class="flex items-center mb-6">
                        <img class="w-[35px] mr-2" src="../../assets/images/calendar.png" alt="calendar" />
                        <span class="text-primary">Duración: </span>
                        <span class="text-text text-lg">3 años</span>
                        <img class="w-[35px] ml-3 mr-2" src="../../assets/images/monitor.png" alt="monitor" />
                        <span class="text-primary">Modalidad: </span>
                        <span class="text-text text-lg">100% online</span>
                    </div>
                    <button
                        class="bg-primary text-white px-6 py-3 flex items-center rounded-full mb-6 hover:bg-secondary">
                        DESCARGAR BROCHURE
                        <svg class="ml-2" width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9.1687 10.0632C9.16714 10.0424 9.16634 10.0213 9.16634 10V3.33333C9.16634 2.87333 9.53884 2.5 9.99967 2.5C10.4605 2.5 10.833 2.87333 10.833 3.33333V9.99985L12.833 8.5C13.2013 8.2225 13.7238 8.29833 13.9997 8.66667C14.2763 9.035 14.2013 9.5575 13.833 9.83333L10.4997 12.3333C10.3522 12.4442 10.1755 12.5 9.99967 12.5C9.83217 12.5 9.66467 12.4492 9.52051 12.3483L6.18717 10.0033C5.81051 9.73833 5.71967 9.21833 5.98467 8.8425C6.24967 8.46583 6.76884 8.375 7.14551 8.64L9.1687 10.0632ZM4.99967 14.1667V15H14.9997V14.1667C14.9997 13.7083 15.3747 13.3333 15.833 13.3333C16.2913 13.3333 16.6663 13.7083 16.6663 14.1667V15.8333C16.6663 16.2917 16.2913 16.6667 15.833 16.6667H4.16634C3.70801 16.6667 3.33301 16.2917 3.33301 15.8333V14.1667C3.33301 13.7083 3.70801 13.3333 4.16634 13.3333C4.62467 13.3333 4.99967 13.7083 4.99967 14.1667Z"
                                fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div class="w-full overflow-hidden bg-[#F8F9FA] relative">
            <img class="w-[178px] h-[178px] absolute bottom-0 -right-[89px]" alt="circle"
                src="../../assets/images/circle.png" />
            <div class="container flex items-center justify-between pb-16">

                <div class="w-[35%] order-1">
                    <img class="w-full aspect-[5/4]" alt="bg" src="../../assets/images/bg10.png" />
                </div>
                <div class="w-[65%] flex flex-col items-start pl-10 order-2">
                    <h3 class="text-4xl leading-snug text-primary font-extrabold mb-6">Counter</h3>
                    <p class="text-lg text-text mb-4">El trabajo en Counter o Asistente de Servicio al Pasajero es el
                        que ofrece con mayor frecuencia oportunidades de ingresar a la industria de los viajes; puede
                        realizarse en el Counter de una aerolínea, en la ciudad o en el aeropuerto, incluso de manera
                        remota con los servicios en línea que ofrecen diversas compañías aéreas.</p>
                    <div class="flex items-center mb-6">
                        <img class="w-[35px] mr-2" src="../../assets/images/calendar.png" alt="calendar" />
                        <span class="text-primary">Duración: </span>
                        <span class="text-text text-lg">3 años</span>
                        <img class="w-[35px] ml-3 mr-2" src="../../assets/images/monitor.png" alt="monitor" />
                        <span class="text-primary">Modalidad: </span>
                        <span class="text-text text-lg">100% online</span>
                    </div>
                    <button
                        class="bg-primary text-white px-6 py-3 flex items-center rounded-full mb-6 hover:bg-secondary">
                        DESCARGAR BROCHURE
                        <svg class="ml-2" width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9.1687 10.0632C9.16714 10.0424 9.16634 10.0213 9.16634 10V3.33333C9.16634 2.87333 9.53884 2.5 9.99967 2.5C10.4605 2.5 10.833 2.87333 10.833 3.33333V9.99985L12.833 8.5C13.2013 8.2225 13.7238 8.29833 13.9997 8.66667C14.2763 9.035 14.2013 9.5575 13.833 9.83333L10.4997 12.3333C10.3522 12.4442 10.1755 12.5 9.99967 12.5C9.83217 12.5 9.66467 12.4492 9.52051 12.3483L6.18717 10.0033C5.81051 9.73833 5.71967 9.21833 5.98467 8.8425C6.24967 8.46583 6.76884 8.375 7.14551 8.64L9.1687 10.0632ZM4.99967 14.1667V15H14.9997V14.1667C14.9997 13.7083 15.3747 13.3333 15.833 13.3333C16.2913 13.3333 16.6663 13.7083 16.6663 14.1667V15.8333C16.6663 16.2917 16.2913 16.6667 15.833 16.6667H4.16634C3.70801 16.6667 3.33301 16.2917 3.33301 15.8333V14.1667C3.33301 13.7083 3.70801 13.3333 4.16634 13.3333C4.62467 13.3333 4.99967 13.7083 4.99967 14.1667Z"
                                fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div class="w-full overflow-hidden bg-[#F8F9FA] relative">
            <div class="container flex items-center justify-between pb-16">
                <div class="w-[35%] order-2">
                    <img class="w-full aspect-[5/4]" alt="bg" src="../../assets/images/bg11.png" />
                </div>

                <div class="w-[65%] flex flex-col items-start pr-10 order-1">
                    <h3 class="text-4xl leading-snug text-primary font-extrabold mb-6">Servicio y atención de viajeros
                    </h3>
                    <p class="text-lg text-text mb-4">Esta es tu oportunidad de Ingresar a la industria de los viajes y
                        disfrutar de gratas emociones y nuevas experiencias; tendrás formación profesional que te
                        permitirá ingresar a las mejores aerolíneas y hacer carrera, ascendiendo a posiciones cada vez
                        más importantes.</p>
                    <div class="flex items-center mb-6">
                        <img class="w-[35px] mr-2" src="../../assets/images/calendar.png" alt="calendar" />
                        <span class="text-primary">Duración: </span>
                        <span class="text-text text-lg">3 años</span>
                        <img class="w-[35px] ml-3 mr-2" src="../../assets/images/monitor.png" alt="monitor" />
                        <span class="text-primary">Modalidad: </span>
                        <span class="text-text text-lg">100% online</span>
                    </div>
                    <button
                        class="bg-primary text-white px-6 py-3 flex items-center rounded-full mb-6 hover:bg-secondary">
                        DESCARGAR BROCHURE
                        <svg class="ml-2" width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9.1687 10.0632C9.16714 10.0424 9.16634 10.0213 9.16634 10V3.33333C9.16634 2.87333 9.53884 2.5 9.99967 2.5C10.4605 2.5 10.833 2.87333 10.833 3.33333V9.99985L12.833 8.5C13.2013 8.2225 13.7238 8.29833 13.9997 8.66667C14.2763 9.035 14.2013 9.5575 13.833 9.83333L10.4997 12.3333C10.3522 12.4442 10.1755 12.5 9.99967 12.5C9.83217 12.5 9.66467 12.4492 9.52051 12.3483L6.18717 10.0033C5.81051 9.73833 5.71967 9.21833 5.98467 8.8425C6.24967 8.46583 6.76884 8.375 7.14551 8.64L9.1687 10.0632ZM4.99967 14.1667V15H14.9997V14.1667C14.9997 13.7083 15.3747 13.3333 15.833 13.3333C16.2913 13.3333 16.6663 13.7083 16.6663 14.1667V15.8333C16.6663 16.2917 16.2913 16.6667 15.833 16.6667H4.16634C3.70801 16.6667 3.33301 16.2917 3.33301 15.8333V14.1667C3.33301 13.7083 3.70801 13.3333 4.16634 13.3333C4.62467 13.3333 4.99967 13.7083 4.99967 14.1667Z"
                                fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div class="w-full overflow-hidden bg-[#F8F9FA] relative">
            <img class="w-[216px] h-[216px] absolute right-[40px] -bottom-[108px]" alt="circle"
                src="../../assets/images/circle.png" />
            <div class="container flex items-center justify-between pb-16">

                <div class="w-[35%] order-1">
                    <img class="w-full aspect-[5/4]" alt="bg" src="../../assets/images/bg12.png" />
                </div>
                <div class="w-[65%] flex flex-col items-start pl-10 order-2">
                    <h3 class="text-4xl leading-snug text-primary font-extrabold mb-6">Software Informático para Hoteles
                        y Restaurantes</h3>
                    <p class="text-lg text-text mb-4">Diseñado para refrescar los conocimientos, habilidades y destrezas
                        técnicas del conocimiento de herramientas de trabajo de uno de los Sistemas de Gestión Hotelera
                        y de Restaurantes más usado a nivel Nacional e internacional, desde la configuración y
                        personalización de las distintas áreas de un establecimiento de hospedaje, así como los outlets
                        en el área de Alimentos y Bebidas.</p>
                    <div class="flex items-center mb-6">
                        <img class="w-[35px] mr-2" src="../../assets/images/calendar.png" alt="calendar" />
                        <span class="text-primary">Duración: </span>
                        <span class="text-text text-lg">3 años</span>
                        <img class="w-[35px] ml-3 mr-2" src="../../assets/images/monitor.png" alt="monitor" />
                        <span class="text-primary">Modalidad: </span>
                        <span class="text-text text-lg">100% online</span>
                    </div>
                    <button
                        class="bg-primary text-white px-6 py-3 flex items-center rounded-full mb-6 hover:bg-secondary">
                        DESCARGAR BROCHURE
                        <svg class="ml-2" width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9.1687 10.0632C9.16714 10.0424 9.16634 10.0213 9.16634 10V3.33333C9.16634 2.87333 9.53884 2.5 9.99967 2.5C10.4605 2.5 10.833 2.87333 10.833 3.33333V9.99985L12.833 8.5C13.2013 8.2225 13.7238 8.29833 13.9997 8.66667C14.2763 9.035 14.2013 9.5575 13.833 9.83333L10.4997 12.3333C10.3522 12.4442 10.1755 12.5 9.99967 12.5C9.83217 12.5 9.66467 12.4492 9.52051 12.3483L6.18717 10.0033C5.81051 9.73833 5.71967 9.21833 5.98467 8.8425C6.24967 8.46583 6.76884 8.375 7.14551 8.64L9.1687 10.0632ZM4.99967 14.1667V15H14.9997V14.1667C14.9997 13.7083 15.3747 13.3333 15.833 13.3333C16.2913 13.3333 16.6663 13.7083 16.6663 14.1667V15.8333C16.6663 16.2917 16.2913 16.6667 15.833 16.6667H4.16634C3.70801 16.6667 3.33301 16.2917 3.33301 15.8333V14.1667C3.33301 13.7083 3.70801 13.3333 4.16634 13.3333C4.62467 13.3333 4.99967 13.7083 4.99967 14.1667Z"
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
    name: 'About1Page',
    components: { Navbar, Footer },
})
</script>