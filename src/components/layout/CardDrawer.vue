<template>
    <div class="card">
        <v-navigation-drawer location="right" v-model="drawer"></v-navigation-drawer>
    </div>
</template>

<script>
export default {
    inject:["Emitter"],
    data:() =>({
        drawer: false,
    }),
    mounted(){
        this.Emitter.on('openCard',()=>{
            this.drawer = !this.drawer
        })
    }
}
</script>