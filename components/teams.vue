<template>
    <!-- Start -->
    <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="pricing">
        <div class="container">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h6 class="text-orange-600 text-base font-medium uppercase mb-2">ECHIPA NOASTRA</h6>
                <h3 class="mb-4 md:text-2xl text-xl font-medium dark:text-white">PROFESIONISTI DIN SERVICE</h3>

                <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Programează‑ți inspecția și profită de experiența noastră în ITP mecanic, coordonare flotă și soluții avansate de management transporturi.</p>
            </div><!--end grid-->

            <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
                <div v-for="item in clients" :key="item" class="relative rounded-md shadow-lg overflow-hidden group">
                    <!-- <img :src="item.image"
                        class="group-hover:origin-center group-hover:scale-105 transition duration-500" alt=""> -->
                    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 z-0 transition duration-500">
                    </div>
                    <ul
                        class="list-none absolute z-10 opacity-0 group-hover:opacity-100 top-4 end-4 mb-0 transition-all duration-500">
                        <li class="mb-1"><a href="javascript:void(0)"
                                class="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon btn-sm rounded-full"><i
                                    class="uil uil-facebook-f"></i></a></li>
                        <li class="mb-1 ms-0"><a href="javascript:void(0)"
                                class="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon btn-sm rounded-full"><i
                                    class="uil uil-instagram"></i></a></li>
                        <li class="mb-1 ms-0"><a href="javascript:void(0)"
                                class="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon btn-sm rounded-full"><i
                                    class="uil uil-twitter"></i></a></li>
                    </ul><!--end icon-->

                    <div
                        class="content absolute start-4 end-4 bottom-4 bg-white dark:bg-slate-900 opacity-0 group-hover:opacity-100 p-4 rounded-md text-center transition-all duration-500">
                        <a href=""
                            class="h5 text-md dark:text-white hover:text-orange-600 dark:hover:text-orange-600 font-medium">{{ item.name }}</a>
                        <h6 class="text-slate-400 dark:text-slate-300 mb-0 font-light">{{item.position}}</h6>
                    </div>
                </div>
            </div><!--end grid-->
        </div><!--end container-->

         <!-- <div class="container mt-12">
                <div class="grid grid-cols-2 md:grid-cols-4">
                    <div class="counter-box position-relative text-center">
                        <h3 class="font-medium text-3xl mb-2 dark:text-white flex justify-center"><count-up
                                    :end-val="15"></count-up>+</h3>
                        <span class="counter-head text-slate-400 dark:text-slate-300">Projects</span>
                    </div>

                    <div class="counter-box position-relative text-center ">
                        <h3 class="font-medium text-3xl mb-2 dark:text-white flex justify-center"><count-up :end-val="200">1</count-up>+</h3>
                        <span class="counter-head text-slate-400 dark:text-slate-300">Clients</span>
                    </div>

                    <div class="counter-box position-relative text-center ">
                        <h3 class="font-medium text-3xl mb-2 dark:text-white flex justify-center"><count-up :end-val="457">200</count-up>K</h3>
                        <span class="counter-head text-slate-400 dark:text-slate-300">Members</span>
                    </div>

                    <div class="counter-box position-relative text-center ">
                        <h3 class="font-medium text-3xl mb-2 dark:text-white flex justify-center"><count-up :end-val="150">100</count-up>+</h3>
                        <span class="counter-head text-slate-400 dark:text-slate-300">Employee</span>
                    </div>
                </div>
            </div> -->

        <div class="container">
            <img src="assets/images/car-logos.jpg" class="w-full" alt="">
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
</template>

<script>
import CountUp from 'vue-countup-v3';
import client from 'assets/images/client/01.jpg'
import client2 from 'assets/images/client/02.jpg'
import client3 from 'assets/images/client/03.jpg'
import client4 from 'assets/images/client/04.jpg'
import amazon from 'assets/images/client/amazon.svg'
import google from 'assets/images/client/google.svg'
import lenovo from 'assets/images/client/lenovo.svg'
import paypal from 'assets/images/client/paypal.svg'
import shopify from 'assets/images/client/shopify.svg'
import spotify from 'assets/images/client/spotify.svg'



export default {
    data() {
        return {
            clients: [
                {
                    image: client,
                    name: 'Calvin Carlo',
                    position:'Designer'
                },
                {
                    image: client2,
                    name: 'Aliana Rosy',
                    position:'Designer'
                },
                {
                    image: client3,
                    name: 'Sofia Razaq',
                    position:'Designer'
                },
                {
                    image: client4,
                    name: 'Micheal Carlo',
                    position:'Designer'
                },                

            ],
            images:[
                {
                    image: amazon
                },
                {
                    image: google
                },
                {
                    image: lenovo
                },
                {
                    image: paypal
                },
                {
                    image: shopify
                },
                {
                    image: spotify
                },
               
            ],
                datas: [
                {

                    name: 'Projects',
                    target: "40",
                    symbol: '+'
                },
                {
                    name: 'Clients',
                    target: "200",
                    symbol: '+'

                },
                {
                    name: 'Members',
                    target: "457",
                    symbol: 'K'
                },
                {
                    name: 'Employee',
                    target: "150",
                    symbol: '+'

                },
            ]
        }
    },
    components: {
        CountUp
    }

}
</script>

<style lang="scss" scoped></style>