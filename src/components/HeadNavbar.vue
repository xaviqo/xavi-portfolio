<template>
  <div
      class="fixed py-4 px-5 w-full flex justify-between z-50"
      :class="isScrolled ? 'transition duration-300 bg-gradient-to-r from-blue1/80 to-blue2/80' : 'transition duration-300 bg-transparent'"
  >
    <div
        class="bg-white text-blue1 py-1 pl-3 pr-2 font-bold lg:text-xl xl:text-2xl"
        :class="menu.show ? 'shadow-2xl' : ''"
        style="letter-spacing: 5px"
    >
      XAVI.TECH
    </div>
    <div class="p-1">
      <button @click="switchMenuShow">
        <font-awesome-icon
            class="text-white text-xl lg:text-2xl xl:text-3xl"
            :icon="menu.show ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"
        />
      </button>
    </div>
  </div>
  <nav
      class="h-screen w-full pt-16 bg-blue1/60 backdrop-blur-sm flex flex-wrap justify-center items-start"
      :class="menu.show ? 'fixed' : 'hidden'"
  >
    <ul class="w-full flex flex-col justify-center items-center mt-10">
      <li
          v-for="item in menu.items"
          class="mt-4 py-2 border-b border-solid border-gray-400 w-1/2 md:w-1/3 lg:w-2/5 text-center"
      >
        <span class="text-white font-bold cursor-pointer py-1 px-3 transition duration-500 hover:bg-white hover:text-blue1 md:text-xl lg:text-2xl " style="letter-spacing: 5px">
          {{ item.name.toUpperCase() }}
        </span>
      </li>
    </ul>
    <div class="w-[200px]">
      <SocialMedia font-size="text-3xl" />
    </div>
  </nav>
</template>
<script>
import SocialMedia from "./SocialMedia.vue";

export default {
  name: 'HeadNavbar',
  components: {SocialMedia},
  data: () => ({
    menu: {
      items: [
        { name: 'About', link: '#', icon: 'fa-regular fa-lightbulb' },
        { name: 'Skills', link: 'skills', icon: 'fa-solid fa-rocket' },
        { name: 'Projects', link: 'projects', icon: 'fa-solid fa-diagram-project' },
        { name: 'Blog', link: '#', icon: 'fa-solid fa-diagram-project' },
        { name: 'Contact', link: '#', icon: 'fa-solid fa-paper-plane' },
      ],
      show: false,
    },
    isScrolled: false
  }),
  methods: {
    switchMenuShow(){
      this.menu.show = !this.menu.show;
    },
    checkScroll(){
      const screenHeight = window.innerHeight;
      const yPercentage = (window.scrollY / screenHeight) * 100;
      this.isScrolled = (yPercentage > 5);
    }
  },
  created() {
    this.checkScroll();
    window.addEventListener('scroll', () => {
      this.checkScroll();
    })
  }
}
</script>
<style scoped>

</style>