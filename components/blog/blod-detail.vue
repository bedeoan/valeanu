<template>
    <section class="relative md:py-24 py-16">
        <div class="container">
            <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div class="lg:col-span-8 md:col-span-6">
                    <div class="p-6 rounded-md shadow dark:shadow-gray-800">

                        <img src="assets/images/blog/3.jpg" class="rounded-md" alt="">

                        <div class="mt-6">
                            <p class="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said
                                to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin
                                language which more or less corresponds to 'proper' Latin. It contains a series of real
                                Latin words. This ancient dummy text is also incomprehensible, but it imitates the
                                rhythm of most European languages in Latin script.</p>
                            <p
                                class="text-slate-400 italic border-x-4 border-orange-600 rounded-ss-xl rounded-ee-xl mt-3 p-3">
                                " There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable. "</p>
                            <p class="text-slate-400 mt-3">The advantage of its Latin origin and the relative
                                meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or
                                distract the viewer's attention from the layout.</p>
                        </div>
                    </div>

                    <div class="p-6 rounded-md shadow dark:shadow-gray-800 mt-8">
                        <h5 class="text-lg font-semibold">Leave A Comment:</h5>

                        <form class="mt-8">
                            <div class="grid lg:grid-cols-12 gap-6">
                                <div class="lg:col-span-6">
                                    <input name="name" id="name" type="text" class="form-input" placeholder="Name :">
                                </div>

                                <div class="lg:col-span-6">
                                    <input name="email" id="email" type="email" class="form-input"
                                        placeholder="Email :">
                                </div><!--end col-->

                                <div class="lg:col-span-12">
                                    <textarea name="comments" id="comments" class="form-input textarea h-28"
                                        placeholder="Message :"></textarea>
                                </div>

                                <div class="lg:col-span-12">
                                    <button type="submit" id="submit" name="send"
                                        class="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md h-11 justify-center flex items-center">Send
                                        Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="lg:col-span-4 md:col-span-6">
                    <div class="sticky top-20">
                        <h5
                            class="text-lg font-medium bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">
                            Author</h5>
                        <div class="text-center mt-8">
                            <img src="assets/images/client/04.jpg" class="size-24 mx-auto rounded-full shadow mb-4"
                                alt="">

                            <a href=""
                                class="text-lg font-medium hover:text-yellow-600 transition-all duration-500 ease-in-out h5">Cristina
                                Romsey</a>
                            <p class="text-slate-400">Content Writer</p>
                        </div>

                        <h5
                            class="text-lg font-medium bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">
                            Social sites</h5>
                        <ul class="list-none text-center mt-8">
                            <li class="inline"><a href=""
                                    class="size-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-orange-600 hover:text-white hover:bg-orange-600"><i
                                        class="uil uil-dribbble align-middle"></i></a></li>
                            <li class="inline"><a href=""
                                    class="size-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-orange-600 hover:text-white hover:bg-orange-600"><i
                                        class="uil uil-behance align-middle"></i></a></li>
                            <li class="inline"><a href=""
                                    class="size-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-orange-600 hover:text-white hover:bg-orange-600"><i
                                        class="uil uil-linkedin align-middle"></i></a></li>
                            <li class="inline"><a href=""
                                    class="size-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-orange-600 hover:text-white hover:bg-orange-600"><i
                                        class="uil uil-facebook-f align-middle"></i></a></li>
                            <li class="inline"><a href=""
                                    class="size-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-orange-600 hover:text-white hover:bg-orange-600"><i
                                        class="uil uil-instagram align-middle"></i></a></li>
                            <li class="inline"><a href=""
                                    class="size-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-orange-600 hover:text-white hover:bg-orange-600"><i
                                        class="uil uil-twitter align-middle"></i></a></li>
                        </ul><!--end icon-->
                    </div>
                </div>
            </div>
        </div>

        <div class="container lg:mt-24 mt-16">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h3 class="mb-4 md:text-2xl text-xl font-medium dark:text-white">Related Blogs</h3>

                <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Launch your campaign and benefit from our
                    expertise on designing and managing conversion centered Tailwind CSS html page.</p>
            </div><!--end grid-->
            <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8">
                <div v-for="item in blogs" :key="item"
                    class="blog relative rounded-md shadow shadow-slate-200 dark:shadow-slate-800 overflow-hidden">
                    <img :src="item.image" alt="">

                    <div class="content p-6">
                        <NuxtLink to="/blog-detail"
                            class="text-lg hover:text-yellow-600 dark:text-white dark:hover:text-yellow-600 transition-all duration-500 ease-in-out font-medium">{{ item.title }}</NuxtLink>
                        <p class="text-slate-400 mt-3">{{ item.desc }}</p>

                        <div class="mt-5">
                            <NuxtLink to="/blog-detail"
                                class="btn btn-link hover:text-yellow-600 dark:hover:text-yellow-600 after:bg-orange-600 dark:text-white transition duration-500">Read
                                More <i class="uil uil-arrow-right"></i></NuxtLink>
                        </div>
                    </div>
                </div>
            </div><!--end grid-->
        </div><!--end container-->

        <div class="container lg:mt-24 mt-16">
            <div class="grid grid-cols-1 text-center">
                <h3 class="mb-6 md:text-2xl text-xl font-medium">Have Question ? Get in touch!</h3>

                <p class="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome
                    template, you can replace it with any text.</p>

                <div class="mt-6">
                    <a 
                        class="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md"><i
                            class="uil uil-phone align-middle me-2"></i> Contact us</a>
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
</template>

<script>
import image from 'assets/images/blog/1.jpg';
import image2 from 'assets/images/blog/2.jpg';
import image3 from 'assets/images/blog/3.jpg';

export default {
    data() {
        return {
            blogs: [
                {
                    image: image,
                    title: 'Building Your Corporate Identity from Upwind',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                },
                {
                    image: image2,
                    title: 'The Right Hand of Business IT World',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                },
                {
                    image: image3,
                    title: 'Building Your Corporate Identity from Upwind',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                }
            ]
        }
    },

}
</script>

<style lang="scss" scoped></style>