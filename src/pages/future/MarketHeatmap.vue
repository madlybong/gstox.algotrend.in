<!-- <script setup lang="ts">
import HorizontalSidebar from '../../layouts/full/horizontal-sidebar/HorizontalSidebar.vue';
import Table1 from '@/components/table/Table1.vue';
</script>

<template>
    <HorizontalSidebar />
    <v-main>
        <v-container fluid class="page-wrapper pb-sm-15 pb-10">
            <Table1 />
        </v-container>
    </v-main>
</template> -->


<script setup lang="ts">
import HorizontalSidebar from '../../layouts/full/horizontal-sidebar/HorizontalSidebar.vue';
import Table1 from '@/components/table/Table1.vue';
import LineChart from '@/views/charts/LineChart.vue';
import Heatmap from '@/views/charts/Heatmap.vue';
</script>

<template>
    <HorizontalSidebar />
    <v-main>
        <v-container fluid class="page-wrapper pb-sm-15 pb-10">
            <v-row class="mt-3">
                <!-- <v-col cols="5"> -->
                    <v-text-field hide-details prepend-icon="mdi-magnify" single-line></v-text-field>
                <!-- </v-col> -->
            </v-row>

            <v-row class="mb-6">
                <v-col cols="7">
                    <Table1 />
                </v-col>
                <v-col cols="5">
                    <LineChart />
                </v-col>
            </v-row>

            <v-row>
                <Heatmap />
            </v-row>
        </v-container>
    </v-main>
</template>
