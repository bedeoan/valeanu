<template>
    <div>
        <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="testi">
            <div class="container">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h6 class="text-yellow-600 text-base font-medium uppercase mb-2">Testimonial</h6>
                    <h3 class="mb-4 md:text-2xl text-xl font-medium dark:text-white">Client's Review</h3>

                    <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Launch your campaign and benefit from
                        our expertise on designing and managing conversion centered Tailwind CSS html page.</p>
                </div><!--end grid-->
                <div class="grid grid-cols-1 mt-8 relative">

                    <swiper class="swiper-wrapper" :autoplay="true"  :spaceBetween="10" :pagination="{
                        clickable: true,
                    }" :breakpoints="{
                        '640': {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        '768': {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        '1024': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                    }" :modules="modules">
                        <swiper-slide v-for="item in clients" :key="item" class="swiper-slide h-auto">
                            <div
                                class="lg:flex p-6 lg:p-0 relative rounded-md shadow shadow-slate-200 dark:shadow-slate-700 bg-white dark:bg-slate-900 overflow-hidden">
                                <img class="size-24 lg:w-48 lg:h-auto lg:rounded-none rounded-full mx-auto"
                                    :src="item.image" alt="" width="384">
                                <div class="pt-6 lg:p-6 text-center lg:text-left space-y-4">
                                    <p class="text-base text-slate-500 dark:text-slate-200"> {{ item.desc }}
                                    </p>

                                    <div>
                                        <span class="text-yellow-600 block mb-1">{{ item.name }}</span>
                                        <span class="text-slate-400 text-sm dark:text-white/60 block">{{ item.position
                                            }}</span>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide> <!-- end swiper-slide -->

                    </swiper>
                </div>
                <!-- end swiper-wrapper -->


            </div><!--end container-->
            </section>

    </div>


</template>

<script>

import client from 'assets/images/client/01.jpg'
import client2 from 'assets/images/client/02.jpg'
import client3 from 'assets/images/client/03.jpg'
import client4 from 'assets/images/client/04.jpg'


import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

export default {
    data() {
        return {
            swiperOptions: {
                slidesPerView: 2,
                spaceBetween: 16,
                breakpoints: {
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 16
                    }
                }
            },

            clients: [
                {
                    image: client,
                    desc: ' " It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "',
                    name: 'Thomas Israel',
                    position: 'Staff Engineer, Algolia'
                },
                {
                    image: client2,
                    desc: `'" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "'`,
                    name: 'Carl Oliver',
                    position: 'Staff Engineer, Algolia'
                },
                {
                    image: client3,
                    desc: '" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "',
                    name: 'Barbara McIntosh',
                    position: 'Staff Engineer, Algolia'
                },
                {
                    image: client4,
                    desc: '" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "',
                    name: 'Jill Webb',
                    position: 'Staff Engineer, Algolia'
                }
            ]
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [
                Navigation,
                Autoplay,


            ],
        };
    },

};
</script>
<style scoped>
.swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 768px) {
    .swiper-container {
        width: 100%;
        height: 500px;
    }

    .swiper-slide {
        width: 100%;
        height: 500px;
    }

    .swiper-slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>