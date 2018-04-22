<template>
    <v-footer >
        <v-card flat title class="flex">
            <v-card-title class="primary">
                <strong class="subheading">
                    Copyright © 2018 4EVERCONNECTED, LLC
                </strong>
                <v-spacer></v-spacer>
                <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    icon
                    dark
                >
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
            </v-card-title>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false,
                icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram']
            }
        }
    }
</script>


