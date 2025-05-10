<template>
      <navBar />
      <!-- Hero Start -->
      <section class="py-28 w-full table relative bg-[url('../../assets/images/bg/auth.jpg')] bg-top bg-no-repeat">
            <div class="absolute inset-0 bg-slate-950/80"></div>

            <div class="container">
                <div class="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 class="mb-3 font-medium leading-normal text-3xl mt-10 text-white">Introducing new tools for your design.</h3>

                    <ul class="list-none mt-6">
                        <li class="inline-block text-white/50 mx-5"> <span class="text-white block">Client :</span> <span class="block">Calvin Carlo</span></li>
                        <li class="inline-block text-white/50 mx-5"> <span class="text-white block">Date :</span> <span class="block">15th August 2023</span></li>
                        <li class="inline-block text-white/50 mx-5"> <span class="text-white block">Time :</span> <span class="block">8 Min Read</span></li>
                    </ul>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- Hero End -->
        <blogdetail />
        <fooTer />
</template>

<script>
import navBar from '@/components/navbar/navbar-light.vue';
import blogdetail from '@/components/blog/blod-detail.vue';
import fooTer from '@/components/footer.vue'
    export default {
        data() {
            return {
                
            }
        },
        components:{
            navBar,
            blogdetail,
            fooTer

        }
    }
</script>

<style lang="scss" scoped>

</style>