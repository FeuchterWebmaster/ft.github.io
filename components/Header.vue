<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <nuxt-link class="navbar-brand" to="/" :title="siteName">
          <img class="logo" src="/images/ft.png" :alt="siteName" />
        </nuxt-link>
        <button
          class="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <nuxt-link class="nav-link h3" aria-current="page" to="/"
                >Start</nuxt-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle h3"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Kategorien
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li><a href="" class="dropdown-item h3">Alle</a></li>
                <li v-for="(category, id) in categories" :key="id">
                  <nuxt-link
                    class="dropdown-item h3"
                    :to="`/tag/${category.tag}/`"
                    :title="category.title"
                    >{{ category.name }}</nuxt-link
                  >
                </li>
              </ul>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link h3" href="#">Pornostars</a>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import config from "~/assets/config";

export default {
  name: "Header",
  data: () => ({
    siteName: config.siteName,
    categories: config.categories.filter((x) => x.publish),
  }),
};
</script>


<style scoped>
.logo {
  width: 50%;
  height: auto;
}
.nuxt-link-active {
  color: red;
}
</style>