<template>
    <div>
        <Navbar />

        <div class="w-full">
            <PaymentFirstSection />
            <PaymentSecondSection />
            <PaymentThirdSection />

            <div class="z-10 w-full h-full fixed left-0 top-0 flex items-center justify-center bg-background transition-all"
                :class="isShow ? 'opacity-100 visible' : 'opacity-0 invisible'">
                <div class="w-[350px] flex flex-col rounded-xl bg-[#eeeeee]">
                    <div class="w-full flex flex-col relative">
                        <button class="absolute right-2 top-2" v-on:click="onClose">
                            <img class="w-[24px] h-[24px]" src="../../assets/images/b-close.png" />
                        </button>
                        <div class="w-full flex justify-center pt-6 mb-2">
                            <img class="h-[40px]" alt="logo" src="../../assets/favicon.png" />
                        </div>
                        <div class="w-full flex justify-center mb-4">
                            <img class="h-[24px]" alt="logo" src="../../assets/logo-t.png" />
                        </div>
                        <div class="w-full flex justify-start mb-1">
                            <div class="w-[90%] h-[6px] bg-primary"></div>
                        </div>
                        <div class="w-full flex justify-end mb-2">
                            <div class="w-[90%] h-[6px] bg-[#00A8FF]"></div>
                        </div>
                    </div>
                    <div class="w-full px-5">
                        <div>
                            <div class="w-full flex justify-end mb-2">
                                <p class="w-full text-text text-sm text-center"><b>Recuerda</b>activar las <b>compras
                                        por internet</b> contu banco</p>
                            </div>


                            <div class="w-full mb-2">
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-[20px] h-[20px] text-[#BFBFBF]" fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path
                                                d="M168 336C181.3 336 192 346.7 192 360C192 373.3 181.3 384 168 384H120C106.7 384 96 373.3 96 360C96 346.7 106.7 336 120 336H168zM360 336C373.3 336 384 346.7 384 360C384 373.3 373.3 384 360 384H248C234.7 384 224 373.3 224 360C224 346.7 234.7 336 248 336H360zM512 32C547.3 32 576 60.65 576 96V416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H512zM512 80H64C55.16 80 48 87.16 48 96V128H528V96C528 87.16 520.8 80 512 80zM528 224H48V416C48 424.8 55.16 432 64 432H512C520.8 432 528 424.8 528 416V224z" />
                                        </svg>
                                    </div>
                                    <input type="text" id="input-group-1"
                                        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Numero de Tarjeta">
                                </div>
                            </div>

                            <div class="w-full flex mb-2">
                                <div class="w-1/2 relative mr-2">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-[20px] h-[20px] text-[#BFBFBF]" fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path
                                                d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                                        </svg>
                                    </div>
                                    <input type="text" id="input-group-1"
                                        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="MM/AA">
                                </div>
                                <div class="w-1/2 relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-[20px] h-[20px] text-[#BFBFBF]" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            viewBox="0 0 448 512">
                                            <path
                                                d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                                        </svg>
                                    </div>
                                    <input type="text" id="input-group-1"
                                        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="CVV">
                                </div>
                            </div>
                            <div class="w-full flex mb-2">
                                <div class="w-1/2 relative mr-2">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-[20px] h-[20px] text-[#BFBFBF]" fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path
                                                d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" />
                                        </svg>
                                    </div>
                                    <input type="text" id="input-group-1"
                                        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Nombre">
                                </div>
                                <div class="w-1/2 relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-[20px] h-[20px] text-[#BFBFBF]" fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path
                                                d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" />
                                        </svg>
                                    </div>
                                    <input type="text" id="input-group-1"
                                        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Appellido">
                                </div>
                            </div>
                            <div class="w-full mb-2">
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-[#BFBFBF]" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z">
                                            </path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                        </svg>
                                    </div>
                                    <input type="text" id="input-group-1"
                                        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Email">
                                </div>
                            </div>

                            <button class="bg-primary text-white font-semibold w-full rounded-lg py-2 mb-4">Pagar S/
                                1,320.00</button>
                            <img class="w-full h-[30px] mb-4" alt="logo" src="../../assets/images/payment1.png" />
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

import PaymentFirstSection from "../../components/sections/payment/first.vue";
import PaymentSecondSection from "../../components/sections/payment/second.vue";
import PaymentThirdSection from "../../components/sections/payment/third.vue";

export default defineComponent({
    name: 'PaymentPage',
    components: {
        Navbar, Footer,
        PaymentFirstSection,
        PaymentSecondSection,
        PaymentThirdSection
    },
    data: () => ({
        isShow: {
            type: Boolean,
            default: false,
        },
    }),
    methods: {
        onClose: function () {
            this.isShow = false;
        }
    }
})
</script>
<style>
.svg-icon {
    fill: #BFBFBF;
}
</style>