<template>
  <main>
    <headerView/>
    <div class="container">
      <div class="row">
        <h2 style="margin-top: 15px"></h2>
        <p>Este sitio muestra la información sobre artistas y museos.</p>
        <ul>
          <li> <NuxtLink to="/artist_index">Artista</NuxtLink></li>
          <li> <NuxtLink to="/painting_index">Pintura</NuxtLink></li>
          <li> <NuxtLink to="/museum_index">Museos</NuxtLink></li>
        </ul>
      </div>
    </div>
    <FooterView/>
  </main>
</template>

<script>
import HeaderView from "../components/headerView.vue";
  export default {
    async asyncData({ $content, params }) {
        console.log($content);
        const articles = await $content("blog")
            .only(["title", "slug"])
            .sortBy("createdAt", "asc")
            .fetch();
        return {
            articles
        };
    },
    components: { HeaderView }
}
</script>