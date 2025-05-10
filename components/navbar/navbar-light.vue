<template>
        <nav class="navbar" id="navbar" @scroll="handleScroll">
            <div class="container flex flex-wrap items-center justify-end">
                <NuxtLink class="navbar-brand" to="/">
                    <span class="inline-block dark:hidden">
                        <img src="assets/images/logo-dark.png" style="height:32px!important;" class="l-dark" alt="">
                        <img src="assets/images/logo-light.png" style="height:32px!important;" class="l-light" alt="">
                    </span>
                    <img src="assets/images/logo-light.png" class="hidden dark:inline-block" alt="">
                </NuxtLink>

                <div class="nav-icons flex items-center lg_992:order-2 ms-auto">
                    <!-- Navbar Button -->
                    <ul class="list-none menu-social mb-0 space-x-1">
                        <!-- <li class="inline">
                            <a href="">
                                <span class="login-btn-primary"><span class="btn btn-sm btn-icon rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white"><i class="uil uil-github"></i></span></span>
                                <span class="login-btn-light"><span class="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><i class="uil uil-github"></i></span></span>
                            </a>
                        </li> -->
                        <!-- <li class="inline">
                            <a href="">
                                <span class="login-btn-primary"><span class="btn btn-sm btn-icon rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white"><i class="uil uil-twitter"></i></span></span>
                                <span class="login-btn-light"><span class="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><i class="uil uil-twitter"></i></span></span>
                            </a>
                        </li> -->
                        <!-- <li class="inline">
                            <a href="">
                                <span class="login-btn-primary"><span class="btn btn-sm btn-icon rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white"><i class="uil uil-instagram"></i></span></span>
                                <span class="login-btn-light"><span class="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><i class="uil uil-instagram"></i></span></span>
                            </a>
                        </li> -->
                    </ul>
                    <!-- Navbar Collapse Manu Button -->
                    <button data-collapse="menu-collapse" type="button" class="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden" aria-controls="menu-collapse" aria-expanded="false"  @click="handler">
                        <span class="sr-only">Navigation Menu</span>
                        <i class="mdi mdi-menu mdi-24px"></i>
                    </button>
                </div>

                <!-- Navbar Manu -->
                <div class="navigation lg_992:order-1 lg_992:flex" id="menu-collapse" :class="{hidden : !toggle}">
                    <ul class="navbar-nav nav-light" id="navbar-navlist">
                        <li class="nav-item active home">
                            <a @click="toggle = !toggle" class="nav-link" href="#home">Acasa</a>
                        </li>
                        <li class="nav-item about">
                            <a @click="toggle = !toggle" class="nav-link" href="#about">Despre noi</a>
                        </li>
                        <li class="nav-item features">
                            <a @click="toggle = !toggle" class="nav-link" href="#features">Servicii</a>
                        </li>
                        <li class="nav-item contact">
                            <a @click="toggle = !toggle" class="nav-link" href="#contact">Contact</a>
                        </li>                       
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Navbar End -->
</template>

<script>
export default {
    components:{
        
    },
    data() {
        return { 
            toggle:false,
            scroll:true,
            sections:document.querySelectorAll("section"),
            navLi:document.querySelectorAll("nav .container .navigation ul li"),
            current : "",
            sectionTop:null,
           
         }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
         window.addEventListener('scroll', this.onscroll);
    },

    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('scroll', this.onscroll);
    },

    methods: {
    handler: function() {
      this.toggle = !this?.toggle;   
    },
    handleScroll (event) {
        const navbar = document.getElementById("navbar");
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add("is-sticky");
        } else {
            navbar.classList.remove("is-sticky");
        }
    },

    onscroll () {
        document.querySelectorAll("section").forEach((section) => {
            this.sectionTop = section.offsetTop;
            if (pageYOffset >= this.sectionTop - 60) {
            this.current = section.getAttribute("id"); 
            }else {}
        });
        document.querySelectorAll("nav .container .navigation ul li").forEach((li) => {
            if (li.classList.contains(this.current)) {
                li.classList.add("active");
            }else{
                li.classList.remove("active");
            }
        });
    }
  },
  

}
</script>

<style lang="scss" scoped>

</style>