<template>
    <navBar />
    <!-- Hero Start -->

    <section class="py-36 lg:py-64 w-full table relative bg-[url('../../assets/images/bg/1.jpg')] bg-center bg-cover"
        id="home">
        <div class="absolute inset-0 bg-black opacity-80"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 mt-12">
                <h4
                    class="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
                    VĂLEANU AUTO <br>
                    <vue-typewriter-effect class="typewrite relative text-type-element" data-period="2000"
                        :strings='["I.T.P.", "SERVICE", "MANAGER DE TRANSPORT"]' />
                </h4>

                <p class="text-white opacity-50 mb-0 max-w-2xl text-lg">Programează-ti verificarea la ITP și vei beneficia de întreaga expertiza și profesionalismul nostru.</p>

                <div class="relative mt-10">
                    <a href="https://rezervari.app/itp" target="_blank"
                        class="btn bg-yellow-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md">PROGRAMARE I.T.P. ONLINE</a>
                </div>
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <!-- Hero End -->
    <about />
    <services />
    <!-- <portfolio /> -->
    <!-- <client /> -->
    <!-- <pricing /> -->
    <!-- <team /> -->
    <!-- <blog /> -->
    <getintouch />
    <fooTer />


</template>

<script>

import navBar from '@/components/navbar/navbar-light.vue';
import VueTypewriterEffect from "vue-typewriter-effect";
import about from '@/components/about.vue';
import services from '@/components/services.vue';
import portfolio from '@/components/portfolio/portfolio.vue';
import client from '@/components/client.vue';
import pricing from '@/components/pricing.vue';
import team from '@/components/teams.vue';
import blog from '@/components/blog/blog.vue';
import getintouch from '@/components/getInTouch.vue'
import fooTer from '@/components/footer.vue';



export default {
    name: 'indexOne',
    data() {
        return {

        }
    },
    components: {
        navBar,
        VueTypewriterEffect,
        about,
        services,
        portfolio,
        client,
        pricing,
        team,
        blog,
        getintouch,
        fooTer,


    }
}
</script>

<style lang="scss" scoped></style>