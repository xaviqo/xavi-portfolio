<template>
  <section
      class="md:p-8 xl:p-10 2xl:p-16 bg-gradient-to-r from-blue1 to-blue2 items-center grid grid-cols-2 text-white min-h-[60vh] md:min-h-[55vh] lg:min-h-0"
  >
    <div class="w-full p-6 xl:p-12 col-span-2 md:col-span-1">
      <div
          class="tracking-widest"
      >
        <div  class="text-3xl lg:text-4xl xl:text-6xl font-bold tracking-wide overflow-hidden">
          Hi there! I'm Xavi.
        </div>
      </div>
      <div class="my-2 md:my-3 border-b-2 border-white w-full" />
      <div
          class="text-gray-400 text-xl xl:text-2xl italic font-bold tracking-widest overflow-hidden blink-typing-animation"
      >
        Full Stack Developer
      </div>
      <p class="mt-8 uppercase font-bold tracking-wide">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad error exercitationem ipsam labore laborum nostrum odit provident quaerat vero.
      </p>
      <div class="max-w-[165px]">
        <SocialMedia font-size="text-2xl"/>
      </div>
    </div>
    <div class="hidden p-16 w-full md:col-span-1 md:flex justify-center">
      <img
          src="../assets/me-b.jpg"
          alt="Xavi Quiñones"
          class="rounded shadow-2xl max-h-[450px]"
      >
    </div>
  </section>
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
  animation: typing 4s steps(40, end) 1, blink-caret .8s 4;
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
    border-color: #ffffff;
    border-right: 3px solid rgba(255, 255, 255, 0.85);
  } 100% {
    border-color: transparent;
    border-right: 3px solid rgba(255, 255, 255, 0);
  }
}
</style>