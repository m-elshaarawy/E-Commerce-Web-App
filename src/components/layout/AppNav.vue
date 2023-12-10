<template>
    <div class="nav-bar">
        <v-app-bar>
            <v-app-bar-nav-icon @click="openCard"></v-app-bar-nav-icon>
            <v-app-bar-title>Title</v-app-bar-title>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    inject:["Emitter"],
    methods:{
        openCard(){
            this.Emitter.emit('openCard')
        }
    }
}
</script>