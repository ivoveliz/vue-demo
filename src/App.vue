<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import {todosFactory} from './todosSetup';
import todoService from './services/todoService'
const {update} = todosFactory();

  const isLoading = ref(true);
  async function prefetch() {
    update(await todoService.getTodos());
    isLoading.value = false;
  }
  prefetch();
</script>

<template>
      
  <div class="container">
    <h2 v-if="isLoading">Loading TODOs...</h2>
    <template v-if="!isLoading">
    <ul>
      <RouterLink to="/">todolist</RouterLink>
    </ul>
    <ul>
      <RouterLink to="/new">newtodo</RouterLink>
    </ul>
    <RouterView />
    </template>
    
  </div>
 
</template>

<style>
@import './assets/base.css';
</style>
