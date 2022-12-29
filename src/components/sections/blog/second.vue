<template>
    <div class="w-full flex flex-col relative overflow-hidden">
        <img class="w-[295px] aspect-1/1 absolute -right-[140px] -top-[140px]" alt="circle"
            src="../../../assets/images/circle.png" />
        <img class="w-[224px] aspect-1/1 absolute -left-[114px] top-[400px]" alt="circle"
            src="../../../assets/images/circle.png" />

        <div class="container flex flex-col items-center py-20">
            <div class="w-full flex flex-wrap">
                <div v-for="item in 8"
                    class="w-[calc(50%_-_24px)] xl:w-[calc(33%_-_24px)] flex flex-col overflow-hidden rounded-xl bg-[#F8F9FA] mr-6 mb-8">
                    <img class="w-full aspect-[5/3]" alt="card" src="../../../assets/images/blog/blog.png" />
                    <div class="p-4">
                        <p class="text-lg text-left text-primary font-semibold mb-2">¿Para qué puestos está preparado un
                            egresado de aviación comercial?</p>
                        <p class="text-text mb-2 text-left">¿Tienes la opción de estudiar una carrera corta y, sin
                            embargo, aún te quedan algunas dudas? Aquí te damos diez motivos para que te animes a
                            hacerlo. ¡No dejes pasar más tiempo!</p>

                        <button
                            class="bg-primary text-white mb-2 px-4 py-2 flex items-center rounded-full hover:bg-secondary">
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
            <div class="flex items-center justify-center mt-10">
                <div class="flex items-center">
                    <div class="pagination-item w-[40px] h-[40px] flex items-center justify-center rounded-md mx-1 border-2 border-[#ADB5BD] bg-[#ADB5BD]">
                        <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.07239 18.7635C7.69451 18.7635 7.31921 18.5991 7.06298 18.2808L0.814979 10.5161C0.429332 10.0359 0.434508 9.35007 0.829214 8.87642L7.2998 1.11171C7.75663 0.563008 8.57321 0.489243 9.12321 0.946067C9.67192 1.40289 9.74569 2.21948 9.28757 2.76818L3.49639 9.71889L9.08051 16.6579C9.52827 17.2144 9.44027 18.0297 8.88251 18.4775C8.64439 18.6703 8.3571 18.7635 8.07239 18.7635Z"
                                fill="#495057" />
                        </svg>
                    </div>
                    <div class="pagination-item w-[40px] h-[40px] flex items-center justify-center rounded-md mx-1 border-2 border-primary">
                        <span class="text-primary font-semibold">1</span>
                    </div>
                    <div class="pagination-item w-[40px] h-[40px] flex items-center justify-center rounded-md mx-1 border-2 border-[#ADB5BD]">
                        <span class="text-text font-semibold">2</span>
                    </div>
                    <div class="pagination-item w-[40px] h-[40px] flex items-center justify-center rounded-md mx-1 border-2 border-[#ADB5BD]">
                        <span class="text-text font-semibold">...</span>
                    </div>
                    <div class="pagination-item w-[40px] h-[40px] flex items-center justify-center rounded-md mx-1 border-2 border-[#ADB5BD]">
                        <span class="text-text font-semibold">9</span>
                    </div>
                    <div class="pagination-item w-[40px] h-[40px] flex items-center justify-center rounded-md mx-1 border-2 border-[#ADB5BD]">
                        <span class="text-text font-semibold">10</span>
                    </div>
                    <div class="pagination-item w-[40px] h-[40px] flex items-center justify-center rounded-md mx-1 border-2 border-[#ADB5BD]">
                        <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.910522 2.76611L6.83758 8.70611L0.910522 14.6461L2.73523 16.4708L10.4999 8.70611L2.73523 0.941406L0.910522 2.76611Z"
                                fill="#ADB5BD" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PartnerSecondSection'
})

</script>