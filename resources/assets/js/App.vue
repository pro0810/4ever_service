<template>
    <v-app dark>
        <page-navigator></page-navigator>
        <router-view></router-view>
        <page-footer></page-footer>
    </v-app>
</template>

<script>
    import PageNavigator from './components/PageNavigator.vue'
    import PageFooter from './components/PageFooter.vue'
    export default {
        components: {
            PageNavigator,
            PageFooter
        }
    }

</script>

