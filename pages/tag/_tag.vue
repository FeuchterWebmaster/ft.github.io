<template>
  <div>
    <div class="container-fluid mt-5 px-4">
      <div class="col-md-12 text-center">
        <h1>{{ tag }} Pornos - Seite 1</h1>
      </div>
      <div class="row">
        <div class="col-md-1" v-for="video in videos" :key="video._id">
          <VideoThumb :link="video._id" :video="video" />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 offset-md-3 d-flex justify-content-center">
          <ul class="pagination">
            <li>
              <nuxt-link :to="`/tag/seite/${tag}/2/`" v-if="nextPage">
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
export default {
  name: "tag",
  data: () => ({}),
  head() {
    return {
      title: `${this.tag} Pornos | Feuchte Tube`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Kostenlos ${this.tag} Pornos auf Feuchte Tube anschauen. Deutsche Pornos mit dem Stichwort ${this.tag}. Es werden jeden Tag neue ${this.tag} Videos hochgeladen.`,
        },
      ],
    };
  },
  async asyncData({ $axios, store, route }) {
    const includeTags = store.state.includeTags;
    const excludeTags = store.state.excludeTags;
    const tag = route.params.tag;
    includeTags.push(tag);
    const skip = 0;
    const limit = store.state.limit;
    const url = store.state.apiUrl + "/videos";
    const params = {
      includeTags,
      excludeTags,
      skip,
      limit,
    };
    const data = await $axios.$get(url, { params });
    const nextPage = data.videos.length === store.state.limit;
    const videos = nextPage ? data.videos.slice(0, -1) : data.videos;
    return {
      videos,
      nextPage,
      tag,
    };
  },
};
</script>