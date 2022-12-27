<template>
    <div>
        <Navbar />

        <div class="w-full flex flex-col">
            <div class="w-full relative flex items-center">
                <img class="w-full aspect-[4/1]" alt="bg" src="../../assets/images/instituto.png" />
                <h1
                    class="w-full h-full flex items-center justify-center absolute left-0 top-0 text-white text-6xl font-extrabold bg-[#00000044]">
                    Columbia Instituto</h1>
            </div>
        </div>

        <div class="w-full overflow-hidden relative">
            <div class="container flex items-center justify-between py-16">
                <img class="w-[300px] h-[300px] absolute -right-[100px] -top-[100px]" alt="circle"
                    src="../../assets/images/circle-fill.png" />

                <div class="w-[35%]">
                    <img class="w-full aspect-[5/4]" alt="bg" src="../../assets/images/bg3.png" />
                </div>
                <div class="w-[65%] pl-10">
                    <h3 class="text-4xl leading-snug text-primary font-extrabold">Sobre Columbia Instituto</h3>
                    <p class="text-lg text-text">Viajar, descansar, disfrutar, divertirse y pasarlo bien es atractivo
                        para
                        todos. Muchas personas desean experimentar el contacto con la naturaleza, el clima, las
                        sensaciones,
                        los sabores, los colores y las atracciones que ofrecen otros países. El mundo está volviendo a
                        entrar en movimiento y las inversiones en la industria de los Viajes y la Hospitalidad no han
                        parado, para ello se requerirán profesionales competitivos, capaces de adaptarse a las nuevas
                        exigencias de la industria.</p>
                </div>
            </div>
        </div>

        <div class="w-full overflow-hidden bg-[#F8F9FA]">
            <div class="container flex items-center justify-between py-16 relative">
                <img class="w-[128px] h-[128px] absolute left-0 -top-[64px]" alt="circle"
                    src="../../assets/images/circle.png" />

                <div class="w-[35%] order-2">
                    <img class="w-full aspect-[5/4]" alt="bg" src="../../assets/images/bg4.png" />
                </div>
                <div class="w-[65%] flex flex-col items-start pr-10 order-1">
                    <h3 class="text-4xl leading-snug text-primary font-extrabold mb-6">Hotelería Internacional</h3>
                    <p class="text-lg text-text mb-4">Recibe una formación práctica que te permitirá trabajar en las
                        mejores
                        cadenas hoteleras y realizar línea de carrera. Vive tu carrera desde el primer ciclo realizando
                        visitas guiadas y participa de viajes internacionales a reconocidos hoteles y resorts antes de
                        terminar tu carrera.</p>
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

        <div class="w-full overflow-hidden bg-[#F8F9FA] relative">
            <img class="w-[178px] h-[178px] absolute bottom-0 -right-[89px]" alt="circle"
                src="../../assets/images/circle.png" />
            <div class="container flex items-center justify-between pb-16">

                <div class="w-[35%] order-1">
                    <img class="w-full aspect-[5/4]" alt="bg" src="../../assets/images/bg5.png" />
                </div>
                <div class="w-[65%] flex flex-col items-start pl-10 order-2">
                    <h3 class="text-4xl leading-snug text-primary font-extrabold mb-6">Alta Cocina</h3>
                    <p class="text-lg text-text mb-4">Nuestros egresados de la carrera de Alta Cocina son Chefs en
                        importantes restaurantes, hoteles y resorts en todo el mundo, además de ser profesionales que
                        pueden emprender sus propios negocios culinarios exitosamente.</p>
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

        <div class="w-full overflow-hidden bg-[#F8F9FA] relative">
            <div class="container flex items-center justify-between pb-16">
                <div class="w-[35%] order-2">
                    <img class="w-full aspect-[5/4]" alt="bg" src="../../assets/images/bg6.png" />
                </div>

                <div class="w-[65%] flex flex-col items-start pr-10 order-1">
                    <h3 class="text-4xl leading-snug text-primary font-extrabold mb-6">Bartender Internacional</h3>
                    <p class="text-lg text-text mb-4">La búsqueda de nuevos talentos en la preparación de cócteles y
                        bebidas aumenta cada día. En Columbia te enseñamos a desarrollar tus habilidades para que te
                        conviertas en un maestro de la coctelería nacional e internacional.</p>
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

        <div class="w-full overflow-hidden bg-[#F8F9FA]">
            <div class="container flex items-center justify-between pb-16 relative">
                <img class="w-[216px] h-[216px] absolute right-[40px] -bottom-[108px]" alt="circle"
                    src="../../assets/images/circle.png" />

                <div class="w-[35%] order-1">
                    <img class="w-full aspect-[5/4]" alt="bg" src="../../assets/images/bg7.png" />
                </div>
                <div class="w-[65%] flex flex-col items-start pl-10 order-2">
                    <h3 class="text-4xl leading-snug text-primary font-extrabold mb-6">Pastelería y Panadería</h3>
                    <p class="text-lg text-text mb-4">Te ofrecemos un programa de especialización para alcanzar el
                        dominio de las técnicas necesarias para preparar finos y exquisitos postres y panes. Te
                        enseñamos a elaborar, decorar, costear y comercializar todo tipo de postres y a practicar las
                        técnicas de chocolatería, pastelería y panadería fina.</p>
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
    name: 'About1Page',
    components: { Navbar, Footer },
})
</script>