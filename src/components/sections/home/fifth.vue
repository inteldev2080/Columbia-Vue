<template>
    <div class="w-full flex justify-around overflow-hidden bg-[#F8F9FA] relative">
        <div class="container flex justify-between items-center py-20">
            <div class="w-[40%] h-full flex flex-col items-center justify-start pt-10">
                <img class="w-[224px] absolute -bottom-[113px]" alt="circle"
                    src="../../../assets/images/circle-fill.png" />
                <h3 class="w-full leading-snug text-5xl text-primary font-extrabold mb-4">
                    ¡Preinscríbete!
                </h3>
                <p class="w-full text-text text-lg">Déjanos tus datos para brindarte mayor información sobre nuestras carreras
                    y programas.</p>
            </div>
            <div class="w-[60%] flex flex-col items-start px-10">
                <div class="w-full flex justify-between mb-6">
                    <div class="w-[45%] flex items-center">
                        <img class="w-[24px] h-[24px] mr-2" src="../../../assets/images/person.png" alt="person" />
                        <input class="w-full bg-transparent border-b border-[#6C757D] text-semilight py-1.5"
                            placeholder="Nombre y Apellidos" />
                    </div>
                    <div class="w-[45%] flex items-center">
                        <img class="w-[24px] h-[24px] mr-2" src="../../../assets/images/phone.png" alt="phone" />
                        <input class="w-full bg-transparent border-b border-[#6C757D] text-semilight py-1.5" placeholder="Celular" />
                    </div>
                </div>
                <div class="w-full flex justify-between mb-6">
                    <div class="w-[45%] flex items-center">
                        <img class="w-[24px] h-[24px] mr-2" src="../../../assets/images/email.png" alt="email" />
                        <input class="w-full bg-transparent border-b border-[#6C757D] text-semilight py-1.5"
                            placeholder="Correo electrónico" />
                    </div>
                    <div class="w-[45%] flex items-center">
                        <img class="w-[24px] h-[24px] mr-2" src="../../../assets/images/pin.png" alt="pin" />
                        <input class="w-full bg-transparent border-b border-[#6C757D] text-semilight py-1.5" placeholder="Distrito" />
                    </div>
                </div>
                <div class="w-full flex justify-between mb-6">
                    <div class="w-[45%] flex items-center">
                        <img class="w-[24px] h-[24px] mr-2" src="../../../assets/images/email.png" alt="email" />
                        <input class="w-full bg-transparent border-b border-[#6C757D] text-semilight py-1.5"
                            placeholder="Carrera o programa de interés" />
                    </div>
                    <div class="w-[45%] flex items-center">
                        <img class="w-[24px] h-[24px] mr-2" src="../../../assets/images/pin.png" alt="pin" />
                        <input class="w-full bg-transparent border-b border-[#6C757D] text-semilight py-1.5"
                            placeholder="Estado académico actual" />
                    </div>
                </div>
                <div class="w-full flex items-center mb-7">
                    <input type="radio" class="w-[17px] h-[17px]" />
                    <p class="ml-2 text-[#212529] leading-4">Acepto la <a class="underline" href="">Política de Privacidad y Protección de Datos
                            Personales</a></p>
                </div>

                <button class="w-[150px] text-center bg-primary text-white text-xs py-3 rounded-full hover:bg-secondary">
                    ENVIAR
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HomeFifthSection'
})

</script>