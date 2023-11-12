<template>
  <div class="bg-gray-50 w-full flex justify-center flex-wrap ">
    <div class="lg:container md:gap-6 2xl:gap-8 lg:items-center p-6 xl:my-16 grid grid-cols-12">
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
  </div>
</template>
<script>
import ProjectCard from "./ProjectCard.vue";
import projectsData from "../data/projects.json";
export default {
  name: 'ProjectsSection',
  data: () => ({
    //projects: projectsData
    projects: []
  }),
  components: {ProjectCard}
}
</script>
<style scoped>

</style>