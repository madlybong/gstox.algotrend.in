<script setup>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
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
    BarChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent,
    DataZoomComponent,
    ToolboxComponent
]);

provide(THEME_KEY, 'light');

const option = ref({
    tooltip: { formatter: '{a} : {c}' },
    legend: {
        data: ['Total Calls', 'Total Puts']
    },
    xAxis: {
        data: ['Total Open Interest']
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
            magicType: {
                type: ['stack']
            },
        },
        tooltip: { // same as option.tooltip
            show: true,
            formatter: function (param) {
                return '<div>' + param.title + '</div>'; // user-defined DOM structure
            }
        }
    },
    series: [
        {
            name: 'Total Calls',
            type: 'bar',
            data: [15]
        },
        {
            name: 'Total Puts',
            type: 'bar',
            data: [20]
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
    height: 42vh;
}
</style>
