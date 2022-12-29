<template>
    <div>
        <Navbar />

        <div class="w-full">
            <div class="container">
                <div class="w-full flex flex-col items-center py-20">
                    <h1 class="w-[90%] text-primary text-4xl text-center font-semibold mb-6">Descubre el arte de la
                        Administración en Hotelería
                        Internacional y todo lo que hay detrás</h1>
                    <p class="text-text font-extrabold text-lg text-center mb-6">Columbia Los Olivos | abril 15, 2021
                    </p>
                    <img class="w-full mb-6" alt="blog" src="../../assets/images/blog/blog1.png" />
                    <div class="w-full px-20 relative">
                        <div class="absolute left-0 top-8 flex flex-col">
                            <button class="p-2 border border-[#CED4DA] rounded-full mb-4">
                                <img class="w-[26px]" alt="facebook" src="../../assets/images/b-facebook.png" />
                            </button>
                            <button class="p-2 border border-[#CED4DA] rounded-full">
                                <img class="w-[26px]" alt="twitter" src="../../assets/images/b-twitter.png" />
                            </button>
                        </div>
                        <p class="mb-8">Para manejar un negocio es necesario ser ordenado, tener liderazgo y asumir
                            retos;
                            pero
                            administrar un hotel implica contar con ciertas habilidades que te permitan crear una
                            armonía entre el servicio, la experiencia del cliente y la imagen que proyectarás día a
                            día.<br />
                            Entre las cualidades más fuertes que resaltan a un administrador de hoteles modelo están: la
                            habilidad comunicacional, el trabajar con distintos grupos de personas, tener empatía y la
                            capacidad de resolver problemas con rapidez y eficiencia. Aquí te explicaremos las
                            características principales de esta carrera. <br /><br />
                            <b>¿Por qué es importante?</b>
                            La industria del turismo en nuestro país va en constante incremento. Este año, el Ministerio
                            de Comercio Exterior y Turismo (Mincetur) estimó que para fines del 2016 el Perú habrá
                            recibido un aproximado de 3.8 millones de turistas y que la tasa de crecimiento de esta
                            industria alcanza el 11%; un porcentaje mayor al de Colombia y Ecuador.<br /><br />

                            En sí, el turismo no sólo depende de las maravillas geográficas o de la gastronomía peruana;
                            sino también depende de la buena experiencia en el viaje y la estadía, pues el servicio de
                            un hotel no solo deja a una persona con la imagen del establecimiento, también del lugar que
                            visita.<br /><br />

                            <b>¿Qué hace un administrador hotelero?</b>
                            Para manejar un hotel debes lidiar tanto con los temas administrativos como preocuparse por
                            la imagen, tanto interna y externa del lugar. Entre sus tareas más comunes están: hacer
                            especial la estadía de un cliente, hacer los inventarios, buscar personal que cubra todos
                            los días de la semana, realizar el cronograma de trabajo para todos los empleados,
                            establecer reglas de trabajo y preocuparse porque la comunicación sea constante.
                        </p>
                        <img class="w-full mb-8" alt="blog" src="../../assets/images/blog/blog2.png" />
                        <p class="mb-8">
                            <b>¿Dónde trabaja?</b>
                            Un administrador de hoteles puede desempeñarse en todo tipo de empresa de alojamiento: desde
                            un motel de turistas que están a mitad de un viaje, centros turísticos, posadas o hasta una
                            cadena de hoteles; pues todos necesitan personal directivo que logre convertir la estadía de
                            un huésped en una experiencia maravillosa.<br /><br />

                            <b>¿Cuánto gana?</b>
                            El sueldo de un profesional de esta carrera es variable: cuando se empieza a adquirir
                            experiencia como practicante, se puede obtener la ganancia mínima de 850 soles; sin embargo
                            luego todo depende del establecimiento en el que se trabaja y el puesto que se desempeña
                            dentro de este.<br /><br />

                            Las responsabilidades que estén a tu cargo, tu proactividad y tu experiencia laboral serán
                            el reflejo de tu ganancia. Por ejemplo: si eres supervisor puedes ganar desde S/.2000 soles;
                            mientras si administras todo el establecimiento: desde S/.4000 soles. Las responsabilidades
                            que estén a tu cargo, tu proactividad y tu experiencia laboral serán el reflejo de tu
                            ganancia.
                        </p>
                        <img class="w-full mb-8" alt="blog" src="../../assets/images/blog/blog3.png" />
                        <p class="mb-8">Como verás, la Administración en Hotelería Internacional es un reto donde las
                            personas con
                            alto nivel de responsabilidad, con competencias de liderazgo, ingeniosas, inventivas y con
                            pasión por el buen servicio, pueden destacar a nivel internacional. Y tú, ¿ya te animaste a
                            estudiarla?</p>
                        <hr class="border-t border-text mb-8" />

                        <h3 class="text-primary font-semibold mb-6 text-3xl">También te puede interesar</h3>
                        <div class="flex justify-between">
                            <div class="w-[32%]">
                                <img class="w-full mb-4" alt="related" src="../../assets/images/blog/blog5.png" />
                                <p class="font-semibold text-text text-lg">Tu compra en CaféLink Peru ayuda a proteger
                                    la Amazonía peruana.</p>
                            </div>
                            <div class="w-[32%]">
                                <img class="w-full mb-4" alt="related" src="../../assets/images/blog/blog5.png" />
                                <p class="font-semibold text-text text-lg">Tu compra en CaféLink Peru ayuda a proteger
                                    la Amazonía peruana.</p>
                            </div>
                            <div class="w-[32%]">
                                <img class="w-full mb-4" alt="related" src="../../assets/images/blog/blog5.png" />
                                <p class="font-semibold text-text text-lg">Tu compra en CaféLink Peru ayuda a proteger
                                    la Amazonía peruana.</p>
                            </div>
                        </div>
                    </div>
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
    name: 'BlogDetailPage',
    components: {
        Navbar, Footer,
    },
})
</script>