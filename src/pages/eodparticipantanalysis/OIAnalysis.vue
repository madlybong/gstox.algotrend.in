<script setup lang="ts">
// import Table1 from '@/components/table/Table1.vue';
import BarChart from '@/views/charts/BarChart.vue';
import { ref } from 'vue';
import HorizontalSidebar4 from '../../layouts/full/horizontal-sidebar/HorizontalSidebar4.vue';

const text = ref('oi');
</script>

<template>
    <HorizontalSidebar4 />
    <v-main>
        <v-container fluid class="page-wrapper">

            <v-btn-toggle class="d-flex flex-row mb-3" v-model="text" color="primary">
                <v-btn value="oi" class="flex-grow-1">
                    OPEN INTEREST
                </v-btn>

                <v-btn value="oich" class="flex-grow-1">
                    OI CHANGE
                </v-btn>
            </v-btn-toggle>

            <v-row>
                <v-col cols="12" md="12" lg="4" xl="4">
                    <BarChart />
                </v-col>
                <v-col cols="12" md="12" lg="8" xl="8">
                    <BarChart />
                </v-col>
            </v-row>

        </v-container>
    </v-main>
</template>
