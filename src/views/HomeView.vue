<script setup>

import {todosFactory} from '../todosSetup';
const {todosIncompleted,todosCompleted,toggle,deleteTodo}=todosFactory();
 
</script>

<template>
 <h3>incompletos</h3>
 <p v-if="todosIncompleted.length === 0">nada que hacer :)</p>
<ul id="incomplete-tasks">
  <li v-for="todo in todosIncompleted" :key="todo.id" @click="toggle(todo.id)">
      <input type="checkbox">
      <label>{{ todo.name }}</label>
      
      <button class="delete" @click="deleteTodo(todo.id)">Delete</button>
    </li>
</ul>
<h3>completed</h3>
<ul id="complete-tasks">
  <li v-for="todo in todosCompleted" :key="todo.id" @click="toggle(todo.id)">
      <input type="checkbox" checked>
      <label>{{ todo.name }}</label>
      <button class="delete" @click="deleteTodo(todo.id)">Delete</button>
    </li>
</ul>
</template>

<style>

</style>
