<template>
  <TodoHeader></TodoHeader>
  <TodoList :myTodos="myTodos" @moveInput="moveInput"></TodoList>
  <TodoFooter></TodoFooter>
</template>

<script>
import TodoHeader from "../components/todos/TodoHeader.vue";
import TodoList from "../components/todos/TodoList.vue";
import TodoFooter from "../components/todos/TodoFooter.vue";

export default {
  name: "TodoApp",
  data: () => ({
    myTodos: [""],
  }),
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  methods: {
    moveInput() {
      this.$router.push("/ins");
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
