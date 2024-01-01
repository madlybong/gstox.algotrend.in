<script setup lang="ts">
import { basicTableData, tableActionData } from '@/_mockApis/components/table/basicTables2';
// import { basicTableData2, tableActionData } from '@/_mockApis/components/table/basicTables';

// const headers = [
//     { title: 'Users', key: 'name' },
//     { title: 'Project', key: 'pname' },
//     { title: 'Team', sortable: false },
//     { title: 'Status', sortable: false },
//     { title: 'Budget', key: 'budget' },
// ]

const headers = [
    { title: 'Date', key: 'date' },
    { title: 'Sector', key: 'sector' },
    { title: 'Scrtipt', key: 'scrtipt' },
    { title: 'Volume %', key: 'vp' },
    { title: 'OI %', key: 'oip' },
    { title: 'Price %', key: 'pp' },
    { title: 'IVR / IVP', key: 'iv' },
    { title: 'HV', key: 'hv' },
    { title: 'IV %', key: 'ivp' },
    { title: '3D Volume', key: 'tdv' },
    { title: '3d IV', key: 'tdiv' },
    { title: '3D OI', key: 'tdoi' }
]

</script>
<template>
    <v-card class="border" elevation="0">

        <v-data-table :headers="headers" :items="basicTableData">
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

            <!-- <template v-slot:item="{ item }">
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
            </template> -->
        </v-data-table>
    </v-card>
</template>
