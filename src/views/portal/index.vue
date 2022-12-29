<template>
    <div>
        <Navbar />

        <div class="w-full">
            <div class="w-full">
                <div class="w-full flex overflow-hidden">
                    <div class="w-1/2 flex flex-col justify-center items-end relative">
                        <img class="w-[192px] absolute left-[91px] -top-[91px]" alt="circle"
                            src="../../assets/images/circle.png" />
                        <img class="w-[122px] absolute right-10 -bottom-[61px]" alt="circle"
                            src="../../assets/images/circle.png" />
                        <div class="w-[70%]">
                            <h3 class="text-text font-semibold text-5xl mb-6">Empleabilidad</h3>
                            <button
                                class="flex items-center uppercase rounded-full mx-2 text-sm font-medium px-8 pr-6 py-2.5 bg-primary text-white">
                                INGRESAR
                                <img class="w-[20px] h-[20px] ml-2" alt="image"
                                    src="../../assets/images/arrow_next.png" />
                            </button>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <img class="w-full aspect-[720/380]" alt="bg" src="../../assets/images/bg15.png" />
                    </div>
                </div>

                <div class="w-full flex overflow-hidden">
                    <div class="w-1/2">
                        <img class="w-full aspect-[720/380]" alt="bg" src="../../assets/images/bg16.png" />
                    </div>
                    <div class="w-1/2 flex flex-col justify-center items-center relative">
                        <img class="w-[192px] absolute right-[91px] -top-[91px]" alt="circle"
                            src="../../assets/images/circle.png" />
                        <img class="w-[122px] absolute left-[61px] -bottom-[61px]" alt="circle"
                            src="../../assets/images/circle.png" />
                        <div class="w-[80%]">
                            <h3 class="text-text font-semibold text-5xl mb-6">ColumbiaNet</h3>
                            <button
                                class="flex items-center uppercase rounded-full mx-2 text-sm font-medium px-8 pr-6 py-2.5 bg-primary text-white">
                                INGRESAR
                                <img class="w-[20px] h-[20px] ml-2" alt="image"
                                    src="../../assets/images/arrow_next.png" />
                            </button>
                        </div>
                    </div>
                </div>

                <div class="w-full flex overflow-hidden">
                    <div class="w-1/2 flex flex-col justify-center items-end relative">
                        <img class="w-[192px] absolute left-[91px] -top-[91px]" alt="circle"
                            src="../../assets/images/circle.png" />
                        <img class="w-[122px] absolute right-10 -bottom-[61px]" alt="circle"
                            src="../../assets/images/circle.png" />
                        <div class="w-[70%]">
                            <h3 class="text-text font-semibold text-5xl mb-6">Correo institucional</h3>
                            <button
                                class="flex items-center uppercase rounded-full mx-2 text-sm font-medium px-8 pr-6 py-2.5 bg-primary text-white">
                                INGRESAR
                                <img class="w-[20px] h-[20px] ml-2" alt="image"
                                    src="../../assets/images/arrow_next.png" />
                            </button>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <img class="w-full aspect-[720/380]" alt="bg" src="../../assets/images/bg17.png" />
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
    name: 'PartnerPage',
    components: {
        Navbar, Footer,
    },
})
</script>