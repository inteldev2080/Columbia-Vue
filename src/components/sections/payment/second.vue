<template>
    <div class="w-full flex flex-col bg-white">
        <div class="container w-full relative flex items-center justify-between py-12">
            <h3 class="text-primary font-extrabold text-5xl w-[260px]">
                Métodos de pago
            </h3>
            <div class="flex">
                <img class="h-[94px] ml-4" alt="payment" src="../../../assets/images/payment.png" />
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