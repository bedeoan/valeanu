<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- <switcher /> -->
  </div>
</template>

<script>
 import switcher from '@/components/switcher.vue';
export default {
  data() {
    return {
      
    }
  },
  components:{
    switcher
  }

}
</script>
