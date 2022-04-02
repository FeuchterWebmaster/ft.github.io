<template>
  <div>
    <div class="card border-0">
      <NuxtLink :to="`/tag/${category.tag}/`" :title="category.title">
        <img
          :src="`images/categories/${category.image}`"
          class="thumbnail"
          :alt="category.title"
        />
      </NuxtLink>
      <!-- <div class="card-body"> -->
      <h6 class="card-title">
        <NuxtLink :to="`/tag/${category.tag}/`" :title="category.title">
          {{ category.name }}
        </NuxtLink>
      </h6>
      <!--
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
</style>

<script>
export default {
  name: "videoThumb",
  props: ["category"],
};
</script>

<style scoped>
.thumbnail {
  width: 100%;
  border-radius: 6px;
  border-style: none;
  object-fit: cover;
}
</style>