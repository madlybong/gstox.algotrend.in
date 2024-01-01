<script setup lang="ts">
import { basicTableData } from '@/_mockApis/components/table/basicTables2';
import { ref } from 'vue';

var itemsPerPage = ref(-1);

const headers = [
    {
        title: 'Calls',
        align: 'center',
        children: [
            { title: 'Build Up', value: 'Build Up', key: 'Build Up' },
            { title: 'Trend', value: 'Trend', key: 'Trend' },
            { title: 'Time', value: 'Time', key: 'Time' },
            { title: 'Vega', value: 'Vega', key: 'Vega' },
            { title: 'Theta', value: 'Theta', key: 'Theta' },
            { title: 'Gamma', value: 'Gamma', key: 'Gamma' },
            { title: 'Delta', value: 'Delta', key: 'Delta' },
            { title: 'IV Chg', value: 'IV Chg', key: 'IV Chg' },
            { title: 'IV', value: 'IV', key: 'IV' },
            { title: 'OI Chg', value: 'OI Chg', key: 'OI Chg' },
            { title: 'OI', value: 'OI', key: 'OI' },
            { title: 'Volume', value: 'Volume', key: 'Volume' },
            { title: 'Chg (Pts)', value: 'Chg (Pts)', key: 'Chg (Pts)' },
            { title: 'LTP', value: 'LTP', key: 'LTP' },
            { title: 'VWAP', value: 'VWAP', key: 'VWAP' },
            { title: 'Bid', value: 'Bid', key: 'Bid' },
            { title: 'Ask', value: 'Bid', key: 'Bid' }
        ]
    },
    { title: 'Strike Price', value: 'Strike Price', key: 'Strike Price' },
    {
        title: 'Puts',
        align: 'center',
        children: [
            { title: 'Ask', value: 'AskP', key: 'AskP' },
            { title: 'Bid', value: 'BidP', key: 'BidP' },
            { title: 'VWAP', value: 'VWAPP', key: 'VWAPP' },
            { title: 'LTP', value: 'LTPP', key: 'LTPP' },
            { title: 'Chg (Pts)', value: 'Chg (Pts)P', key: 'Chg (Pts)P' },
            { title: 'Volume', value: 'VolumeP', key: 'VolumeP' },
            { title: 'OI', value: 'OIP', key: 'OIP' },
            { title: 'OI Chg', value: 'OI ChgP', key: 'OI ChgP' },
            { title: 'IV', value: 'IVP', key: 'IVP' },
            { title: 'IV Chg', value: 'IV ChgP', key: 'IV ChgP' },
            { title: 'Delta', value: 'DeltaP', key: 'DeltaP' },
            { title: 'Gamma', value: 'GammaP', key: 'GammaP' },
            { title: 'Theta', value: 'ThetaP', key: 'ThetaP' },
            { title: 'Vega', value: 'VegaP', key: 'VegaP' },
            { title: 'PCR-OI', value: 'PCR-OIP', key: 'PCR-OIP' },
            { title: 'PCR-Vol', value: 'PCR-VolP', key: 'PCR-VolP' },
            { title: 'Time', value: 'TimeP', key: 'TimeP' },
            { title: 'Trend', value: 'TrendP', key: 'TrendP' },
            { title: 'Build Up', value: 'Build UpP', key: 'Build UpP' }
        ]
    }
]

function calculate(item: any) {
    if (item.value === 'OI Chg') {
        return 'Total CE OI Chg';
    }
    else if (item.value === 'OI') {
        return 'Total CE OI';
    }
    else if (item.value === 'Volume') {
        return 'Total CE Volume';
    }
    else if (item.value === 'Strike Price') {
        return 'PE-CE OI Chg';
    }
    if (item.value === 'OI ChgP') {
        return 'Total PE OI Chg';
    }
    else if (item.value === 'OIP') {
        return 'Total PE OI';
    }
    else if (item.value === 'VolumeP') {
        return 'Total PE Volume';
    }
    else {
        return '';
    }
};

function calculate2(item: any) {
    let toichce = 0;
    let toichpe = 0;
    let toice = 0;
    let toipe = 0;
    let tvolumechce = 0;
    let tvolumechpe = 0;
    let strike = 0;

    for (let rows of basicTableData) {
        toichce += parseInt(rows['OI Chg']);
        toichpe += parseInt(rows['OI ChgP']);
        toice += parseInt(rows['OI']);
        toipe += parseInt(rows['OIP']);
        tvolumechce += parseInt(rows['Volume']);
        tvolumechpe += parseInt(rows['VolumeP']);
        strike += parseInt(rows['Strike Price']);
    }

    if (item.value === 'OI Chg') {
        return toichce;
    }
    else if (item.value === 'OI') {
        return toice;
    }
    else if (item.value === 'Volume') {
        return tvolumechce;
    }
    else if (item.value === 'Strike Price') {
        return strike;
    }
    if (item.value === 'OI ChgP') {
        return toichpe;
    }
    else if (item.value === 'OIP') {
        return toipe;
    }
    else if (item.value === 'VolumeP') {
        return tvolumechpe;
    }
    else {
        return '';
    }
};

