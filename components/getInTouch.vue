<template>
      <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="contact">
            <div class="container">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h6 class="text-yellow-600 text-base font-medium uppercase mb-2">Conducere</h6>
                    <h3 class="mb-4 md:text-2xl text-xl font-medium dark:text-white">Ing. Filip Vălean</h3>
                    <a @click="callNow()" class="text-slate-400 mb-2">+40 749 030 964</a>
                    <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Vă puteți programa telefonic sau prin aplicația noastră de rezervări.</p>
                </div><!--end grid-->


                <div class="flex flex-col-reverse lg:flex-row items-center gap-6 mt-8">
    <!-- Right side (Map) becomes bottom on mobile -->
    <div class="lg:w-2/3 w-full">
        <div class="p-6 rounded-md shadow bg-white dark:bg-slate-900">
            <a href="https://maps.app.goo.gl/BDVvp3rrCCFxrBqw7">
                <img src="assets/images/map.png" />
            </a>
        </div>
    </div>

    <!-- Left side (Contact Info) becomes top on mobile -->
    <div class="lg:w-1/3 w-full">
        <div class="lg:ms-8">
            <div class="flex">
                <div class="icons text-center mx-auto">
                    <i class="uil uil-phone block rounded text-2xl dark:text-white mb-0"></i>
                </div>
                <div class="flex-1 ms-6">
                    <h5 class="text-lg dark:text-white mb-2 font-medium">Telefon</h5>
                    <a @click="callNow()" class="text-slate-400">+40 749 030 964</a>
                </div>
            </div>

            <div class="flex mt-4">
                <div class="icons text-center mx-auto">
                    <i class="uil uil-envelope block rounded text-2xl dark:text-white mb-0"></i>
                </div>
                <div class="flex-1 ms-6">
                    <h5 class="text-lg dark:text-white mb-2 font-medium">Email</h5>
                    <a href="mailto:contact@example.com" class="text-slate-400">valeanuauto@gmail.com</a>
                </div>
            </div>

            <div class="flex mt-4">
                <div class="icons text-center mx-auto">
                    <i class="uil uil-map-marker block rounded text-2xl dark:text-white mb-0"></i>
                </div>
                <div class="flex-1 ms-6">
                    <h5 class="text-lg dark:text-white mb-2 font-medium">Locatie</h5>
                    <p class="text-slate-400 mb-2">Str. Dragos Voda, Nr 161, Sighetu Marmatiei, Maramures</p>
                </div>
            </div>
        </div>
    </div>
</div>


            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->
</template>

<script>
    export default {
        methods: {
            callNow() {
                window.location.href = "tel:+40749030964";
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>