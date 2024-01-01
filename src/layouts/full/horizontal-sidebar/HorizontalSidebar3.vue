<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import { useDisplay } from 'vuetify';
import { useCustomizerStore } from '@/stores/customizer';
import HorizontalItems3 from './horizontalItems3';
import NavItem from './NavItem/Index.vue';
import NavCollapse from './NavCollapse/Index.vue';
import VerticalSidebar from '../vertical-sidebar/VerticalSidebar.vue';
import { DatePicker } from "v-calendar";

const date = new Date();
var ISTTime = new Date(date.valueOf() + 19800000).toISOString();
const today = ref(ISTTime);
const backtest = ref(ISTTime);

const buildup = ref('');
const buildupArr = ['All', 'Long Buildup', 'Short Buildup', 'Long Cover', 'Short Cover'];

const deliveryPercent = ref('');
const deliveryPercentArr = ['All', 'Increasing', 'Decreasing'];

const tq = ref('');
const tqArr = ['All', 'Increasing', 'Decreasing'];

function showResults() {
    console.log('scripts.value:', buildup.value);
};

const customizer = useCustomizerStore();
const sidebarMenu = shallowRef(HorizontalItems3);
const { mdAndUp } = useDisplay();
// function subIsActive(input: any) {
//     const paths = Array.isArray(input) ? input : [input];
//     return paths.some((path) => {
//         return; //$route.path.indexOf(path) === 0; // current path starts with this path string
//     });
// }
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
                <!-- <div v-for="(item, i) in sidebarMenu" :key="i" class="navItem">
                    <NavCollapse :item="item" :level="0" v-if="item.children" />
                    <NavItem :item="item" v-else />
                </div> -->

                <div class="width">
                    <v-autocomplete class="pt-6" v-model="buildup" label="Oi Buildup" :items="buildupArr"
                        variant="solo"></v-autocomplete>
                </div>

                <div class="width">
                    <v-autocomplete class="pt-6" v-model="deliveryPercent" label="Delivery %" :items="deliveryPercentArr"
                        variant="solo"></v-autocomplete>
                </div>

                <div class="width">
                    <v-autocomplete class="pt-6" v-model="tq" label="TQ/NT" :items="tqArr" variant="solo"></v-autocomplete>
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
