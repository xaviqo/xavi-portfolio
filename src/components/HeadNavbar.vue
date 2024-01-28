<template>
  <div
      class="h-[64px]"
  >
    <div
        class="fixed py-4 px-5 md:p-6 w-full flex justify-between z-50 "
        :class="isScrolled ? 'bg-transparent shadow-none' : 'bg-white shadow-sm'"
    >
      <div
          class="bg-graybg text-blue1 pl-3 pr-2 xl:pl-5 xl:pr-4 font-bold lg:text-xl xl:text-2xl flex items-center"
          :class="{
            'transition duration-800 bg-transparent' : isScrolled,
            'transition duration-800 bg-graybg shadow-lg' : !isScrolled
          }"
          style="letter-spacing: 5px"
      >
        <span
            class="z-50"
            :class="{
             'transition duration-800 text-transparent' : isScrolled,
            'transition duration-800 text-blue1' : !isScrolled
          }"
        >
          XAVI.TECH
        </span>
      </div>
      <div class="bg-graybg p-2 xl:p-3 shadow-lg">
        <button @click="switchMenuShow">
          <font-awesome-icon
              class="text-blue1 text-xl lg:text-2xl xl:text-3xl hover:text-gray-500"
              :icon="menu.show ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"
          />
        </button>
      </div>
    </div>
  </div>
  <nav
      class="h-screen w-full pt-16 bg-blue1/30 backdrop-blur-sm flex flex-wrap justify-center items-start z-40"
      :class="menu.show ? 'fixed top-0' : 'hidden'"
  >
    <ul class="w-full flex flex-col justify-center items-center mt-14">
      <li
          v-for="item in menu.items"
          class="mt-6 w-1/2 md:w-1/6 text-center shadow-md"
      >
        <div class="font-bold cursor-pointer w-full py-1 px-3 transition duration-500 bg-white/70 hover:bg-white hover:text-blue1 md:text-xl lg:text-2xl shadow-2xl" style="letter-spacing: 5px">
          {{ item.name.toUpperCase() }}
        </div>
      </li>
    </ul>
    <div class="bg-white/70 p-4 w-1/2 md:w-1/3 lg:w-1/5 shadow-md">
      <SocialMedia font-size="text-3xl" />
    </div>
  </nav>
  <div class="w-full flex justify-center z-50">
    <div
        :class="isScrolled ? 'hidden' : 'hidden xl:inline xl:fixed bottom-0 mb-8'"
    >
      <div>
        <button
            class="animate-bounce border border-gray-800 hover:border-gray-300 rounded-full p-2"
            @click="scrollToProjects"
        >
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg>
        </button>
      </div>
    </div>
  </div>
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
    },
    scrollToProjects(){
      const targetElement = document.getElementById('projects');
      console.log(targetElement)
      if (targetElement) {
        const targetPosition = targetElement.offsetTop + 80;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
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