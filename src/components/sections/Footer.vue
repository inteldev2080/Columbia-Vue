<template>
    <footer class="w-full flex bg-primary py-8">
        <div class="container flex flex-col">
            <div class="flex justify-around items-center border-b-2 py-2 border-white">
                <div class="flex flex-col pb-4">
                    <p class="text-white mb-2">Redes sociales</p>
                    <div class="flex align-center mb-4">
                        <a class="block mr-6">
                            <img class="w-[40px] h-[40px]" src="../../assets/images/facebook.png" alt="facebook" />
                        </a>
                        <a class="block mr-6">
                            <img class="w-[40px] h-[40px]" src="../../assets/images/youtube.png" alt="youtube" />
                        </a>
                        <a class="block mr-6">
                            <img class="w-[40px] h-[40px]" src="../../assets/images/instagram.png" alt="instagram" />
                        </a>
                    </div>
                    <p class="text-white mb-2">Call center</p>
                    <p class="text-white mb-2">(01) 500 7000</p>
                </div>
                <div>
                    <img class="h-[88px]" src="../../assets/logo-white.png" alt="logo" />
                </div>
                <div class="flex flex-col py-4">
                    <a class="mb-4">
                        <img class="h-[60px]" src="../../assets/images/libro.png" alt="libro" />
                    </a>
                    <a class="">
                        <img class="h-[60px]" src="../../assets/images/pagoefectivo.png" alt="pagoefectivo" />
                    </a>
                </div>
            </div>
            <div class="flex justify-between items-center pt-6">
                <div class="flex items-center">
                    <p class="text-white mr-12">Política de Privacidad</p>
                    <p class="text-white">Política de Privacidad</p>
                </div>
                <p class="text-white">© Copyright 2022. Todos los derechos reservados a corporación educa S.A.C</p>
            </div>
        </div>
    </footer>
</template>

<script lang="js">

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