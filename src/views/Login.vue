<template>
    <v-container fluid fill-height>
        <v-row align="center" justify="center">
            <v-col cols="12" xs="4" sm="8" md="4" lg="4">
                <v-card :loading="loading" outlined>
                    <v-card-title>Login</v-card-title>
                    <v-card-text>
                        <form>
                            <v-text-field v-model="auth.username" label="Username" required></v-text-field>

                            <v-text-field v-model="auth.password" label="Password" type="password" required>
                            </v-text-field>
                        </form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn class="mr-4" color="primary" @click="submit">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios';

    const url = 'https://39c81456-e28f-4ca1-9487-d60ca5d9ef47.mock.pstmn.io/api/login';

    export default {
        name: 'Login',
        data: () => ({
            loading: false,
            auth: {
                username: '',
                password: '',
            }
        }),
        methods: {
            submit() {
                this.loading = true;

                axios.post(url, this.auth)
                    .then(response => {
                        this.$store.commit('setAuth', response.data);
                        this.$router.push({
                            name: 'reports'
                        });
                    })
                    .catch(error => console.log(error))
                    .finally(() => this.loading = false);
            }
        }

    }
</script>