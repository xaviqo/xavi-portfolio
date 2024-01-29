<template>
  <div class="col-span-12">
    <div class="grid grid-cols-12 w-full p-10">
        <div
            class="col-span-12 lg:col-span-8 flex flex-wrap"
            :class="getColsCssByIndex(true)"
        >
          <div class="lg:hidden w-full text-5xl font-bold mb-6 mt-4 lg:mt-0 lg:mb-0 md:p-0">
            {{ project.name }}
          </div>
          <div class="md:w-full flex justify-center xl:w-fit">
            <transition name="fade" mode="out-in">
              <img
                  :key="currentImg"
                  :src="getImgUrl(currentImg)"
                  :alt="project.name"
                  class="max-h-[400px] shadow-lg"
              >
            </transition>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-4 flex flex-col justify-between text-xl"
             :class="getColsCssByIndex(false)"
        >
          <div>
            <div class="hidden lg:flex w-full text-5xl font-bold mb-4 mt-4 lg:mt-0 py-3 md:p-0">
              {{ project.name }}
            </div>
            <slot name="description"></slot>
            <div class="w-full grid grid-cols-4 mt-4 text-sm">
              <div
                  v-for="tec in project.stack"
                  class="flex flex-nowrap items-center text-white font-bold shadow-md m-1"
                  :style="'padding: 2px 6px; background-color:'+Stack[tec].bg"
              >
                <font-awesome-icon
                    class="mr-1"
                    :icon="Stack[tec].icon"
                />
                <span class="tracking-wide overflow-hidden whitespace-nowrap">
                  {{ Stack[tec].name }}
                </span>
              </div>
            </div>
          </div>
          <div>
            <div class="w-full mt-4 flex justify-between font-bold text-xl lg:text-2xl">
              <a v-if="project.repo != null" :href="project.repo" class="bg-gray-100 p-2 shadow-lg hover:text-gray-500">
                <font-awesome-icon
                    class="text-blue1"
                    icon="fa-brands fa-github"
                />
                Visit Repository
              </a>
              <a v-if="project.demo != null" :href="project.demo" class="bg-gray-100 p-2 shadow-lg hover:text-gray-500">
                <font-awesome-icon
                    class="text-blue1"
                    icon="fa-solid fa-laptop-code"
                />
                Watch Demo
              </a>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import Stack from "../Stack.js";

export default {
  name: 'ProjectCard',
  computed: {
    Stack() {
      return Stack
    }
  },
  components: {FontAwesomeIcon},
  data: () => ({
    currentImg: null,
    ms: 9000
  }),
  mounted() {
    setInterval(this.changeImage, this.ms);
  },
  created() {
    this.currentImg = this.project.imgs[0];
  },
  methods: {
    changeImage() {
      const currentIndex = this.project.imgs.indexOf(this.currentImg);
      this.currentImg = this.project.imgs[(currentIndex + 1) % this.project.imgs.length];
    },
    getColsCssByIndex(isImageColumn){
      //const notMobile = window.innerWidth > 400;
      const isOdd = this.id%2!==0;
      if (isImageColumn) {
        return isOdd
            ?'lg:order-2 flex justify-end lg:ml-6'
            :'lg:mr-6';
      } else {
        return 'lg:order-1 mt-5 mb-5 md:mt-0 md:mb-0'
      }
    },
    getImgUrl(img) {
      return new URL('../assets/'+img+'.jpg',import.meta.url).href;
    }
  },
  props: {
    project: {
      type: Object,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>