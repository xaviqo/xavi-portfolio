<template>
  <div class="grid grid-cols-12 gap-14 p-16 bg-gradient-to-r from-slate-50 to-gray-200">
    <template v-for="p in projects">
      <ProjectCard
          :bg="p.bg"
          :col="p.col"
          :img="p.img"
          :name="p.name"
          :id="p.id"
          :stack="p.stack"
      >
      </ProjectCard>
    </template>
  </div>
</template>
<script>
import ProjectCard from "./ProjectCard.vue";
import projectsData from "../data/projects.json";
export default {
  name: 'ProjectsSection',
  data: () => ({
    projects: projectsData
  }),
  components: {ProjectCard}
}
</script>
<style scoped>

</style>