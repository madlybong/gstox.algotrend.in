<script setup lang="ts">
import UiParentCard from '@/components/shared/UiParentCard.vue';
import { ref } from 'vue';

let companies = [
    {
        companyName: 'TATA MOTORS',
        shareValue: 400.95,
        logoURL: '/assets/images/companylogo/tata-motors.png',
        changePercentage: 1.63,
        backgroundColor: '#027A2E'
    },
    {
        companyName: 'TATA MOTORS',
        shareValue: 400.95,
        logoURL: '/assets/images/companylogo/tata-motors.png',
        changePercentage: 1.63,
        backgroundColor: '#119F57'
    },
    {
        companyName: 'TATA MOTORS',
        shareValue: 400.95,
        logoURL: '/assets/images/companylogo/tata-motors.png',
        changePercentage: 1.63,
        backgroundColor: '#77BF8A'
    },
    {
        companyName: 'TATA MOTORS',
        shareValue: 400.95,
        logoURL: '/assets/images/companylogo/tata-motors.png',
        changePercentage: 1.63,
        backgroundColor: '#858383'
    },
    {
        companyName: 'TATA MOTORS',
        shareValue: 400.95,
        logoURL: '/assets/images/companylogo/tata-motors.png',
        changePercentage: 1.63,
        backgroundColor: '#F5808B'
    },
    {
        companyName: 'TATA MOTORS',
        shareValue: 400.95,
        logoURL: '/assets/images/companylogo/tata-motors.png',
        changePercentage: 1.63,
        backgroundColor: '#C91E2D'
    },
    {
        companyName: 'TATA MOTORS',
        shareValue: 400.95,
        logoURL: '/assets/images/companylogo/tata-motors.png',
        changePercentage: 1.63,
        backgroundColor: '#A11212'
    },
    {
        companyName: 'TATA MOTORS',
        shareValue: 400.95,
        logoURL: '/assets/images/companylogo/tata-motors.png',
        changePercentage: 1.63,
        backgroundColor: '#027A2E'
    },
    {
        companyName: 'TATA MOTORS',
        shareValue: 400.95,
        logoURL: '/assets/images/companylogo/tata-motors.png',
        changePercentage: 1.63,
        backgroundColor: '#119F57'
    },
    {
        companyName: 'TATA MOTORS',
        shareValue: 400.95,
        logoURL: '/assets/images/companylogo/tata-motors.png',
        changePercentage: 1.63,
        backgroundColor: '#77BF8A'
    },
    {
        companyName: 'TATA MOTORS',
        shareValue: 400.95,
        logoURL: '/assets/images/companylogo/tata-motors.png',
        changePercentage: 1.63,
        backgroundColor: '#858383'
    },
    {
        companyName: 'TATA MOTORS',
        shareValue: 400.95,
        logoURL: '/assets/images/companylogo/tata-motors.png',
        changePercentage: 1.63,
        backgroundColor: '#F5808B'
    },
    {
        companyName: 'TATA MOTORS',
        shareValue: 400.95,
        logoURL: '/assets/images/companylogo/tata-motors.png',
        changePercentage: 1.63,
        backgroundColor: '#C91E2D'
    },
    {
        companyName: 'TATA MOTORS',
        shareValue: 400.95,
        logoURL: '/assets/images/companylogo/tata-motors.png',
        changePercentage: 1.63,
        backgroundColor: '#A11212'
    }
]

const sectorArr = [
    'Nifty Bank',
    'Bank',
    'Financial Services',
    'Financial Services 25/50',
    'Financial Services Ex Bank',
    'FMCG',
    'Healthcare',
    'IT',
    'Media',
    'Metal',
    'Pharma',
    'Private Bank',
    'PSU Bank',
    'Realty',
    'Consumer Durables',
    'Oil and Gas',
    'MidSmall Financial Services',
    'MidSmall Healthcare',
    'MidSmall IT & Telecom'
];
var sector = ref('');
</script>

<template>
    <v-card class="border" elevation="0">
        <UiParentCard title="Heatmap">
            <v-row align="center" justify="space-between">
                <v-col cols="12" md="4" lg="4" xl="3">
                    <v-autocomplete class="pt-6" v-model="sector" label="Nifty Bank" :items="sectorArr"
                        variant="solo"></v-autocomplete>
                </v-col>
                <v-col cols="12" md="8" lg="8" xl="6">
                    <div class="d-flex align-center ga-3 flex-wrap">
                        <div class="lw lw1 rounded-pill text-center">Above +5%</div>
                        <div class="lw lw2 rounded-pill text-center">+2 to +5 %</div>
                        <div class="lw lw3 rounded-pill text-center">0 to +2 %</div>
                        <div class="lw lw4 rounded-pill text-center">0 %</div>
                        <div class="lw lw5 rounded-pill text-center">-2 to 0 %</div>
                        <div class="lw lw6 rounded-pill text-center">-5 to -2 %</div>
                        <div class="lw lw7 rounded-pill text-center">Below -5%</div>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="pa-1 text-white" cols="6" md="3" lg="2" xl="1" v-for="company in companies">
                    <div :style="{ backgroundColor: company.backgroundColor, height: '130px', borderRadius: '3px' }">
                        <h1 class="pa-3 text-right">{{ company.changePercentage }} %</h1>
                        <div class="d-flex align-center mt-6 mx-3 ga-2">
                            <div class="d-flex align-center justify-center"
                                style="background-color: #fff; width: 50px; height: 50px; border-radius: 50px;">
                                <img style="{ width: auto; height: 30px; }" :src="company.logoURL" alt="logo">
                            </div>
                            <div>
                                <h3>{{ company.companyName }}</h3>
                                <h4>₹ {{ company.shareValue }}</h4>
                            </div>
                        </div>
                    </div>
                </v-col>
                <v-spacer />
            </v-row>
        </UiParentCard>
    </v-card>
</template>
