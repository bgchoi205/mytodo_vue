<template>
  <TodoHeader></TodoHeader>
  <TodoList></TodoList>
  <TodoFooter></TodoFooter>
</template>

<script>
import TodoHeader from "./components/todos/TodoHeader.vue";
import TodoList from "./components/todos/TodoList.vue";
import TodoFooter from "./components/todos/TodoFooter.vue";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
};
</script>

<style>
/* 노멀라이징 */
* {
  padding: 0;
  margin: 0;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  background-color: inherit;
  border: none;
}
/* 노멀라이징 끝 */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

/* common */

.container {
  max-width: 1280px;
  margin: 0 auto;
}

.btn {
  cursor: pointer;
  font-weight: 500;
  font-size: 1.1rem;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 2px;
}

/* common end */
</style>
