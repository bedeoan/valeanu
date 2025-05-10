<template>
 <!-- Start -->
 <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="about">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
                    <div class="lg:col-span-5">
                        <div class="relative">
                            <img src="assets/images/about.png" class="rounded-lg shadow-lg relative" alt="">
                            <!-- <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <a  @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="cursor-pointer lightbox cursor-pointer size-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-orange-600">
                                    <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </a>
                            </div> -->
                        </div>
                    </div><!--end col-->

                    <div class="lg:col-span-7">
                        <div class="lg:ms-7">
                            <h6 class="text-orange-600 text-base font-medium uppercase mb-2">Cine suntem ?</h6>
                            <h3 class="mb-4 md:text-2xl text-xl font-medium dark:text-white">Compania noastra</h3>

                            <p class="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">
                                <div class="mb-4">
                                    Service Auto Valeanu Auto este un service auto autorizat RAR, specializat în efectuarea inspecției tehnice periodice (ITP) pentru toate tipurile de vehicule rutiere.
                                </div>
                                    <div>
                                        In cadrul atelierului autorizat RAR, efectuam următoarele activități de reparare ale vehiculelor rutiere:
                                    </div>

                                    <div>
                                        -Motor, sisteme auxiliare şi componente;
                                    </div>
                                    <div>
                                        -Sisteme de transmisie și componente; 
                                    </div>
                                    <div>
                                        -Sistemul de rulare şi componente;
                                    </div>
                                    <div>
                                        -Sistemul de direcție şi componente;
                                    </div>
                                    <div>
                                        -Sistemul de frânare şi componente;
                                    </div>
                                    <div>   
                                        -Întreținerea vehiculelor rutiere.
                                    </div>
                                    <div>
                                        -Manager Transport Marfă 
                                    </div>
                                </p>
                            <div class="relative mt-10">
                                <a href="#portfolio" class="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md">SUNA ACUM</a>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->
        <div :class="isActive ? 'fixed' : 'hidden' " class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
                <div class="h-[100%] flex items-center justify-center">
                    <div class="relative inline-block">
                        <iframe src="https://www.youtube.com/embed/S_CGed6E610" width="700" height="500" frameborder="0"></iframe>
                        <a class="mdi mdi-close text-white absolute top-1 right-1 text-xl cursor-pointer" @click="toggle"></a>
                    </div>
                </div>
          </div>
</template>

<script>
    export default {
        data() {
            return {
                isActive: false
            }
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

<style lang="scss" scoped>

</style>