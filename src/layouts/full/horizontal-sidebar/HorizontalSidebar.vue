<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import { useCustomizerStore } from '@/stores/customizer';
// import HorizontalItems2 from './horizontalItems2';
// import NavItem from './NavItem/Index.vue';
// import NavCollapse from './NavCollapse/Index.vue';
// import VerticalSidebar from '../vertical-sidebar/VerticalSidebar.vue';
import { DatePicker } from "v-calendar";

const date = new Date();
var ISTTime = new Date(date.valueOf() + 19800000).toISOString();
const today = ref(ISTTime);
const backtest = ref(ISTTime);

const scriptsArr = ['All', 'Cash', 'FNO', 'Nifty 50'];
var scripts = ref('');

const buildup = ref('');
const buildupArr = ['Long Buildup', 'Short Buildup', 'Long Cover', 'Short Cover'];

const sectorArr = [
    'Auto',
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

function showResults() {
    console.log('scripts.value:', scripts.value);
};

const customizer = useCustomizerStore();
// const sidebarMenu = shallowRef(HorizontalItems2);
const { mdAndUp } = useDisplay();
</script>

<template>
    <template v-if="mdAndUp">
        <div class="horizontalMenu border-bottom">
            <div class="px-6 d-flex align-center gc-5">

                <div class="d-flex align-center gc-2">
                    <v-label>Today</v-label>
                    <div class="width">
                        <DatePicker class="d-flex" v-model.string="today">
                            <template #default="{ togglePopover, inputValue }">
                                <v-text-field v-model="today" :value="inputValue" hide-details="auto"
                                    @input="$emit('update:modelValue', today)"
                                    @update:focused="togglePopover"></v-text-field>
                            </template>
                        </DatePicker>
                    </div>
                </div>

                <div class="d-flex align-center gc-2">
                    <v-label>Backtest</v-label>
                    <div class="width">
                        <DatePicker class="d-flex" v-model.string="backtest">
                            <template #default="{ togglePopover, inputValue }">
                                <v-text-field v-model="backtest" :value="inputValue" hide-details="auto"
                                    @input="$emit('update:modelValue', backtest)"
                                    @update:focused="togglePopover"></v-text-field>
                            </template>
                        </DatePicker>
                    </div>
                </div>
                <!-- <li v-for="(item, i) in sidebarMenu" :key="i" class="navItem"> -->
                <!-- <NavCollapse :item="item" :level="0" v-if="item.children" />
                        <NavItem :item="item" v-else /> -->
                <!-- </li> -->

                <div class="width">
                    <v-autocomplete class="pt-6" v-model="scripts" label="Scripts" :items="scriptsArr"
                        variant="solo"></v-autocomplete>
                </div>

                <div class="width">
                    <v-autocomplete class="pt-6" v-model="buildup" label="Buildup" :items="buildupArr"
                        variant="solo"></v-autocomplete>
                </div>

                <div class="width">
                    <v-autocomplete class="pt-6" v-model="sector" label="Sector" :items="sectorArr"
                        variant="solo"></v-autocomplete>
                </div>

                <v-btn @click="showResults" color="primary">Show results</v-btn>
            </div>
        </div>
    </template>
    <!-- <div v-else class="mobile-menu">
        <VerticalSidebar />
    </div> -->
</template>
<style lang="scss"></style>