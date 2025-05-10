<template>
    <navbar />
    <!-- Start -->
    <section class="py-36 md:py-64 w-full table relative bg-orange-600/5 dark:bg-orange-600/10 app-container" id="home"
        :style="{ backgroundImage: 'url(' + randomImage + ')' }">
        <div class="container relative">
            <div class="grid grid-cols-1 mt-12">
                <h4
                    class="lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative dark:text-white">
                    Business Growth <br> Makes Your Company</h4>

                <p class="text-slate-400 dark:text-white/70 mb-0 max-w-2xl text-lg">Launch your campaign and benefit
                    from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>

                <div class="relative mt-10">
                    <a href=""
                        class="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-full me-1">Get
                        Started</a>
                    <a @click="toggle" data-type="youtube" data-id="S_CGed6E610"
                        class="cursor-pointer btn btn-icon btn-lg bg-orange-600/5 hover:bg-orange-600 border-orange-600/10 hover:border-orange-600 text-orange-600 hover:text-white rounded-full lightbox"><i
                            class="mdi mdi-play text-xl align-middle"></i></a><small
                        class="font-medium text-sm uppercase align-middle ms-2 dark:text-white/70">Watch Now</small>
                </div>
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
    <!-- iframe start  -->
    <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
        <div class="h-[100%] flex items-center justify-center">
            <div class="relative inline-block">
                <iframe src="https://www.youtube.com/embed/S_CGed6E610" width="700" height="500"
                    frameborder="0"></iframe>
                <a class="mdi mdi-close text-white absolute top-1 right-1 text-xl cursor-pointer" @click="toggle"></a>
            </div>
        </div>
    </div>
    <!-- iframe end  -->

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
import navbar from '@/components/navbar/navbar.vue'
import backgroundImagePath from '../../assets/images/bg/01.png'
import backgroundImagePath2 from '../../assets/images/bg/02.png'
import backgroundImagePath3 from '../../assets/images/bg/03.png'
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
            backgroundImagePath,
            isActive: false,
            backgroundImages: [
                backgroundImagePath,
                backgroundImagePath2,
                backgroundImagePath3
            ],
            randomImage: '',
        };

    },
    mounted() {
        this.changeBackground();
        setInterval(this.changeBackground, 4000);
    },
    components: {
        navbar,
        about,
        services,
        portfolio,
        client,
        pricing,
        team,
        blog,
        getintouch,
        fooTer,

    },
    methods: {
        toggle() {
            if (!this.isActive) {
                this.isActive = true;
            } else {
                this.isActive = false;
            }
        },
        changeBackground() {
            const randomIndex = Math.floor(Math.random() * this.backgroundImages.length);
            this.randomImage = this.backgroundImages[randomIndex];
        },
    },
}
</script>

<style scoped>
.app-container {
    /* Add your additional styles here */
    background-size: cover;
    background-position: center;
    min-height: 100vh;
}
</style>