<template>
    <div>
        <v-navigation-drawer
            fixed
            v-model="drawer"
            app
            right
        >
            <v-list dense>
                <v-list-tile @click="" v-for="item in items" :key="item.title" :to="item.path">
                    <v-list-tile-action>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title >{{item.title}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar fixed class="primary">
            <v-toolbar-side-icon @click.stop="drawer = !drawer" ></v-toolbar-side-icon>
            <v-toolbar-title class="mt-2">
                <router-link  to="/">
                    <img src="/images/logo/service_logo.png" >
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn flat v-for="item in items" :key="item.title" :to="item.path">{{item.title}}</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false,
                items: [
                    {title: 'HOME', icon: 'fas fa-home', path: '/'},
                    {title: 'CONNECT', icon: 'fas fa-user-plus', path: '/connect'},
                    {title: 'LOG IN', icon: 'fas fa-unlock', path: '/login'},
                    {title: 'SIGN UP', icon: 'fas fa-sign-in-alt', path: '/register'}
                ]
            }
        }
    }
</script>


