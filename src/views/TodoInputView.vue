<template>
  <TodoHeader></TodoHeader>
  <TodoInput
    :input_title="input_title"
    :input_detail="input_detail"
    @saveTodo="saveTodo"
  ></TodoInput>
  <TodoFooter></TodoFooter>
</template>

<script>
import TodoHeader from "../components/todos/TodoHeader.vue";
import TodoFooter from "../components/todos/TodoFooter.vue";
import TodoInput from "../components/todos/TodoInput.vue";

export default {
  name: "TodoInputView",
  data: () => ({
    input_title: "a",
    input_detail: "a",
  }),
  components: {
    TodoHeader,
    TodoInput,
    TodoFooter,
  },
  methods: {
    closeInput() {
      this.$router.push("/");
    },
    saveTodo(data) {
      //   const data = {
      //     title: this.input_title,
      //     detail: this.input_detail,
      //   };

      this.axios
        .post("http://localhost:8000/todo/save/", data)
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });

      this.closeInput();
      // this.$router.go(-1);
    },
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
