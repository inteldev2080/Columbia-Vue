<template>
    <div class="w-full flex flex-col bg-[#F8F9FA] py-8">
        <div class="container w-full relative flex justify-between py-12">
            <div class="w-[calc(60%_-_32px)]">
                <div class="w-full">
                    <div class="w-full">
                        <div class="flex items-center py-4 mb-4">
                            <img class="h-[30px] mr-2" alt="book" src="../../../assets/images/b-certific.png" />
                            <h3 class="font-semibold text-2xl text-text">Datos de matrícula</h3>
                        </div>
                        <div class="w-full flex items-stretch justify-between mb-6">
                            <input class="w-[calc(50%_-_10px)] px-3 py-2 border border-text text-xl rounded-md"
                                type="text" placeholder="Soles" />
                            <select class="w-[calc(50%_-_10px)] px-3 py-2 border border-text text-xl rounded-md">
                                <option>Tipo de pago</option>
                            </select>
                        </div>
                        <div class="w-full flex items-stretch justify-between mb-6">
                            <select class="w-[calc(50%_-_10px)] px-3 py-2 border border-text text-xl rounded-md">
                                <option>Sede</option>
                            </select>
                            <select class="w-[calc(50%_-_10px)] px-3 py-2 border border-text text-xl rounded-md">
                                <option>Carrera</option>
                            </select>
                        </div>
                        <div class="w-full flex items-stretch justify-between mb-6">
                            <select class="w-[calc(50%_-_10px)] px-3 py-2 border border-text text-xl rounded-md">
                                <option>Turno</option>
                            </select>
                            <select class="w-[calc(50%_-_10px)] px-3 py-2 border border-text text-xl rounded-md">
                                <option>Grupo</option>
                            </select>
                        </div>
                        <div class="w-full flex justify-end mb-6">
                            <button
                                class="bg-[#CED4DA] text-[#6C757D] text-sm mb-2 px-5 py-2 flex items-center rounded-full">
                                CONTINUAR
                                <svg class="ml-2" width="15" height="13" viewBox="0 0 15 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M1.66671 7.33268H11.5542L8.52671 10.966C8.23171 11.3193 8.28004 11.8452 8.63337 12.1393C8.98754 12.4343 9.51254 12.386 9.80754 12.0327L13.9742 7.03268C14.0067 6.99352 14.0225 6.94768 14.0467 6.90435C14.0667 6.86935 14.0909 6.83935 14.1059 6.80102C14.1434 6.70518 14.1659 6.60435 14.1659 6.50268C14.1659 6.50185 14.1667 6.50018 14.1667 6.49935C14.1667 6.49852 14.1659 6.49685 14.1659 6.49602C14.1659 6.39435 14.1434 6.29352 14.1059 6.19768C14.0909 6.15935 14.0667 6.12935 14.0467 6.09435C14.0225 6.05102 14.0067 6.00518 13.9742 5.96602L9.80754 0.966016C9.64171 0.768516 9.40504 0.666016 9.16671 0.666016C8.97837 0.666016 8.78921 0.729349 8.63337 0.859349C8.28004 1.15352 8.23171 1.67935 8.52671 2.03268L11.5542 5.66602H1.66671C1.20671 5.66602 0.833374 6.03935 0.833374 6.49935C0.833374 6.95935 1.20671 7.33268 1.66671 7.33268Z"
                                        fill="#6C757D" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <hr class="border-b-2 border-primary my-6" />
                    <div class="w-full">
                        <div class="flex items-center py-4 mb-4">
                            <img class="h-[30px] mr-2" alt="book" src="../../../assets/images/b-person.png" />
                            <h3 class="font-semibold text-2xl text-text">Datos personales</h3>
                        </div>
                        <div class="w-full flex items-stretch justify-between mb-6">
                            <input class="w-full px-3 py-2 border border-text text-xl rounded-md" type="text"
                                placeholder="Nombres y Apellidos" />
                        </div>
                        <div class="w-full flex items-stretch justify-between mb-6">
                            <select class="w-[calc(50%_-_10px)] px-3 py-2 border border-text text-xl rounded-md">
                                <option>Sede</option>
                            </select>
                            <select class="w-[calc(50%_-_10px)] px-3 py-2 border border-text text-xl rounded-md">
                                <option>Carrera</option>
                            </select>
                        </div>
                        <div class="w-full flex items-stretch justify-between mb-6">
                            <select class="w-[calc(50%_-_10px)] px-3 py-2 border border-text text-xl rounded-md">
                                <option>Turno</option>
                            </select>
                            <select class="w-[calc(50%_-_10px)] px-3 py-2 border border-text text-xl rounded-md">
                                <option>Grupo</option>
                            </select>
                        </div>
                        <div class="w-full flex justify-between mb-6">
                            <div class="flex items-center">
                                <input id="check" type="checkbox" class="w-[15px]" />
                                <label for="check" class="text-text ml-2">Acepto las Políticas de Protección de
                                    Datos</label>
                            </div>
                            <button
                                class="bg-[#CED4DA] text-[#6C757D] text-sm mb-2 px-5 py-2 flex items-center rounded-full">
                                CONTINUAR
                                <svg class="ml-2" width="15" height="13" viewBox="0 0 15 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M1.66671 7.33268H11.5542L8.52671 10.966C8.23171 11.3193 8.28004 11.8452 8.63337 12.1393C8.98754 12.4343 9.51254 12.386 9.80754 12.0327L13.9742 7.03268C14.0067 6.99352 14.0225 6.94768 14.0467 6.90435C14.0667 6.86935 14.0909 6.83935 14.1059 6.80102C14.1434 6.70518 14.1659 6.60435 14.1659 6.50268C14.1659 6.50185 14.1667 6.50018 14.1667 6.49935C14.1667 6.49852 14.1659 6.49685 14.1659 6.49602C14.1659 6.39435 14.1434 6.29352 14.1059 6.19768C14.0909 6.15935 14.0667 6.12935 14.0467 6.09435C14.0225 6.05102 14.0067 6.00518 13.9742 5.96602L9.80754 0.966016C9.64171 0.768516 9.40504 0.666016 9.16671 0.666016C8.97837 0.666016 8.78921 0.729349 8.63337 0.859349C8.28004 1.15352 8.23171 1.67935 8.52671 2.03268L11.5542 5.66602H1.66671C1.20671 5.66602 0.833374 6.03935 0.833374 6.49935C0.833374 6.95935 1.20671 7.33268 1.66671 7.33268Z"
                                        fill="#6C757D" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-[40%]">
                <div class="flex items-center py-4 mb-4">
                    <h3 class="font-semibold text-2xl text-text">Resumen de tu compra</h3>
                </div>
                <hr class="border-b-2 border-primary my-4" />
                <div class="flex">
                    <div class="aspect-[1/1] flex items-center p-6 bg-[#E9ECEF] rounded-xl">
                        <img class="w-[110px]" src="../../../assets/favicon.png" alt="logo" />
                    </div>
                    <div class="px-6 flex flex-col justify-center">
                        <h5 class="text-text font-extrabold">Especialidad</h5>
                        <p class="text-text mb-2">Aviación Comercial</p>
                        <p class="text-primary font-semibold">S/1,200.00</p>
                    </div>
                </div>
                <hr class="border-b-2 border-primary my-4" />
                <div class="flex justify-between items-center pb-4">
                    <span class="text-text font-extrabold">Total</span>
                    <span class="text-text font-extrabold">S/1,200.00</span>
                </div>
                <div class="w-full flex justify-end mb-6">
                    <button
                        class="bg-[#CED4DA] uppercase text-[#6C757D] text-sm mb-2 px-5 py-2 flex items-center rounded-full">
                        realizar pago
                        <svg class="ml-2" width="15" height="13" viewBox="0 0 15 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.66671 7.33268H11.5542L8.52671 10.966C8.23171 11.3193 8.28004 11.8452 8.63337 12.1393C8.98754 12.4343 9.51254 12.386 9.80754 12.0327L13.9742 7.03268C14.0067 6.99352 14.0225 6.94768 14.0467 6.90435C14.0667 6.86935 14.0909 6.83935 14.1059 6.80102C14.1434 6.70518 14.1659 6.60435 14.1659 6.50268C14.1659 6.50185 14.1667 6.50018 14.1667 6.49935C14.1667 6.49852 14.1659 6.49685 14.1659 6.49602C14.1659 6.39435 14.1434 6.29352 14.1059 6.19768C14.0909 6.15935 14.0667 6.12935 14.0467 6.09435C14.0225 6.05102 14.0067 6.00518 13.9742 5.96602L9.80754 0.966016C9.64171 0.768516 9.40504 0.666016 9.16671 0.666016C8.97837 0.666016 8.78921 0.729349 8.63337 0.859349C8.28004 1.15352 8.23171 1.67935 8.52671 2.03268L11.5542 5.66602H1.66671C1.20671 5.66602 0.833374 6.03935 0.833374 6.49935C0.833374 6.95935 1.20671 7.33268 1.66671 7.33268Z"
                                fill="#6C757D" />
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
    name: 'PaymentSecondSection'
})

</script>