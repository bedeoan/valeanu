<template>
    <nav class="navbar" id="navbar" @scroll="handleScroll">
            <div class="container flex flex-wrap items-center justify-end">
                <NuxtLink class="navbar-brand" to="/">
                    <!-- <img src="assets/images/valeanu.jpeg" class="inline-block dark:hidden" alt=""> -->
                    <!-- <img src="assets/images/logo-light.png" class="hidden dark:inline-block" alt=""> -->
                </NuxtLink>

                <div class="nav-icons flex items-center lg_992:order-2 ms-auto">
                    <!-- Navbar Button -->
                    <ul class="list-none menu-social mb-0">
                        <li class="inline">
                            <a href="" class="btn btn-sm btn-icon rounded-full bg-orange-600 hover:bg-yellow-700 border-orange-600 hover:border-orange-700 text-white"><i class="uil uil-github"></i></a>
                        </li>
                        <li class="inline">
                            <a href="" class="btn btn-sm btn-icon rounded-full bg-orange-600 hover:bg-yellow-700 border-orange-600 hover:border-orange-700 text-white"><i class="uil uil-twitter"></i></a>
                        </li>
                        <li class="inline">
                            <a href="">
                                <a href="" class="btn btn-sm btn-icon rounded-full bg-orange-600 hover:bg-yellow-700 border-orange-600 hover:border-orange-700 text-white"><i class="uil uil-instagram"></i></a>
                            </a>
                        </li>
                    </ul>
                    <!-- Navbar Collapse Manu Button -->
                    <button data-collapse="menu-collapse" type="button" class="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden" aria-controls="menu-collapse" aria-expanded="false" @click="handler">
                        <span class="sr-only" >Navigation Menu</span>
                        <i class="mdi mdi-menu mdi-24px"></i>
                    </button>
                </div>

                <!-- Navbar Manu -->
                <div class="navigation lg_992:order-1 lg_992:flex" id="menu-collapse" :class="{hidden : !toggle}">
                    <ul class="navbar-nav" id="navbar-navlist">
                        <li class="nav-item active home">
                            <a class="nav-link active" href="#home">Acasa</a>
                        </li>
                        <li class="nav-item about">
                            <a class="nav-link" href="#about">Despre noi</a>
                        </li>
                        <li class="nav-item features">
                            <a class="nav-link" href="#features">Servicii</a>
                        </li>
                        <li class="nav-item portfolio">
                            <a class="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <!-- <li class="nav-item testi">
                            <a class="nav-link" href="#testi">Review</a>
                        </li>
                        <li class="nav-item pricing">
                            <a class="nav-link" href="#pricing">Pricing</a>
                        </li>
                        <li class="nav-item blog">
                            <a class="nav-link" href="#blog">Blog</a>
                        </li> -->
                        <li class="nav-item contact">
                            <a class="nav-link" href="#contact">Contact us</a>
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