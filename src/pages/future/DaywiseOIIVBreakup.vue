<script setup lang="ts">
import HorizontalSidebar2 from '../../layouts/full/horizontal-sidebar/HorizontalSidebar2.vue';
import Table from '@/components/table/Tablex.vue';
// import LineChart from '@/views/charts/LineChart.vue';
</script>

<template>
    <HorizontalSidebar2 />
    <v-main>
        <v-container fluid class="page-wrapper pb-sm-15 pb-10">
            <Table />
            <!-- <br />
            <LineChart /> -->
        </v-container>
    </v-main>
</template>
