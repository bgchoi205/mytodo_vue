<template>
  <TodoHeader></TodoHeader>
  <TestTodoDetail></TestTodoDetail>
  <TodoFooter></TodoFooter>
</template>

<script>
import TodoHeader from "../components/todos/TodoHeader.vue";
import TodoFooter from "../components/todos/TodoFooter.vue";
import TestTodoDetail from "../components/test/TestTodoDetail.vue";

export default {
  name: "TestView",
  components: {
    TodoHeader,
    TestTodoDetail,
    TodoFooter,
  },
  methods: {},
};
</script>

<style>
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
