<template>
  <div>
    <headerView/>
     <div class="container">
      <h3 style="margin-top: 15px">Información de museos</h3>
        <p>En esta sección muestra la lista de museos</p>
        <ul>
           <li v-for="museum in museums" :key="museum._id">
            <NuxtLink :to="`/museum/`+museum._id">{{ museum.title }}</NuxtLink>
           </li>
      </ul>
 
    </div>
    <footerView/>
  </div>
 </template>
  <script setup>
  const { data: museums } = 
    await useFetch(`https://cms-una.000webhostapp.com/api/content/items/museos?fields={"title":true}`)
 </script>