<template>
  <div class="col-span-12">
    <div class="grid grid-cols-12 w-full p-10">
        <div
            class="col-span-12 lg:col-span-8"
            :class="getColsCssByIndex(true)"
        >
          <transition name="fade" mode="out-in">
            <img
                :key="currentImg"
                :src="'../src/assets/projects/' + currentImg + '.jpg'"
                :alt="project.name"
                class="max-h-[400px] shadow-lg"
            >
          </transition>
        </div>
        <div class="col-span-12 lg:col-span-4 flex flex-col justify-between text-xl"
             :class="getColsCssByIndex(false)"
        >
          <div>
            <div class="w-full text-5xl font-bold mb-4 mt-4 lg:mt-0 py-3 md:p-0">
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
    getColsCssByIndex(isMainCol){
      const notMobile = window.innerWidth > 400;
      if (notMobile && this.id%2!==0) {
        return isMainCol
            ?'order-2 flex justify-end'
            :'order-1';
      }
    },
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