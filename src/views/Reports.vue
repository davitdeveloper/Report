<template>
    <div class="home">
        <v-container>
            <v-row class="text-center">
                <v-card>
                    <v-data-table :headers="headers" :items="items" :page.sync="page" :items-per-page="itemsPerPage"
                        hide-default-footer sort-by="calories" class="elevation-1">
                        <template v-slot:top>
                            <v-toolbar flat color="white">
                                <v-toolbar-title>Reports</v-toolbar-title>
                            </v-toolbar>
                        </template>
                    </v-data-table>
                    <div class="text-center pt-2">
                        <v-pagination v-model="page" :length="pageCount"></v-pagination>
                    </div>
                    <div>
                        <v-btn color="primary" dark class="mb-2" @click="$router.push({ path:'/report/types'})">
                            Create Report
                        </v-btn>
                    </div>
                </v-card>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import axios from 'axios';
    const url = 'https://39c81456-e28f-4ca1-9487-d60ca5d9ef47.mock.pstmn.io/api/reports';

    export default {
        name: 'Reports',
        data: () => ({
            items: [],
            page: 1,
            itemsPerPage: 5,
            headers: [{
                    text: 'type',
                    align: 'start',
                    sortable: false,
                    value: 'type',
                },
                {
                    text: 'name',
                    value: 'name'
                },
                {
                    text: 'status',
                    value: 'status'
                },

            ],

        }),
        computed: {
            pageCount() {
                return Math.ceil(this.items.length / this.itemsPerPage);
            },
        },
        watch: {
            page: function () {
                this.$router.replace({
                    path: '',
                    query: {
                        page: this.page
                    }
                })
            },
        },
        methods: {
            getData() {
                axios.get(url)
                    .then(response => this.items = response.data)
                    .catch(error => console.log(error))
            }
        },
        created() {
            this.getData();
            if (!this.$store.state.auth.user) this.$router.push({
                name: 'login'
            });
        }

    }
</script>