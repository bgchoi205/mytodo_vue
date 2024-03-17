<template>
  <TodoHeader></TodoHeader>
  <TodoList
    @openInput="openInput"
    :myTodos="myTodos"
    v-if="isInputState == false"
  ></TodoList>
  <TodoInput @closeInput="closeInput" v-if="isInputState"></TodoInput>
  <TodoFooter></TodoFooter>
</template>

<script>
import TodoHeader from "../components/todos/TodoHeader.vue";
import TodoList from "../components/todos/TodoList.vue";
import TodoFooter from "../components/todos/TodoFooter.vue";
import TodoInput from "../components/todos/TodoInput.vue";

export default {
  name: "TodoApp",
  data: () => ({
    isInputState: false,
    myTodos: [""],
  }),
  components: {
    TodoHeader,
    TodoList,
    TodoInput,
    TodoFooter,
  },
  methods: {
    openInput() {
      return (this.isInputState = true);
    },
    closeInput() {
      this.isInputState = false;
      this.getMyTodos();
    },
    getMyTodos() {
      this.axios
        .get("http://localhost:8000/todo/")
        .then((response) => {
          console.log(response.data);
          this.myTodos = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  created() {
    this.getMyTodos();
  },
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
