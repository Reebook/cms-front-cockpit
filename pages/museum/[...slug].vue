<template>
  <main>
    <headerView />
    <div class="container">
    
     <div class="row">
       <div class="three columns">
     <img class="u-max-full-width" :src="`https://cms-una.000webhostapp.com/storage/uploads${museum.image.path}`">
       </div>
       <div class="six columns">
         <h4>{{museum.title}}</h4>
          <pre></pre>
         <h5>Descripción</h5>
         <span v-html="museum.description"></span>
       </div>
       <div class="two columns"></div>
     </div>

   </div>
   <footerView />
  </main>
  </template>
    <script setup>
    const route = useRoute()
    const { data: museum, refresh: rAuthor } = 
      await useFetch(`https://cms-una.000webhostapp.com/api/content/item/museos/${route.params.slug}`)
    rAuthor()
  </script>