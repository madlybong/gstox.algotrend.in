<script setup>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart } from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent,
    DataZoomComponent,
    ToolboxComponent
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

import UiParentCard from '@/components/shared/UiParentCard.vue';

use([
    CanvasRenderer,
    LineChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent,
    DataZoomComponent,
    ToolboxComponent
]);

provide(THEME_KEY, 'light');

const option = ref({
    // title: {
    //     text: 'NIFTY-21DEC23 \nTotal OI',
    // },
    tooltip: { formatter: '{a} : {c}' },
    legend: {
        data: ['Total Calls', 'Total Puts']
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        axisLabel: {
            formatter: '{value} Cr'
        }
    },
    dataZoom: [
        {
            id: 'dataZoomX',
            type: 'slider',
            xAxisIndex: [0],
            filterMode: 'filter'
        }
    ],
    toolbox: {
        show: true,
        showTitle: false, // hide the default text so they don't overlap each other
        feature: {
            saveAsImage: {
                show: true,
                title: 'Save As Image'
            },
            // magicType: {
            //   type: ['stack']
            // },
        },
        tooltip: { // same as option.tooltip
            show: true,
            formatter: function (param) {
                return '<div>' + param.title + '</div>'; // user-defined DOM structure
            }
        }
    },
    // grid: {
    //     top: '35%'
    // },
    series: [
        {
            name: 'Total Calls',
            type: 'line',
            data: [150, 230, 224, 218, 135, 147, 260],
            color: '#008000'
        },
        {
            name: 'Total Puts',
            type: 'line',
            data: [180, 200, 256, 176, 120, 150, 290],
            color: '#FF0000'
        }
    ]
});
</script>

<template>
    <v-card class="border" elevation="0">
        <UiParentCard title="NIFTY-21DEC23 Total OI">
            <v-chart class="chart" :option="option" />
        </UiParentCard>
    </v-card>
</template>

<style scoped>
.chart {
    height: 100vh;
}
</style>
