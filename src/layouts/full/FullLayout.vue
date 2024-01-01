<script setup lang="ts">
import { RouterView } from 'vue-router';
import HorizontalHeader from './horizontal-header/HorizontalHeader.vue';
import { useCustomizerStore } from '../../stores/customizer';

const customizer = useCustomizerStore();
</script>

<template>
    <v-locale-provider>
        <v-app class='horizontalLayout'>
            <HorizontalHeader />
            <RouterView />
        </v-app>
    </v-locale-provider>
</template>
