<template>

    <!-- Start -->
    <section class="relative md:py-24 py-16" id="features">
        <div class="container lg mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 pb-8 items-center">
                <div>
                    <h6 class="text-orange-600 text-base font-medium uppercase mb-2">Servicile noastre</h6>
                    <h3 class="mb-4 md:text-2xl text-xl font-semibold dark:text-white md:mb-0">Solutia perfecta pentru
                        <br> Businessul tau de transport</h3>
                </div>

                <div>
                    <p class="text-slate-400 dark:text-slate-300 max-w-xl">Ofer servicii profesionale de manager de transport marfă, asigurând respectarea tuturor cerințelor legale și operaționale. De asemenea, ofer suport complet pentru obținerea licenței comunitare, facilitând întregul proces pentru ca afacerea dumneavoastră să fie pregătită de drum.</p>
                </div>
            </div><!--end grid-->

            <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                <div :class="datas[0].class">
                    <div
                        class="size-20 bg-orange-600/5 text-orange-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm">
                        <img src="assets/images/car-black-shape-over-wheels-svgrepo-com.svg" /> 
                    </div>

                    <div class="content mt-7">
                        <a href=""
                            class="text-lg hover:text-orange-600 dark:text-white dark:hover:text-orange-600 transition-all duration-500 ease-in-out font-medium">{{
                    datas[0].name }}</a>
                        <p class="text-slate-400 mt-3">{{ datas[0].desc }}</p>

                        <div class="mt-5">
                            <a href=""
                                class="btn btn-link hover:text-orange-600 dark:hover:text-orange-600 after:bg-orange-600 dark:text-white transition duration-500">Creaza programare  <i class="uil uil-arrow-right"></i></a>
                        </div>
                    </div>
                </div>


                <div :class="datas[1].class">
                    <div
                        class="size-20 bg-orange-600/5 text-orange-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm">
                        
                        <img src="assets/images/car-repair-svgrepo-com.svg" /> 
                    </div>

                    <div class="content mt-7">
                        <a href=""
                            class="text-lg hover:text-orange-600 dark:text-white dark:hover:text-orange-600 transition-all duration-500 ease-in-out font-medium">{{
                    datas[1].name }}</a>
                        <p class="text-slate-400 mt-3">{{ datas[1].desc }}</p>

                        <div class="mt-5">
                            <a href=""
                                class="btn btn-link hover:text-orange-600 dark:hover:text-orange-600 after:bg-orange-600 dark:text-white transition duration-500">Suna acum<i class="uil uil-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

                <div :class="datas[2].class">
                    <div
                        class="size-20 bg-orange-600/5 text-orange-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm">
                        <img src="assets/images/truck-front-svgrepo-com.svg" /> 
                    </div>

                    <div class="content mt-7">
                        <a href=""
                            class="text-lg hover:text-orange-600 dark:text-white dark:hover:text-orange-600 transition-all duration-500 ease-in-out font-medium">{{
                    datas[2].name }}</a>
                        <p class="text-slate-400 mt-3">{{ datas[2].desc }}</p>

                        <div class="mt-5">
                            <a href=""
                                class="btn btn-link hover:text-orange-600 dark:hover:text-orange-600 after:bg-orange-600 dark:text-white transition duration-500">Suna acum <i class="uil uil-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div><!--end grid-->
        </div><!--end container-->

    </section><!--end section-->
    <!-- End -->

</template>

<script>
import image from 'assets/images/svg/design-thinking.svg';
import image2 from 'assets/images/svg/coding.svg';
import image3 from 'assets/images/svg/office-desk.svg';


export default {
    data() {
        return {
            datas: [
                {
                    icon: 'uil uil-adjust-circle',
                    name: 'I.T.P',
                    src: 'assets/images/car-black-shape-over-wheels-svgrepo-com.svg',
                    desc: 'Asigură‑ți ITP‑ul mecanic la timp și creaza o rezervare online.',
                    class: 'features p-6 hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800 transition duration-500 rounded-3xl mt-8'
                },
                {
                    icon: 'uil uil-circuit',
                    name: 'SERVICE AUTO',
                    src: 'assets/images/car-black-shape-over-wheels-svgrepo-com.svg',
                    desc: 'Facem service auto pentru toate tipurile de autovehicule, inclusiv camioane.',
                    class: 'features p-6 shadow-xl shadow-slate-100 dark:shadow-slate-800 transition duration-500 rounded-3xl mt-8'
                },
                {
                    icon: 'uil uil-fire',
                    name: 'MANAGER TRANSPORT',
                    src: 'assets/images/car-black-shape-over-wheels-svgrepo-com.svg',
                    desc: 'Asiguram serviciu de manager transport marfă, respectând toate cerințele legale și operaționale.',
                    class: 'features p-6 hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800 transition duration-500 rounded-3xl mt-8'

                }
              
            ],
            items: [
                {
                    image: image,
                    name: 'Strategy',
                    desc: 'The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,'
                },
                {
                    image: image2,
                    name: 'Development',
                    desc: 'The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,'
                },
                {
                    image: image3,
                    name: 'Launch',
                    desc: 'The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,'
                }
            ]
        }
    },


}
</script>

<style lang="scss" scoped></style>