<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import { useCustomizerStore } from '@/stores/customizer';
// import HorizontalItems2 from './horizontalItems2';
// import NavItem from './NavItem/Index.vue';
// import NavCollapse from './NavCollapse/Index.vue';
// import VerticalSidebar from '../vertical-sidebar/VerticalSidebar.vue';
import { DatePicker } from "v-calendar";
// import { IconCaretDownFilled } from 'vue-tabler-icons';

const date = new Date();
var ISTTime = new Date(date.valueOf() + 19800000).toISOString();
const expiryDate = ref(ISTTime);

const selectSymbolArr = ['All', 'Cash', 'FNO', 'Nifty 50'];
var selectSymbol = ref('');

function showResults() {
    console.log('selectSymbol.value:', selectSymbol.value);
};

const customizer = useCustomizerStore();
// const sidebarMenu = shallowRef(HorizontalItems2);
const { mdAndUp } = useDisplay();
</script>

<template>
    <template v-if="mdAndUp">
        <div class="horizontalMenu">
            <div class="d-flex justify-space-between text-body-2">
                <div class="d-flex align-center gc-2">

                    <div style="{ width: 100px }">
                        <v-radio-group class="pt-5" inline>
                            <v-radio label="Latest" value="latest"></v-radio>
                            <v-radio label="Historical" value="historical"></v-radio>
                        </v-radio-group>
                    </div>

                    <div class="width">
                        <v-autocomplete class="pt-6" v-model="selectSymbol" label="Select Symbol" :items="selectSymbolArr"
                            variant="solo"></v-autocomplete>
                    </div>

                    <div class="d-flex align-center gc-2">
                        <v-label>Expiry Date</v-label>
                        <div class="width">
                            <DatePicker class="d-flex" v-model.string="expiryDate">
                                <template #default="{ togglePopover, inputValue }">
                                    <v-text-field v-model="expiryDate" :value="inputValue" hide-details="auto"
                                        @input="$emit('update:modelValue', expiryDate)"
                                        @update:focused="togglePopover"></v-text-field>
                                </template>
                            </DatePicker>
                        </div>
                    </div>

                    <v-btn @click="showResults" color="primary">Show results</v-btn>

                    <div>
                        <v-radio-group class="pt-5" inline>
                            <v-radio label="Near ATM Strikes" value="atm"></v-radio>
                            <v-radio label="All Strikes" value="all"></v-radio>
                        </v-radio-group>
                    </div>
                </div>
                <div class="d-flex align-end">
                    <div>
                        <p class="text-body-2 font-weight-bold">NIFTY-25JAN24 21861.30 -81.00 (-0.37%) (29-Dec-2023 EOD )
                        </p>
                        <p class="text-body-2 font-weight-bold">Fair Price 21764. -59.30 (-0.27%)</p>
                    </div>
                </div>
            </div>

            <div class="d-flex align-center ga-3 flex-wrap mt-6 ms-6">
                <v-btn class="lwc bg-primary text-body-1 font-weight-bold rounded-pill text-center"><u>G</u>REEKS</v-btn>
                <v-btn class="lwc bg-primary text-body-1 font-weight-bold rounded-pill text-center"><u>I</u>V</v-btn>
                <v-btn class="lwc bg-primary text-body-1 font-weight-bold rounded-pill text-center"><u>O</u>I</v-btn>
                <v-btn class="lwc bg-primary text-body-1 font-weight-bold rounded-pill text-center"><u>P</u>RICE</v-btn>
                <v-btn class="lwc bg-primary text-body-1 font-weight-bold rounded-pill text-center"><u>V</u>OLUME</v-btn>
                <v-btn class="lwc bg-primary text-body-1 font-weight-bold rounded-pill text-center">PC<u>R</u></v-btn>
                <v-btn class="lwc bg-primary text-body-1 font-weight-bold rounded-pill text-center"><u>T</u>REND</v-btn>
                <v-btn class="lwc bg-primary text-body-1 font-weight-bold rounded-pill text-center">TI<u>M</u>E</v-btn>
                <v-btn class="lwc bg-primary text-body-1 font-weight-bold rounded-pill text-center"><u>B</u>UILDUP</v-btn>
                <v-btn class="lwc bg-primary text-body-1 font-weight-bold rounded-pill text-center">VWAP/BID/<u>A</u>SK</v-btn>
            </div>
        </div>
    </template>
    <!-- <div v-else class="mobile-menu">
        <VerticalSidebar />
    </div> -->
</template>
<style lang="scss"></style>