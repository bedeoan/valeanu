<template>
   <!-- Hero Start -->
   <section class="position-relative bg-[url('../../assets/images/bg/auth.jpg')] bg-center bg-cover">
            <div class="absolute inset-0 bg-black opacity-90"></div>
            <div class="container-fluid relative">
                <div class="grid grid-cols-1">
                    <div class="lg:col-span-4">
                        <div class="flex flex-col min-h-screen md:px-12 py-12 px-3">
                            <!-- Start Logo -->
                            <div class="text-center mx-auto">
                                <NuxtLink to="/"><img src="assets/images/logo-light.png" alt=""></NuxtLink>
                            </div>
                            <!-- End Logo -->

                            <!-- Start Content -->
                            <div class="text-center my-auto">
                                <div class="w-full max-w-sm m-auto px-6 py-8 bg-white dark:bg-slate-900 rounded-md shadow-lg shadow-slate-500 dark:shadow-slate-800">
                                    <div class="grid grid-cols-1">
                                        <h5 class="mb-8 text-xl dark:text-white font-semibold">Reset Your Password</h5>
                                        <p class="text-slate-400 dark:text-slate-300 mb-6">Please enter your email address. You will receive a link to create a new password via email.</p>
                                        <form class="ltr:text-left rtl:text-right">
                                            <div class="grid grid-cols-1">
                                                <div class="mb-4">
                                                    <label class="dark:text-white" for="LoginEmail">Email Address:</label>
                                                    <input id="LoginEmail" type="email" class="form-input mt-3" placeholder="name@example.com">
                                                </div>

                                                <div class="mb-4">
                                                    <a href="" class="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md w-full">Send</a>
                                                </div>

                                                <div class="text-center">
                                                    <span class="text-slate-400 dark:text-slate-300 me-2">Remember your password ? </span><NuxtLink to="/auth/login" class="text-dark fw-bold">Sign in</NuxtLink>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- End Content -->

                            <!-- Start Footer -->
                            <div class="text-center">
                                <p class="text-gray-400">© {{date}} Upwind. Design & Develop with <i class="mdi mdi-heart text-orange-700"></i> by <a href="https://shreethemes.in/" target="_blank" class="text-reset">Shreethemes</a>.</p>
                            </div>
                            <!-- End Footer -->
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- Hero End -->

</template>

<script>
    export default {
        data() {
            return {
                date: new Date().getFullYear()
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>