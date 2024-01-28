<template>
  <div class="bg-gray-50 w-full flex justify-center flex-wrap" id="projects">
    <div class="lg:container md:gap-6 2xl:gap-8 lg:items-center xl:my-16 grid grid-cols-12">
      <template v-for="(p,i) in projects">
        <ProjectCard :project="p" :id="i" >
          <template v-slot:description>
            <div v-html="p.description"></div>
          </template>
        </ProjectCard>
      </template>
    </div>
  </div>
</template>
<script>
import ProjectCard from "./ProjectCard.vue";
export default {
  name: 'ProjectsSection',
  data: () => ({
    projects: [
      {
        col: 12,
        imgs: ['soulsync-0','soulsync-1','soulsync-2'],
        name: 'SOULSYNC',
        stack: ['springboot','vuejs','docker','postgresql','bash'],
        repo: 'https://github.com/xaviqo/SoulSyncBot',
        demo: 'https://soulsync.xavi.tech',
        description: `SoulSync is a bot to automate the downloading of music from the <a class="font-bold underline" href="https://es.wikipedia.org/wiki/Soulseek">SoulSeek</a> network.
It uses the <a class="font-bold underline" href="https://developer.spotify.com/documentation/web-api">Spotify</a>
and <a class="font-bold underline" href="https://github.com/slskd/slskd">Slskd</a> APIs to manage downloads.`
      },
      {
        col: 12,
        imgs: ['chat-0','chat-1'],
        name: 'WEBSOCKETS CHAT',
        stack: ['springboot','vuejs','postgresql'],
        repo: 'https://github.com/xaviqo/SoulSyncBot',
        demo: 'https://chat.xavi.tech',
        description: `Allows you to create quick chat rooms by providing a link to invite other users.
        Generates avatars with the <a class="font-bold underline" href="https://www.dicebear.com/introduction/">Dicebear</a> API based on nickname
        and a spam filter customizable by time between messages,
        forbidden words, URLs and other criteria...`
      }
    ]
  }),
  components: {ProjectCard}
}
</script>
<style scoped>

</style>