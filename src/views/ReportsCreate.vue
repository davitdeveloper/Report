<template>
    <v-container class="pa-0">
        <v-row align="center">
            <v-col cols="12" sm="6">
                <v-text-field v-model="report.type" label="type" clearable disabled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
                <v-text-field v-model="report.name" label="name" clearable></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
                <v-select v-model="report.status" :items="status" label="status">
                </v-select>
            </v-col>
            <v-col cols="12" sm="6">
                <v-btn color="success" dark large @click="add()">Add {{report.type }} Report</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios';
    const url = 'https://39c81456-e28f-4ca1-9487-d60ca5d9ef47.mock.pstmn.io/api/reports/';
    export default {
        name: "report-create",
        data: () => ({
            status: ['draft', 'ready', 'expired'],
            report: {
                type: '',
                name: '',
                status: ''
            }
        }),
        methods: {
            add() {
                axios.post(url + this.report.type).then(response => {
                        this.$router.push({
                            name: 'reports'
                        })
                    })
                    .catch(error => console.log(error))
            }
        },
        created() {
            this.report.type = this.$router.app._route.query.report
        }
    }
</script>