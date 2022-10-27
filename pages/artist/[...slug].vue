<template>
  <main>
    <headerView />

    <div class="container">
     <div class="row">
       <div class="three columns">
         <img class="u-max-full-width" :src="`https://cms-una.000webhostapp.com/storage/uploads${artist.image.path}`">
       </div>
       <div class="six columns">
         <h4>{{artist.title}}</h4>
         Nacimiento: {{artist.born}};
         País: {{artist.country}};
          <pre></pre>
         <h5>Descripción</h5>
         <span v-html="artist.description"></span>
       </div>
     </div>

   </div>
   <footerView />
  </main>
  </template>
  <script setup>
  const route = useRoute()
  const { data: artist, refresh: rAuthor } = 
    await useFetch(`https://cms-una.000webhostapp.com/api/content/item/artistas/${route.params.slug}`)
  rAuthor()
</script>