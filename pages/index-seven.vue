<template>
    <navBar />
    <section class="py-36 md:h-screen h-auto items-center flex relative" id="home"
        :style="{ backgroundImage: 'url(' + randomImage + ')' }">
        <div class="absolute inset-0 bg-black opacity-80"></div>
        <div class="container relative">
            <div class="grid grid-cols-1">
                <h4
                    class="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
                    Providing Brilliant Ideas <br>For Your   <vue-typewriter-effect class="typewrite relative text-type-element" data-period="2000"
                        :strings='["Business1", "Startups", "Digital Agency", "Marketing"]' />
                </h4>

                <p class="text-white opacity-50 mb-0 max-w-2xl text-lg">Launch your campaign and benefit from our
                    expertise on designing and managing conversion centered Tailwind CSS html page.</p>

                <div class="relative mt-10">
                    <a href=""
                        class="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md">Get
                        Started</a>
                </div>
            </div>
        </div><!--end container-->
    </section><!--end section-->

    <about />
    <services />
    <portfolio />
    <client />
    <pricing />
    <team />
    <blog />
    <getintouch />
    <fooTer />
</template>

<script>
import navBar from '@/components/navbar/navbar-light.vue';
import VueTypewriterEffect from "vue-typewriter-effect";
import backgroundImagePath from '../../assets/images/bg/1.jpg'
import backgroundImagePath2 from '../../assets/images/bg/2.jpg'
import backgroundImagePath3 from '../../assets/images/bg/3.jpg'
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
    data() {
        return {
            backgroundImages: [
                backgroundImagePath,
                backgroundImagePath2,
                backgroundImagePath3

            ],
            randomImage: '',
        }
    },
    mounted() {
        this.changeBackground();
        setInterval(this.changeBackground, 4000);
    },
    components: {
        navBar,
        about,
        services,
        portfolio,
        client,
        pricing,
        team,
        blog,
        getintouch,
        fooTer,
        VueTypewriterEffect
    },
    methods: {
        changeBackground() {
            const randomIndex = Math.floor(Math.random() * this.backgroundImages.length);
            this.randomImage = this.backgroundImages[randomIndex];
        },
    },


}
</script>

<style lang="scss" scoped></style>