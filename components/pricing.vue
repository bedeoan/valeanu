<template>
    <!-- start -->
    <section class="relative md:py-24 py-16" id="pricing">
        <div class="container">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h6 class="text-yellow-600 text-base font-medium uppercase mb-2">Pricing</h6>
                <h3 class="mb-4 md:text-2xl text-xl font-medium dark:text-white">Comfortable Rates</h3>

                <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Launch your campaign and benefit from our
                    expertise on designing and managing conversion centered Tailwind CSS html page.</p>
            </div><!--end grid-->

            <div class="flex flex-wrap">
                <div v-for="item in datas" :key="item" class="w-full md:w-1/2 lg:w-1/3 px-0 md:px-3 mt-8">
                    <div 
                        class="flex flex-col pt-8 pb-8 bg-zinc-50 hover:bg-white dark:bg-gray-800 dark:hover:bg-black rounded-md shadow shadow-slate-200 dark:shadow-slate-700 transition duration-500">
                        <div class="px-8 pb-8">
                            <h3 class="mb-6 text-lg md:text-xl font-medium dark:text-white">{{item.name}}</h3>
                            <div class="mb-6 dark:text-white/70">
                                <span class="relative -top-5 text-2xl">{{ item.symbol }}</span>
                                <span class="text-5xl font-semibold dark:text-white">{{item.pricing}}</span>
                                <span class="inline-block ms-1">{{ item.time }}</span>
                            </div>
                            <p class="mb-6 text-slate-430 dark:text-slate-300">{{item.title}}</p>
                            <a href=""
                                class="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md w-full">Started
                                Now</a>
                        </div>
                        <div class="border-b border-slate-200 dark:border-slate-700"></div>
                        <ul class="self-start px-8 pt-8">
                            <li class="flex items-center my-1 text-slate-400 dark:text-slate-300">
                                <i class="uil uil-check-circle text-lg text-green-600 me-1"></i>
                                <span>Complete documentation</span>
                            </li>
                            <li class="flex items-center my-1 text-slate-400 dark:text-slate-300">
                                <i class="uil uil-check-circle text-lg text-green-600 me-1"></i>
                                <span>Working materials in Figma</span>
                            </li>
                            <li class="flex items-center my-1 text-slate-400 dark:text-slate-300">
                                <i class="uil uil-check-circle text-lg text-green-600 me-1"></i>
                                <span>100GB cloud storage</span>
                            </li>
                            <li class="flex items-center my-1 text-slate-400 dark:text-slate-300">
                                <i class="uil uil-check-circle text-lg text-green-600 me-1"></i>
                                <span>500 team members</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flex justify-center text-slate-400 dark:text-slate-300 mt-2"><span
                    class="text-yellow-600">*</span>No credit card required</div>
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
</template>

<script>
export default {
    data() {
        return {
            datas: [
                {
                    name: 'Basic',
                    pricing: '10',
                    symbol: '$',
                    time: '/ month',
                    title: 'Basic features for up to 10 users.',
                },
                {
                    name: 'Business',
                    pricing: '99',
                    symbol: '$',
                    time: '/ month',
                    title: 'Basic features for up to 30 users.',
                },
                {
                    name: 'Professional',
                    pricing: '299',
                    symbol: '$',
                    time: '/ month',
                    title: 'Basic features for up to 100 users.',
                },

            ]

        }
    },

}
</script>

<style lang="scss" scoped></style>