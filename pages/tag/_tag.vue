<template>
  <div>
    <div class="container-fluid mt-5 px-4">
      <div class="col-md-12 text-center">
        <div class="h1" v-if="seoContent">
          <span class="bigRedText">{{ tag.replace("-", " ") }} Pornos</span>
        </div>
        <h1 class="h1" v-else>
          <span class="bigRedText">{{ tag }} Pornos</span>
        </h1>
      </div>
      <div class="row">
        <div
          class="col-xl-1 col-lg-2 col-md-4 col-sm-4"
          v-for="(video, id) in videos"
          :key="id"
        >
          <VideoThumb :link="video._id" :video="video" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 offset-md-3 d-flex justify-content-center">
          <ul class="pagination">
            <li>
              <nuxt-link :to="`/tag/seite/${tag}/2/`" v-if="nextPage">
                <button class="pageButtons buttons btn btn-primary">
                  Nächste Seite
                </button>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <SeoContent :content="seoContent" />
    </div>
  </div>
</template>

<script>
import config from "~/assets/config";
import content from "~/assets/content";

export default {
  name: "tag",
  data: () => ({}),
  head() {
    const category = config.categories.find(
      (x) => x.tag === this.$route.params.tag
    );

    return {
      title: category
        ? `${category.title} | Feuchte Tube`
        : `${this.$route.params.tag} Pornos | Feuchte Tube`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: category
            ? category.metaDescription
            : `${this.$route.params.tag.replace(
                "-",
                " "
              )} Pornos kostenlos auf Feuchte Tube anschauen. Täglich neue ${this.$route.params.tag.replace(
                "-",
                " "
              )} Pornos für dich ohne Registrierung, auch auf dem Handy.`,
        },
        {
          hid: "robots",
          name: "robots",
          content: category ? "index, follow" : "noindex, follow",
        },
      ],
    };
  },
  async asyncData({ $axios, store, route }) {
    // const includeTags = config.tags.includeTags;
    // const excludeTags = config.tags.excludeTags;
    const includeTags = ["german"];
    const excludeTags = ["gay"];
    const tag = route.params.tag;
    includeTags.push(tag);
    const skip = 0;
    const limit = config.videos.limit;
    const url = config.apiUrl + "/videos";
    const params = {
      includeTags,
      excludeTags,
      skip,
      limit,
    };
    const data = await $axios.$get(url, { params });
    const nextPage = data.videos.length === config.videos.limit;
    const videos = nextPage ? data.videos.slice(0, -1) : data.videos;

    const category = config.categories.find((x) => x.tag === tag);
    const seoContent = category
      ? content.find((x) => x.name === category.name)
      : false;

    return {
      videos,
      nextPage,
      tag,
      seoContent,
    };
  },
};
</script>