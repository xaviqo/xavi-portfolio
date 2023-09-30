<template>
<div>
  <HeadNavbar />
  <LandingHero />
  <ProjectsSection />
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
