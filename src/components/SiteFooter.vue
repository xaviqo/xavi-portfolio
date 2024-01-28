<template>
  <div class="p-4 w-full flex justify-between bg-gray-200">
    <div>
      XAVI.TECH {{ new Date().getFullYear() }}
    </div>
    <div class="flex justify-between">
      <SocialMedia font-size="text-xl" />
    </div>
  </div>
</template>
<script>
import SocialMedia from "./SocialMedia.vue";

export default {
  name: 'SiteFooter',
  components: {SocialMedia}
}
</script>
<style scoped>

</style>