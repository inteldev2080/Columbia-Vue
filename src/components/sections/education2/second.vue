<template>
    <div class="w-full flex justify-around overflow-hidden relative">
        <img class="w-[295px] h-[295px] absolute -right-[120px] -top-[150px]"
            src="../../../assets/images/circle.png" alt="circle" />
            
        <img class="w-[228px] h-[228px] absolute -left-[114px] -bottom-[114px] z-100"
            src="../../../assets/images/circle.png" alt="circle" />

        <div class="container flex justify-between items-center py-20">
            <div class="w-full flex">
                <div class="w-[40%]">
                    <div class="w-full relative">
                        <img class="w-full aspect-[5/5]" alt="tex1" src="../../../assets/images/education1.png" />
                    </div>
                </div>
                <div class="w-[60%] flex flex-col justify-center items-start px-8">
                    <div class="flex justify-start items-end mb-4">
                        <h3 class="text-4xl text-primary font-extrabold text-left">Sobre la carrera</h3>
                    </div>
                    <p class="tex-text text-xl mb-4 text-left">Recibe una formación práctica que te permitirá trabajar
                        en las mejores cadenas hoteleras y realizar línea de carrera. Vive tu carrera desde el primer
                        ciclo realizando visitas guiadas y participa de viajes internacionales a reconocidos hoteles y
                        resorts antes de terminar tu carrera.</p>

                    <div class="flex items-center mb-6">
                        <img class="w-[35px] mr-2" src="../../../assets/images/calendar.png" alt="calendar" />
                        <span class="text-primary font-medium">Duración: </span>
                        <span class="text-text mr-6">3 años</span>
                        <img class="w-[35px] mr-2" src="../../../assets/images/calendar.png" alt="calendar" />
                        <span class="text-primary font-medium">Frecuencia: </span>
                        <span class="text-text mr-6">Lunes a Viernes</span>
                        <img class="w-[35px] ml-3 mr-2" src="../../../assets/images/pin.png" alt="monitor" />
                        <span class="text-primary font-medium">Sede: </span>
                        <span class="text-text">San Isidro</span>
                    </div>
                    <button
                        class="bg-primary text-white px-6 py-3 flex items-center rounded-full mb-6 hover:bg-secondary">
                        MALLA CURRICULAR
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
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'EducationForthSection'
})

</script>