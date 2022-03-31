<template>
  <div>
    <div class="container-fluid mt-5 px-4">
      <!-- <div class="row align-items-center">
        <div class="col-md-3 offset-md-4">
          <h1 class="text-center">{{ pageNumber }}</h1>
        </div>
      </div> -->
      <div class="row">
        <div
          class="col-xl-1 col-lg-2 col-md-4 col-sm-4"
          v-for="video in videos"
          :key="video._id"
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
                  Prev page
                </button></nuxt-link
              >
            </li>
            <li>
              <nuxt-link v-if="nextPage" :to="`/seite/${pageNumber + 1}/`">
                <button class="pageButtons buttons btn btn-primary">
                  Next page
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
  name: "pornoSubpage",
  data() {
    return {};
  },
  head() {
    return {
      title: `Deutsche Pornos - Seite ${this.pageNumber}`,
      meta: [
        { hid: "robots", name: "description", content: "noindex, follow" },
      ],
    };
  },
  async asyncData({ route, $axios, store }) {
    const includeTags = config.tags.includeTags;
    const excludeTags = config.tags.excludeTags;
    const pageNumber = parseInt(route.params.number);
    let skip = config.videos.limit * (pageNumber - 1);
    let limit = config.videos.limit;
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

    const nextPage = data.videos.length === config.videos.limit;
    const videos = nextPage ? data.videos.slice(0, -1) : data.videos;

    return {
      videos,
      nextPage,
      pageNumber,
    };
  },
  computed: {
    prevLink() {
      return this.pageNumber === 2 ? "/" : `/seite/${this.pageNumber - 1}/`;
    },
  },
};
</script>
