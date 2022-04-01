<template>
  <div>
    <div class="card">
      <NuxtLink :to="`/porno/${link}/`" :title="video.germanTitle">
        <img
          :src="video.mainThumb"
          class="thumbnail"
          :alt="video.germanTitle"
        />
        <!-- <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div> -->
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ["video", "link"],
};
</script>

<style scoped>
.thumbnail {
  width: 100%;
  object-fit: cover;
}
</style>