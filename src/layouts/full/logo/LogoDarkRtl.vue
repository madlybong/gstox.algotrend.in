<script setup lang="ts">
import { RouterLink } from 'vue-router';
import RtlDarklogo from '@/assets/images/logos/light-logo-rtl.svg';
</script>
<template>
    <div class="logo">
        <RouterLink to="/">
            <!-- <img :src="RtlDarklogo" alt="home" /> -->
            <img height="36" src="/assets/images/icon/Gstoxlogo.png" alt="Gstoxlogo">
        </RouterLink>
    </div>
</template>
