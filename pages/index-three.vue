<template>
    <div>
        <navBar />
        <section class="py-36 md:py-72 w-full h-full table relative  bg-center bg-cover jarallax"
            :style="{ backgroundImage: `url(${backgroundImagePath})`, backgroundPosition: 'center', backgroundAttachment: 'fixed' }" data-jarallax data-speed="0.5" id="home">
            <div class="absolute inset-0 bg-black opacity-80"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 text-center">
                    <h4
                        class="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
                        Do you want to change the world?</h4>

                    <p class="text-white opacity-50 mb-0 max-w-2xl text-lg mx-auto">Launch your campaign and benefit
                        from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>

                    <div class="text-center subcribe-form mt-4 pt-2">
                        <form class="relative mx-auto">
                            <input type="email" id="subemail" name="email"
                                class="rounded-full bg-white opacity-70 border" placeholder="E-mail :">
                            <button type="submit"
                                class="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-full">Submit
                                <i class="uil uil-arrow-right"></i></button>
                        </form><!--end form-->
                    </div>
                </div>
            </div><!--end container-->
        </section><!--end section-->
    </div>
    <about />
    <services />
    <porTfolio />
    <client />
    <pricing />
    <team />
    <blog />
    <getintouch />
    <fooTer />
</template>

<script>
import navBar from '@/components/navbar/navbar-light.vue';
import about from '@/components/about.vue';
import services from '@/components/services.vue';
import porTfolio from '@/components/portfolio/portfolio-jarallax.vue';
import client from '@/components/client.vue';
import pricing from '@/components/pricing.vue';
import team from '@/components/teams.vue';
import blog from '@/components/blog/blog.vue';
import getintouch from '@/components/getInTouch.vue'
import fooTer from '@/components/footer.vue';
import backgroundImagePath from '../../assets/images/bg/4.jpg'
export default {
    data() {
        return {
            backgroundImagePath
        }
    },
    components: {
        navBar,
        about,
        services,
        porTfolio,
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