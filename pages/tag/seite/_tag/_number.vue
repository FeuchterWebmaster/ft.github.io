<template>
  <div>
    <div class="container-fluid mt-5 px-4">
      <div class="col-md-12 text-center">
        <div class="h1">
          <span class="bigRedText">{{ tag }} Pornos</span>
        </div>
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
              <nuxt-link :to="prevLink"
                ><button class="pageButtons buttons btn btn-primary">
                  Vorige Seite
                </button></nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                v-if="nextPage"
                :to="`/tag/seite/${tag}/${pageNumber + 1}/`"
              >
                <button class="pageButtons buttons btn btn-primary">
                  Nächste Seite
                </button>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "~/assets/config";

export default {
  name: "tagSubpage",
  data() {
    return {};
  },
  head() {
    return {
      title: `${this.tag} Pornos - Seite ${this.pageNumber}`,
      meta: [
        { hid: "robots", name: "description", content: "noindex, follow" },
      ],
    };
  },
  async asyncData({ route, $axios, store }) {
    // const includeTags = config.tags.includeTags;
    // const excludeTags = config.tags.excludeTags;
    const maximalPaginationSize = config.videos.maximalPaginationSize;
    const includeTags = ["german"];
    const excludeTags = ["gay"];
    const tag = route.params.tag;
    includeTags.push(tag);
    const pageNumber = parseInt(route.params.number);
    const skip = pageNumber >= 0 ? config.videos.limit * (pageNumber - 1) : 0;
    const limit = config.videos.limit;
    const url = config.apiUrl + "/videos";
    const params = {
      includeTags,
      excludeTags,
      skip,
      limit,
    };
    const data = await $axios.$get(url, { params });

    if (!data.videos.length) {
      return Error({ statusCode: 404, message: "No videos found!" });
    }

    const nextPage =
      data.videos.length === config.videos.limit &&
      pageNumber <= maximalPaginationSize;
    const videos = nextPage ? data.videos.slice(0, -1) : data.videos;

    return {
      videos,
      nextPage,
      pageNumber,
      tag,
    };
  },
  computed: {
    prevLink() {
      return this.pageNumber === 2
        ? `/tag/${this.tag}/`
        : `/tag/seite/${this.tag}/${this.pageNumber - 1}/`;
    },
  },
};
</script>
