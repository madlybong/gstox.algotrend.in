<script setup lang="ts">
// import { ref } from 'vue';
// import QuickLinks from './QuickLinks.vue';
// import AppsLink from './AppsLink.vue';
// import { HelpIcon, ChevronDownIcon } from 'vue-tabler-icons';

import { ref, shallowRef } from 'vue';
import { useDisplay } from 'vuetify';
import { useCustomizerStore } from '@/stores/customizer';
import HorizontalItems from '../horizontal-sidebar/horizontalItems';
import NavItem from '../horizontal-sidebar/NavItem/Index.vue';
import NavCollapse from '../horizontal-sidebar/NavCollapse/Index.vue';
import VerticalSidebar from '../vertical-sidebar/VerticalSidebar.vue';

const customizer = useCustomizerStore();
const sidebarMenu = shallowRef(HorizontalItems);
const { mdAndUp } = useDisplay();
</script>

<template>
    <!-- <v-menu open-on-hover :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <v-btn class="hidden-sm-and-down" rounded="sm" variant="text" color="primary" v-bind="props">
                A <ChevronDownIcon size="16" class="mt-1 ml-1" />
            </v-btn>
        </template>
        <v-sheet width="900" height="382" elevation="10" rounded="md" class="pa-4 pb-0">
            <div>
                <v-row>
                    <v-col cols="12" lg="8" class="d-flex py-0">
                        <div class="pa-4 pb-0 pr-0">
                            <AppsLink />
                            <v-divider class="mt-6"></v-divider>
                            <div class="pa-5 pl-0">
                                <div class="d-flex align-center justify-space-between">
                                    <router-link to="/" class="text-decoration-none d-flex align-center">
                                        <HelpIcon size="20" stroke-width="1.5" class="text-hover-primary" />
                                        <h6 class="text-subtitle-1 font-weight-bold text-hover-primary ml-2">Frequently Asked Questions</h6>
                                    </router-link>
                                    <v-btn color="primary" variant="flat">Check</v-btn>
                                </div>
                            </div>
                        </div>

                        <v-divider vertical></v-divider>
                    </v-col>
                    <v-col cols="12" lg="4" class="py-0">
                        <div class="pa-4">
                            <h5 class="text-h5">Quick Links</h5>
                            <QuickLinks />
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-sheet>
    </v-menu>
    <router-link to="/apps/chats" class="text-decoration-none">
        <v-btn variant="text" color="primary">B </v-btn>
    </router-link>
    <router-link to="/apps/calendar" class="text-decoration-none">
        <v-btn variant="text" color="primary">C </v-btn>
    </router-link>
    <router-link to="/apps/notes" class="text-decoration-none">
        <v-btn variant="text" color="primary">D </v-btn>
    </router-link> -->


    <!-- <ul class="gap-1 horizontal-navbar mx-0">
        <li v-for="(item, i) in sidebarMenu" :key="i" class="navItem">
            <NavCollapse :item="item" :level="0" v-if="item.children" />
            <NavItem :item="item" v-else />
        </li>
    </ul> -->


    <template v-if="mdAndUp">
        <!-- <div class="horizontalMenu border-bottom"> -->
            <div :class="customizer.boxed ? 'maxWidth' : 'px-6'">
                <ul class="gap-1 horizontal-navbar mx-0">
                    <!---Menu Loop -->
                    <li v-for="(item, i) in sidebarMenu" :key="i" class="navItem">
                        <!---If Has Child -->
                        <NavCollapse :item="item" :level="0" v-if="item.children" />
                        <!---Single Item-->
                        <NavItem :item="item" v-else />
                        <!---End Single Item-->
                    </li>
                </ul>
            </div>
        <!-- </div> -->
    </template>
</template>
