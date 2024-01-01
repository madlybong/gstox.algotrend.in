<script setup lang="ts">
import { RouterLink } from 'vue-router';
import RtlLightlogo from '@/assets/images/logos/dark-rtl-logo.svg';
</script>
<template>
    <div class="logo">
        <RouterLink to="/">
            <!-- <img :src="RtlLightlogo" alt="home" /> -->
            <img height="36" src="/assets/images/icon/Gstoxlogo.png" alt="Gstoxlogo">
        </RouterLink>
    </div>
</template>
