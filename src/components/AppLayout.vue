<template>
    <v-layout>
        <CardDrawer/>
       <AppNav/>
        
        <v-main class="d-flex align-center justify-center">
            <slot></slot>
        </v-main>
       <AppFooter/>
    </v-layout>
</template>

<script>
    import AppNav from './layout/AppNav.vue'
    import AppFooter from './layout/AppFooter.vue'
    import CardDrawer from './layout/CardDrawer.vue'
    export default {
        components:{
            AppNav,AppFooter,CardDrawer
        },
        data:() =>({
            show:true,
        })    
    }
</script>