<template>
  <main>
    <headerView />
    <div class="container">

     <div class="row">
       <div class="three columns">
        <img class="u-max-full-width" :src="`https://cms-una.000webhostapp.com/storage/uploads${painting.image.path}`">
       </div>
       <div class="six columns">
         <h2>{{painting.title}}</h2>
         by <NuxtLink :to="'/artist/'+painting.artist_id._id">{{painting.artist_name}}</NuxtLink>
          <pre></pre>
         <h5>Descripción</h5>
         <span v-html="painting.description"></span>
       </div>
     </div>

   </div>
   <footerView />
  </main>
</template>
<script setup>
const route = useRoute()
const { data: painting, refresh: rAuthor } = 
  await useFetch(`https://cms-una.000webhostapp.com/api/content/item/pinturas/${route.params.slug}`)
rAuthor()
</script>