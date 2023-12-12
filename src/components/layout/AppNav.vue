<template>
    <div class="nav-bar">
        <v-app-bar color="black">
            <!-- <v-app-bar-nav-icon @click="openCard"></v-app-bar-nav-icon>
            <v-app-bar-title>Title</v-app-bar-title> -->
            <v-container fluid>
                <v-row>
                    <v-col cols="3">
                        <img src="@\assets\images\logo.png" alt="">
                    </v-col>
                    <v-col cols="5">
                        <input type="search" name="search" id="search"
                         placeholder="Search the store"
                         class="py-3 px-5 w-75 bg-white rounded-pill">
                    </v-col>
                    <v-col cols="4">
                        <div class="parent d-flex justify-space-between align-center ">

                            <div class="available">
                            <span>Available 24/7 at</span><br>
                            <strong>(090) 123-4567</strong>
                        </div>
                        <div class="wishlists d-flex flex-column align-center">
                            <heartSvg/>
                            <span style="color: #fec422">Wish Lists</span>
                        </div>
                        <div class="wishlists d-flex flex-column align-center">
                            <accountSvg/>
                            <span style="color: #fec422">Sign In</span> 
                        </div>
                        <div class="wishlists d-flex flex-column align-center">
                            <cartSvg/>
                            <span style="color: #fec422">Cart</span>
                        </div>

                        </div>
                        

                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>
    </div>
</template>

<script>
import heartSvg from '@/assets/SVGS/heart-svg.vue';
import accountSvg from '@/assets/SVGS/account-svg.vue';
import cartSvg from'@/assets/SVGS/cart-svg.vue';
export default {
    components:{heartSvg,accountSvg,cartSvg},
    inject:["Emitter"],
    methods:{
        openCard(){
            this.Emitter.emit('openCard')
        }
    }
}
</script>
<style scoped>

input[type='search']{
    outline-style: none;
}

</style>