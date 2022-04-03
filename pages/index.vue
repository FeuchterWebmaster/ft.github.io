<template>
  <div>
    <div class="container-fluid mt-5 px-4">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="h2"><span class="bigRedText"> Kategorien </span></div>
        </div>
      </div>
      <div class="row pt-2">
        <div
          v-for="(category, id) in categories"
          :key="id"
          class="col-xl-1 col-lg-2 col-md-3 col-sm-4"
        >
          <CategoryThumb :category="category" />
        </div>
      </div>
    </div>

    <div class="container-fluid mt-5 px-4">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="h2"><span class="bigRedText"> Neue Pornos </span></div>
        </div>
      </div>

      <div class="row pt-2">
        <div
          class="col-xl-1 col-lg-2 col-md-4 col-sm-4"
          v-for="(video, id) in videos"
          :key="id"
        >
          <VideoThumb :video="video" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 offset-md-3 d-flex justify-content-center">
          <ul class="pagination">
            <li>
              <nuxt-link to="/seite/2/" v-if="nextPage">
                <button class="pageButtons buttons btn btn-primary">
                  Nächste Seite
                </button>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <SeoContent :content="textContent" />
    </div>
  </div>
</template>

<script>
import config from "~/assets/config";
import content from "~/assets/content";

export default {
  name: "index",
  head: {},
  data: () => ({}),
  async asyncData({ $axios, store }) {
    // const includeTags = config.tags.includeTags;
    // const excludeTags = config.tags.excludeTags;
    const includeTags = ["german"];
    const excludeTags = ["gay"];
    const skip = 0;
    const limit = config.videos.limit;
    const url = config.apiUrl + "/videos";
    const params = {
      includeTags,
      excludeTags,
      skip,
      limit,
    };
    // const url = `${url}/videos?tag=${mainTag}&skip=${skip}&limit=${limit}`
    const data = await $axios.$get(url, { params });
    const nextPage = data.videos.length === config.videos.limit;
    const videos = nextPage ? data.videos.slice(0, -1) : data.videos;

    const categories = config.categories.filter((x) => x.publish);

    const textContent = content.find((x) => x.name === "Index");

    return {
      videos,
      nextPage,
      categories,
      textContent,
    };
  },
};
</script>
