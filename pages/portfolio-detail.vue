<template>
  <navBar />
     <!-- Hero Start -->
     <section class="py-28 w-full table relative bg-[url('../../assets/images/bg/auth.jpg')] bg-top bg-no-repeat">
            <div class="absolute inset-0 bg-slate-950/80"></div>

            <div class="container">
                <div class="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 class="mb-3 text-3xl leading-normal font-medium text-white">New Trends in SEO</h3>

                    <ul class="list-none">
                        <li class="inline text-white/60 me-2"> <span class="text-white">Client :</span> Calvin Carlo</li>
                        <li class="inline text-white/60"> <span class="text-white">Date :</span> 23th May, 2022</li>
                    </ul>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- Hero End -->
        <portfoliodetail />
        <fooTer />

</template>

<script>
import navBar from '@/components/navbar/navbar-light.vue';
import portfoliodetail from '@/components/portfolio/portfolio-detail.vue';
import fooTer from '@/components/footer.vue'
    export default {
        data() {
            return {
                
            }
        },
        components:{
            navBar,
            portfoliodetail,
            fooTer
        }
    }
</script>

<style lang="scss" scoped>

</style>