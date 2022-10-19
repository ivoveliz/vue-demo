import { computed, ref } from 'vue'
import initialTodos from './mock/todos';

const todos = ref([...initialTodos]);
const todosIncompleted = computed(() => todos.value.filter(t => !t.completed));
const todosCompleted = computed(() => todos.value.filter(t => t.completed));
const length = computed(() => todos.value.length);

const toggle = (id) => {
  const todo = todos.value.find(t => t.id === id);
  if (todo?.completed !== undefined) {
    todo.completed = !todo.completed;
  }
};

const deleteTodo = (id) => {
  todos.value = todos.value.filter(t => t.id !== id);
};

const add = (name) => {
  todos.value.push({id: length.value + 1, name, completed: false});
};

const update = (todosPayload) => {
  todos.value = todosPayload;
};

const todosFactory = () => ({todosIncompleted, todosCompleted, toggle,deleteTodo,add,update });

export {todosFactory};