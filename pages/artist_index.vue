<template>
  <div>
    <headerView/>
      <div class="container">
        <h3 style="margin-top: 15px">Información de artistas </h3>
          <p>Esta sección muestra la lista de los artistas</p>
        <ul>
          <li v-for="artist in artists" :key="artist._id">
            <NuxtLink :to="`/artist/`+artist._id">{{ artist.name }}</NuxtLink>
          </li>            
        </ul>
      </div>
    <footerView/>
  </div>
</template>

<script setup>
  const { data: artists } = 
    await useFetch(`https://cms-una.000webhostapp.com/api/content/items/artistas?fields={"name":true}`)
</script>