<script setup>
import HorizontalSidebar3 from '../../layouts/full/horizontal-sidebar/HorizontalSidebar3.vue';
import Table from '@/components/table/Tabley.vue';
// import LineChart from '@/views/charts/LineChart.vue';
</script>

<template>
    <HorizontalSidebar3 />
    <v-main>
        <v-container fluid class="page-wrapper pb-sm-15 pb-10">
            <Table />
            <!-- <br />
            <LineChart /> -->
        </v-container>
    </v-main>
</template>
