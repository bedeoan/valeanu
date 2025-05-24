<template>
    <navbar />
    <!-- Start -->
    <section
        class="py-36 md:h-screen h-auto items-center flex relative bg-[url('../../assets/images/bg/bg4.png')] bg-bottom bg-cover"
        id="home">
        <div
            class="absolute inset-0 -z-1 bg-gradient-to-b from-orange-600/20 dark:from-orange-600/40 via-orange-600/10 dark:via-orange-600/20 to-transparent">
        </div>
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div class="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
                    <h4
                        class="lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative dark:text-white">
                        Give your users <br> privacy choices.</h4>

                    <p class="text-slate-400 dark:text-white/70 mb-0 max-w-2xl text-lg">Launch your campaign and benefit
                        from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>

                    <div class="subcribe-form mt-10">
                        <form class="relative">
                            <input type="email" id="subemail" name="email"
                                class="rounded-full bg-white opacity-70 border" placeholder="E-mail :">
                            <button type="submit"
                                class="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-full">Submit
                                <i class="uil uil-arrow-right"></i></button>
                        </form><!--end form-->
                    </div>
                </div>

                <div class="lg:col-span-5 md:col-span-6">
                    <div class="relative">
                        <div class="relative flex justify-end">
                            <img src="assets/images/ab01.jpg"
                                class="lg:w-[400px] w-[280px] rounded-xl shadow dark:shadow-gray-700" alt="">
                            <div class="absolute top-0 translate-y-2/4 start-0 text-center">
                                <a  @click="toggle" data-type="youtube" data-id="S_CGed6E610"
                                    class="cursor-pointer lightbox size-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-yellow-600">
                                    <i class="mdi mdi-play inline-flex items-center justify-center text-2xl "></i>
                                </a>
                            </div>
                        </div>
                        <div class="absolute md:-start-5 start-0 -bottom-16">
                            <img src="assets/images/ab02.jpg"
                                class="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-xl"
                                alt="">
                        </div>
                    </div>
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
                <a class="mdi mdi-close text-white absolute top-1 right-1 text-xl cursor-pointer" @click="toggle" ></a>
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
import navbar from '@/components/navbar/navbar.vue';
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
            isActive: false
        }
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
    },
}
</script>

<style lang="scss" scoped></style>