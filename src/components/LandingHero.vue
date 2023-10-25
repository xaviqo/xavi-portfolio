<template>
  <div class="flex justify-center flex-wrap h-full bg-gray-50">
    <main class="lg:container lg:h-[72vh] md:gap-6 2xl:gap-8 lg:items-center p-6 xl:my-16 grid grid-cols-12">
      <!--hero-->
      <div class="col-span-12 md:col-span-8 w-full">
        <div class="lg:pr-6">
          <div class="tracking-widest">
            <div  class="mb-4 text-4xl lg:text-5xl 2xl:text-6xl font-bold tracking-wide overflow-hidden">
              Full Stack - Java & VueJS developer
            </div>
            <div class="my-5 md:my-8 border-b-2 border-blue1 w-full" />
            <div
                class="mb-4 text-xl md:text-2xl lg:text-3xl font-bold tracking-wide overflow-hidden blink-typing-animation"
            >
              Hi there! 👋 <span class="inline">I'm Xavi Quiñones.</span>
            </div>
          </div>
          <p class="mb-6 tracking-wide md:text-xl">
            I'm a full-stack developer living in Barcelona, Spain, with a strong preference for Vue.js, Spring Boot, and the Linux ecosystem.
          </p>
          <div class="max-w-[235px] ">
            <SocialMedia font-size="text-3xl"/>
          </div>
          <!--      <div>
                  Tech Stack | VueJS, SpringBoot, SQL...
                </div>-->
        </div>
      </div>
      <!--photo-->
      <div
          class="hidden md:col-span-4 w-full md:inline shadow-2xl"
      >
        <img
            src="../assets/me-b.jpg"
            alt="Xavi Quiñones"
            class="shadow-2xl object-center object-cover h-full"
        >
      </div>
    </main>
  </div>
</template>
<script>
import SocialMedia from "./SocialMedia.vue";

export default {
  name: 'LandingHero',
  components: {SocialMedia},
  data: () => ({
  }),
  methods: {
  },
  mounted() {
  }
}
</script>
<style scoped>
.blink-typing-animation {
  white-space: nowrap;
  overflow: hidden;
  animation: typing 4s steps(40, end) 1, blink-caret .5s 4;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  0% {
    border-color: #00111a;
    border-right: 3px solid #00111a;
  } 100% {
      border-color: transparent;
      border-right: 3px solid rgba(255, 255, 255, 0);
    }
}
</style>