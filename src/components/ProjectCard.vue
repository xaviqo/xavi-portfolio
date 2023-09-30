<template>
  <div
      class="rounded shadow-2xl"
      :class="[`lg:${col} col-span-12`,row]"
      style="background-size: cover; background-position: center;"
      :style="`background-image:url('${getImageRoute(false)}')`"
  >
    <div
        :class="bg"
        class="p-10 rounded shadow-2xl"
    >
      <div>
        <img
            :src="getImageRoute(true)"
            :alt="name"
            class="max-h-[400px]"
        >
      </div>
      <p
          :class="bg"
          class="backdrop-blur p-5 text-white font-bold mt-6"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque, beatae commodi cum cupiditate excepturi exercitationem facilis hic illum impedit molestiae provident, quas quisquam, reiciendis saepe similique tempore voluptatem voluptatibus!
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'XaviCard',
  data: () => ({
    doubleColumn: false
  }),
  mounted() {
    this.doubleColumn = this.col[this.col.length-1] > 4;
  },
  methods: {
    getImageRoute(mainImg) {
      return mainImg
          ? `../src/assets/projects/${this.img}`
          : `../src/assets/projects/backgrounds/${this.id}.jpg`;
    }
  },
  props: {
    col: {
      type: String,
      required: false
    },
    row: {
      typ: String,
      required: false
    },
    bg: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    stack: {
      type: Array,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  }
}
</script>
<style scoped>

</style>