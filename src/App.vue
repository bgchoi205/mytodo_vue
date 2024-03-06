<template>
  <TodoHeader></TodoHeader>
</template>

<script>
import TodoHeader from "./components/todos/TodoHeader.vue";

export default {
  name: "App",
  components: {
    TodoHeader,
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
</style>
