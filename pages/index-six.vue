<template>
    <navBar />
    <section
        class="py-36 lg:py-64 w-full table relative bg-[url('../../assets/images/bg/video.jpg')] bg-center bg-cover"
        id="home">
        <div class="bg-video-wrapper">
            <iframe
                src="https://player.vimeo.com/video/818944000?background=1&autoplay=1&loop=1&byline=0&title=0"></iframe>
            <!--Note: Vimeo Embed Background Video-->

            <!-- <iframe src="https://www.youtube.com/embed/S_CGed6E610?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"></iframe> -->
            <!--Note: Youtube Embed Background Video-->
        </div>
        <div class="absolute inset-0 bg-black opacity-80"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 text-center">
                <h4
                    class="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
                    We Collaboration Easy & fast</h4>

                <p class="text-white opacity-50 mb-0 max-w-2xl text-lg mx-auto">Launch your campaign and benefit from
                    our expertise on designing and managing conversion centered Tailwind CSS html page.</p>

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
import navBar from '@/components/navbar/navbar-light.vue'
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

        }
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
    }
}
</script>

<style lang="scss" scoped></style>