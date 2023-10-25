<template>
    <HeadNavbar />
    <LandingHero />
    <ProjectsSection />
  <div class="fixed bg-gradient-to-b bottom-0 from-transparent to-white/40 w-full z-30 h-12">

  </div>
</template>
<script>
import {defineComponent} from "vue";
import HeadNavbar from "./components/HeadNavbar.vue";
import LandingHero from "./components/LandingHero.vue";
import XaviCard from "./components/ProjectCard.vue";
import ProjectsSection from "./components/ProjectsSection.vue";

export default defineComponent({
  components: {ProjectsSection, XaviCard, LandingHero, HeadNavbar}
})
</script>

<style scoped>

</style>
