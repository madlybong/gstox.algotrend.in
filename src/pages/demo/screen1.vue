<script setup lang="ts">
import HorizontalSidebar from '../../layouts/full/horizontal-sidebar/HorizontalSidebar.vue';
import Table1 from '@/components/table/Table1.vue';
import LineChart from '@/views/charts/LineChart.vue';
</script>

<template>
    <HorizontalSidebar />
    <v-main>
        <v-container fluid class="page-wrapper pb-sm-15 pb-10">
            <v-row>
                <v-col>
                    <Table1 />
                </v-col>
                <v-col>
                    <LineChart />
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
