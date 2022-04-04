<template>
  <div>
    <div class="container mt-5 px-4">
      <div class="row">
        <div class="col-md-12">
          <h1>{{ video.germanTitle }}</h1>
          <div class="ratio ratio-16x9">
            <iframe
              allowfullscreen
              :src="`${video.iframeSrc}`"
              frameborder="0"
              scrolling="no"
              style="max-width: 100%; height: 100%"
            ></iframe>
          </div>
          <div class="pt-2">
            <nuxt-link
              v-for="(tag, id) in video.tags"
              :key="id"
              :to="`/tag/${tag}/`"
              :title="`${tag} Pornos`"
            >
              <span class="tag"> {{ tag }} </span></nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tag {
  background-color: crimson;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-right: 10px;
  margin-bottom: 1px;
  padding-left: 5px;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>


<script>
import config from "~/assets/config";

export default {
  name: "pornoVideo",
  head() {
    const title =
      this.title.length > 40
        ? this.title.substring(0, 40) + "... | " + this.siteName
        : this.title + " | " + this.siteName;
    return {
      title: title,
      meta: [
        // { hid: "robots", name: "robots", content: "noindex, follow" },
        {
          hid: "description",
          name: "description",
          content:
            this.title.substring(0, 130) + " - Porno auf " + this.siteName,
        },
        {
          hid: "robots",
          name: "robots",
          content: "noindex, follow",
        },
      ],
    };
  },
  async asyncData({ route, $axios, store }) {
    const slug = route.params.slug;
    const url = config.apiUrl + "/video/slug";
    const params = { slug };
    const video = await $axios.$get(url, { params });
    return {
      video: video.item,
      title: video.item.germanTitle,
      siteName: config.siteName,
    };
  },
};
</script>

