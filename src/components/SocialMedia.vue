<template>
  <div class="flex flex-wrap justify-between">
    <template v-for="icon in socialMedia">
      <a
          :class="'cursor-pointer hover:text-gray-500 px-1 ' + fontSize"
          :href="icon.link"
      >
        <font-awesome-icon
            :icon="icon.icon"
        />
      </a>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    fontSize: String
  },
  data: () => ({
    socialMedia: [
      { icon: 'fa-brands fa-linkedin-in', link: 'https://github.com/xaviqo'},
      { icon: 'fa-brands fa-github', link: 'https://www.linkedin.com/in/xaviqo/'},
      { icon: 'fa-brands fa-spotify', link: 'https://open.spotify.com/user/gjp985f4rglr6vvdh2mwsdu5l'},
      { icon: 'fa-solid fa-at', link: '#contact'}
    ]
  })
};
</script>