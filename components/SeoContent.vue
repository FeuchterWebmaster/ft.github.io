<template>
  <div class="row pt-3" v-if="content">
    <div class="col-md-6 offset-md-3">
      <h1>{{ content.title }}</h1>
      <div v-html="content.text"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "seocontent",
  props: ["content"],
};
</script>