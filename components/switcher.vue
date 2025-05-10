<template>
    <div>
        <a href="#" @click="scrollToTop" v-show="showTopButton" id="back-to-top" class="fixed text-lg rounded-full z-10 bottom-5 right-5 size-9 text-center bg-orange-600 text-white leading-9"><i class="mdi mdi-arrow-up"></i></a>
        <!-- Back to top -->

        <!-- Switcher -->
        <div class="fixed top-1/4 -right-2 z-3">
            <span class="relative inline-block rotate-90">
                <input type="checkbox" class="checkbox opacity-0 absolute" id="chk" @change="changeMode($event)">
                <label class="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" for="chk">
                    <i data-feather="moon" class="w-[18px] h-[18px] text-yellow-500"></i>
                    <i data-feather="sun" class="w-[18px] h-[18px] text-yellow-500"></i>
                    <span class="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] size-7"></span>
                </label>
            </span>
        </div>
        <!-- Switcher -->

        <!-- LTR & RTL Mode Code -->
        <div class="fixed top-1/3 -right-3 z-50" dir="ltr">
            <a href="javascript:void(0)" id="switchRtl" @click="decrement">
                <span class="py-1 px-3 relative inline-block rounded-t-md  -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-medium rtl:block ltr:hidden" @click="changeThem($event)">LTR</span>
                <span class="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-medium ltr:block rtl:hidden" @click="changeThem($event)">RTL</span>
            </a>
        </div>
    </div>
</template>

<script>
import feather from 'feather-icons'
export default {
    data(){
        return{
            htmlTag : document.getElementsByTagName("html")[0],
            showTopButton: false
        }
    },
   
    mounted() {
        feather.replace();
        

    },

    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    
 methods: {
    handleScroll(){
         if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            this.showTopButton = true
        } else {
            this.showTopButton = false
        }
    },
    changeThem(event) {
        if(event.target.innerText === "LTR"){
            this.htmlTag.dir = "ltr"
        }
        else{
            this.htmlTag.dir = "rtl"
        }
    
    },

    changeMode(event){
        if (this.htmlTag.className.includes("dark")) {
            this.htmlTag.className = 'light'
        } else {
            this.htmlTag.className = 'dark'
        }
    },

    scrollToTop() {
        window.scrollTo(0,0);
    }
   },
    
}
</script>