<template>
    <navBar />
    <!-- Start Hero -->
    <section class="py-36 lg:py-72 lg:pb-0 md:pb-8 w-full table relative  bg-center bg-cover" id="home"
        :style="{ backgroundImage: `url(${backgroundImagePath})` }">
        <div class="absolute inset-0 bg-black opacity-80"></div>
        <div class="container relative">
            <div class="grid lg:grid-cols-12 mt-10 md:grid-cols-2 gap-2">
                <div class="lg:col-span-7">
                    <h4
                        class="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
                        Bluid your audiance <br> and sale more</h4>

                    <p class="text-white opacity-50 mb-0 max-w-2xl text-lg">Launch your campaign and benefit from our
                        expertise on designing and managing conversion centered Tailwind CSS html page.</p>

                    <div class="relative mt-10">
                        <a href=""
                            class="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-full me-1">Get
                            Started</a>
                        <a  @click="toggle"  data-type="youtube" data-id="S_CGed6E610"
                            class="cursor-pointer btn btn-icon btn-lg bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-full lightbox"><i
                                class="mdi mdi-play text-xl align-middle"></i></a><small
                            class="text-white text-sm uppercase align-middle ms-2">Watch Now</small>
                    </div>
                </div>

                <div class="lg:col-span-5 mt-8 md:mt-0">
                    <div class="bg-white dark:bg-slate-900 rounded-xl shadow md:p-10 p-6 lg:ms-10 z-10 relative">
                        <h4 class="mb-5 font-medium text-2xl dark:text-white">We are offering 14 <br> days free trial
                        </h4>

                        <form>
                            <div class="grid grid-cols-1">
                                <div class="mb-5">
                                    <label class="dark:text-white">Name</label>
                                    <input name="name" id="fName" type="text" class="form-input mt-2"
                                        placeholder="Name :">
                                </div>
                                <div class="mb-5">
                                    <label class="dark:text-white">Email</label>
                                    <input name="email" id="yEmail" type="email" class="form-input mt-2"
                                        placeholder="Email :">
                                </div>
                                <div class="mb-5">
                                    <label class="dark:text-white">Phone No.</label>
                                    <input name="number" id="phNumber" class="form-input mt-2"
                                        placeholder="+12 12458 854">
                                </div>
                                <a href="javascript:void (0)"
                                    class="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md w-full">Free
                                    Trial</a>
                            </div><!--end row-->
                        </form>
                        <!-- end form -->
                    </div>
                </div>
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <div class="relative">
        <div class="shape overflow-hidden text-gray-50 dark:text-slate-800 rtl:-scale-x-[1]">
            <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <!-- End Hero -->
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
import navBar from '@/components/navbar/navbar-light.vue';
import backgroundImagePath from '../../assets/images/bg/2.jpg';
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
            isActive: false

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