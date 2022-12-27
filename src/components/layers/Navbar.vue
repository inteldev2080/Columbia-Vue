<template>
    <header class="w-full flex items-center justify-around shadow-header relative z-10">
        <div class="container py-[33px] flex items-center justify-between">
            <div class="">
                <router-link to="/">
                    <img class="h-[54px]" src="../../assets/logo.png" alt="logo" />
                </router-link>
            </div>
            <div class="flex items-center navitems">
                <div class="pl-8 text-text flex items-center nav-item nav-active">
                    <router-link class="font-normal text-base flex" to="/">Sobre Columbia</router-link>
                </div>
                <div class="pl-8 text-text flex items-center nav-item parent">
                    <router-link class="font-normal text-base flex items-center" to="/about">
                        Oferta Educativa
                        <svg class="ml-2 h-[16px] arrow-color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path
                                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>

                    </router-link>

                    <div
                        class="h-[calc(100vh_-_120px)] w-full flex flex-col items-center absolute top-[120px] left-0 z-1 bg-[#0000005e] dropdown-container">
                        <div class="w-full flex flex-col bg-white rounded-b-[50px]">
                            <div class="w-full py-1 shadow-header relative -top-[12px]"></div>
                            <div class="w-full flex justify-center px-8 pb-8 overflow-hidden relative">
                                <div class="">
                                    <img class="w-[182px] h-[182px] absolute left-[50px] bottom-b"
                                        src="../../assets/images/circle.png" alt="circle" />
                                </div>
                                <div class="">
                                    <img class="w-[132px] h-[132px] absolute top-[30px] -right-[66px]"
                                        src="../../assets/images/circle.png" alt="circle" />
                                </div>

                                <div class="container flex justify-between">
                                    <div class="flex flex-col justify-between w-[65%]">
                                        <div class="flex items-center py-8">
                                            <div class="mr-2"><img class='w-[25px]' alt="book"
                                                    src="../../assets/images/book.png" /></div>
                                            <p class="text-primary font-extrabold text-base">INSTITUTO COLUMBIA</p>
                                        </div>
                                        <div class="flex items-start border-r-2 border-primary">
                                            <div class="flex flex-col pr-6 w-[30%]">
                                                <p class="text-primary mb-1.5 font-extrabold">CARRERAS</p>
                                                <a class="text-text mb-2 leading-5 hover:text-primary"
                                                    href="/">Hotelería internacional</a>
                                                <a class="text-text mb-2 leading-5 hover:text-primary" href="/">Alta
                                                    cocina</a>
                                            </div>
                                            <div class="flex flex-col pr-6">
                                                <p class="text-primary mb-1.5 font-extrabold">PROGRAMAS Y FORMACIÓN
                                                    CONTINUA</p>
                                                <a class="text-text mb-2 leading-5 hover:text-primary" href="/">Cabin
                                                    Crew: Servicio y hospitalidad de vuelos comerciales</a>
                                                <a class="text-text mb-2 leading-5 hover:text-primary" href="/">Servicio
                                                    y atención de viajeros a bordo</a>
                                                <a class="text-text mb-2 leading-5 hover:text-primary" href="/">Software
                                                    informático para hoteles y restaurantes</a>
                                                <a class="text-text mb-2 leading-5 hover:text-primary"
                                                    href="/">Counter</a>
                                                <a class="text-text mb-2 leading-5 hover:text-primary"
                                                    href="/">Bartender</a>
                                                <a class="text-text mb-2 leading-5 hover:text-primary"
                                                    href="/">Pastelería y Panadería</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex flex-col w-[30%]">
                                        <div class="flex items-center py-8">
                                            <div class="mr-2"><img class='w-[25px]' alt="book"
                                                    src="../../assets/images/book.png" /></div>
                                            <p class="text-primary font-extrabold text-base">CETPRO COLUMBIA</p>
                                        </div>
                                        <div class="flex items-start">
                                            <div class="flex flex-col pr-6">
                                                <p class="text-primary mb-1.5 font-extrabold">ESPECIALIZACIÓN</p>
                                                <a class="text-text mb-2 leading-5 hover:text-primary"
                                                    href="/">Especialización en aviación comercial</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pl-8 text-text flex items-center nav-item">
                    <router-link class="font-normal text-base flex" to="/about">Partners</router-link>
                </div>
                <div class="pl-8 text-text flex items-center nav-item">
                    <router-link class="font-normal text-base flex" to="/about">Portal del
                        alumno</router-link>
                </div>
                <div class="pl-8 text-text flex items-center nav-item">
                    <router-link class="font-normal text-base flex" to="/about">Blog</router-link>
                </div>
            </div>
        </div>
    </header>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Navebar',
    props: {
        active: {
            type: String,
            default: 'home',
        }
    },
})
</script>

<style lang="scss" scoped>
.navitems {
    .nav-item {
        &>a {
            @apply transition-colors;

            &:hover {
                @apply text-primary font-medium;

                .arrow-color {
                    @apply fill-primary;
                }
            }

            .arrow-color {
                @apply fill-text;
            }
        }

        .dropdown-container {
            @apply opacity-0 invisible transition-all duration-500;

            img {
                display: none;
            }

            a {
                @apply transition-all relative text-text;

                &::after {
                    @apply block w-[8px] h-[8px] absolute top-[5px] -left-3.5 bg-transparent transition-all rounded-full;
                    content: " ";
                }

                &:hover {
                    @apply text-black font-medium;

                    &::after {
                        @apply bg-primary;
                    }

                }
            }
        }
    }

    .nav-item.parent:hover .dropdown-container {
        @apply opacity-100 visible;

        img {
            display: block;
        }
    }

    .nav-active {
        >a {
            @apply text-primary font-medium;

            .arrow-color {
                @apply fill-primary;
            }
        }
    }

    .bottom-b {
        bottom: -90px;
    }
}
</style>