</script>
<template>
    <v-card class="mt-3" elevation="0">

        <v-data-table class="text-center mt-5 flex-table fixed-header-table" :headers="headers" :items="basicTableData"
            density="compact" v-model:items-per-page="itemsPerPage" :items-per-page-options="[{ value: -1, title: 'All' }]">
            <template v-slot:headers="{ columns, isSorted, getSortIcon, toggleSort }">
                <tr class="fixedHeader" style="{ position: 'sticky', top: '0', 'z-index': '1000', background: 'white' }">
                    <th class="font-weight-bold text-center bgColorth text-white" colspan="17">Calls</th>
                    <th class="font-weight-bold text-center bgColorth3"></th>
                    <th class="bgColorth2 py-1 font-weight-bold text-center text-white" colspan="19">Puts</th>
                </tr>
                <tr class="fixedHeader">
                    <th v-for="column in columns" :key="column.key"
                        :class="`${column.title === 'Strike Price' ? 'bgColor2' : ''} text-center`">
                        <span class="cursor-pointer font-weight-bold text-center" @click="() => toggleSort(column)">{{
                            column.title
                        }}</span>
                        <template v-if="isSorted(column)">
                            <v-icon :icon="getSortIcon(column)"></v-icon>
                        </template>
                    </th>
                </tr>
            </template>

            <template v-slot:body="{ items, columns }">
                <tr v-for="item in items">
                    <td class="bgColor1 font-weight-bold">{{ item['Build Up'] }}</td>
                    <td class="colorRed">{{ item['Trend'] }}</td>
                    <td class="">{{ item['Time'].slice(11, -1) }}</td>
                    <td class="">{{ item['Vega'] }}</td>
                    <td class="">{{ item['Theta'] }}</td>
                    <td class="">{{ item['Gamma'] }}</td>
                    <td class="">{{ item['Delta'] }}</td>
                    <td class="">{{ item['IV Chg'] }}</td>
                    <td class="">{{ item['IV'] }}</td>
                    <td class="">{{ item['OI Chg'] }}</td>
                    <td class="">{{ item['OI'] }}</td>
                    <td class="">{{ item['Volume'] }}</td>
                    <td class="">{{ item['Chg (Pts)'] }}</td>
                    <td class="">{{ item['LTP'] }}</td>
                    <td class="">{{ item['VWAP'] }}</td>
                    <td class="">{{ item['Bid'] }}</td>
                    <td class="">{{ item['Ask'] }}</td>
                    <td class="bgColor2 color1 ">{{ item['Strike Price'] }}</td>
                    <td class="">{{ item['AskP'] }}</td>
                    <td class="">{{ item['BidP'] }}</td>
                    <td class="">{{ item['VWAPP'] }}</td>
                    <td class="">{{ item['LTPP'] }}</td>
                    <td class="">{{ item['Chg (Pts)P'] }}</td>
                    <td class="">{{ item['VolumeP'] }}</td>
                    <td class="">{{ item['OIP'] }}</td>
                    <td class="">{{ item['OI ChgP'] }}</td>
                    <td class="">{{ item['IVP'] }}</td>
                    <td class="">{{ item['IV ChgP'] }}</td>
                    <td class="">{{ item['DeltaP'] }}</td>
                    <td class="">{{ item['GammaP'] }}</td>
                    <td class="">{{ item['ThetaP'] }}</td>
                    <td class="">{{ item['VegaP'] }}</td>
                    <td class="">{{ item['TimeP'].slice(11, -1) }}</td>
                    <td class="">{{ item['PCR-OIP'] }}</td>
                    <td class="">{{ item['PCR-VolP'] }}</td>
                    <td class="colorRed">{{ item['TrendP'] }}</td>
                    <td class="bgColor1 font-weight-bold">{{ item['Build UpP'] }}</td>
                </tr>

                <tr class="fixedHeader">
                    <td class="text-subtitle-2 font-weight-medium" v-for="item in columns">{{ calculate(item) }}</td>
                </tr>
                <tr class="fixedHeader">
                    <td class="text-subtitle-2 font-weight-medium" v-for="item in columns">{{ calculate2(item) }}</td>
                </tr>
            </template>
        </v-data-table>
    </v-card>
</template>
