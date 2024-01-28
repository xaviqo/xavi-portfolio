<template>
    <HeadNavbar />
    <LandingHero />
    <ProjectsSection />
    <ContactForm />
    <SiteFooter />
</template>
<script>
import HeadNavbar from "./components/HeadNavbar.vue";
import LandingHero from "./components/LandingHero.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ContactForm from "./components/ContactForm.vue";
import SiteFooter from "./components/SiteFooter.vue";

export default {
  components: {SiteFooter, ContactForm, ProjectsSection, LandingHero, HeadNavbar}
}
</script>

<style scoped>

</style>
