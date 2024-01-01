<script setup lang="ts">
import { basicTableData1, tableActionData } from '@/_mockApis/components/table/basicTables';
import { DatePicker } from "v-calendar";
import { ref } from 'vue';

const fromDate = ref();
const toDate = ref();

const headers = [
    { title: 'Users', key: 'name' },
    { title: 'Project', key: 'pname' },
    { title: 'Team', sortable: false },
    { title: 'Status', sortable: false },
    { title: 'Budget', key: 'budget' },
]

</script>
<template>
    <v-card class="border" elevation="0">

        <!-- <v-col cols="6" sm="6">
            <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">From Date</v-label>
            <DatePicker class="d-flex" v-model.string="fromDate">
                <template #default="{ togglePopover, inputValue }">
                    <v-text-field v-model="fromDate" :value="inputValue" hide-details="auto"
                        @input="$emit('update:modelValue', fromDate)" @update:focused="togglePopover"></v-text-field>
                </template>
            </DatePicker>
        </v-col>

        <v-col cols="6" sm="6">
            <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">To Date</v-label>
            <DatePicker class="d-flex" v-model.string="toDate">
                <template #default="{ togglePopover, inputValue }">
                    <v-text-field v-model="toDate" :value="inputValue" hide-details="auto"
                        @input="$emit('update:modelValue', toDate)" @update:focused="togglePopover"></v-text-field>
                </template>
            </DatePicker>
        </v-col> -->

        <v-data-table :headers="headers" :items="basicTableData1">
            <template v-slot:headers="{ columns, isSorted, getSortIcon, toggleSort }">
                <tr>
                    <td v-for="column in columns" :key="column.key">
                        <span class="mr-2 cursor-pointer" @click="() => toggleSort(column)">{{ column.title }}</span>
                        <template v-if="isSorted(column)">
                            <v-icon :icon="getSortIcon(column)"></v-icon>
                        </template>
                    </td>
                </tr>
            </template>

            <template v-slot:item="{ item }">
                <tr>
                    <td>
                        <div class="d-flex align-center">
                            <v-avatar size="40">
                                <img :src="item.avatar" alt="avatar" height="40" />
                            </v-avatar>
                            <div class="ml-4">
                                <h6 class="text-h6">{{ item.name }}</h6>
                                <div class="text-subtitle-1 text-medium-emphasis">{{ item.post }}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <h6 class="text-h6 font-weight-medium text-medium-emphasis">{{ item.pname }}</h6>
                    </td>
                    <td>
                        <div class="d-flex align-center">
                            <div class="ml-2 d-flex flex-row-reverse">
                                <v-avatar v-for="team in item.teams" :key="team.id" size="35"
                                    :class="'ml-n2 avtar-border bg-' + team.color">
                                    {{ team.text }}
                                </v-avatar>
                            </div>
                        </div>
                    </td>
                    <td>
                        <v-chip rounded="md" class="font-weight-bold" :color="item.statuscolor" size="small" label>{{
                            item.status
                        }}</v-chip>
                    </td>
                    <td>
                        <h6 class="text-h6">{{ `$${item.budget}` }}</h6>
                    </td>
                    <td>
                        <v-btn size="30" icon variant="flat" class="grey100">
                            <v-avatar size="22">
                                <DotsVerticalIcon size="20" color="grey100" />
                            </v-avatar>
                            <v-menu activator="parent">
                                <v-list>
                                    <v-list-item value="action" v-for="list in tableActionData" :key="list.listtitle"
                                        hide-details min-height="38">
                                        <v-list-item-title>
                                            <v-avatar size="20" class="mr-2">
                                                <component :is="list.icon" stroke-width="2" size="20" />
                                            </v-avatar>
                                            {{ list.listtitle }}
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-btn>
                    </td>
                </tr>
            </template>
        </v-data-table>
    </v-card>
</template>
