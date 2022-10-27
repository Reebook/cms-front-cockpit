<template>
  <div>
    <headerView/>
     <div class="container">
      <h3 style="margin-top: 15px">Información de pinturas</h3>
        <p>Esta sección muestra el listado de pinturas</p>
      <ul>
           <li v-for="painting in paintings" :key="painting._id">
            <NuxtLink :to="`/paintings/`+painting._id">{{ painting.title }}</NuxtLink>
           </li>
    
      </ul>
      </div>
    <footerView/>
  </div>
 </template>
 <script setup>
 const { data: paintings } = 
   await useFetch(`https://cms-una.000webhostapp.com/api/content/items/pinturas?fields={"title":true}`)
</script>