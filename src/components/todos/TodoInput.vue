<template>
  <div class="section-body">
    <div class="container section-body-child">
      <div id="section-input-wrap">
        <div id="section-input">
          <div id="title-input-wrap">
            <div class="font-title"><span>Title</span></div>
            <div>
              <input
                type="text"
                name="title_input"
                id="title_input"
                v-model="input_title"
              />
            </div>
          </div>
          <div id="detail-input-wrap">
            <div class="font-title"><span>Detail</span></div>
            <div>
              <textarea
                name="detail_input"
                id="detail_input"
                v-model="input_detail"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container section-body-child">
      <div id="section-btns-wrap">
        <div id="section-btns">
          <div class="btn-wrap">
            <button id="saveBtn" class="btn btn-green" v-on:click="saveTodo">
              Save
            </button>
            <button id="cancelBtn" class="btn btn-red" v-on:click="closeInput">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    // 수정중
    input_title: "",
    input_detail: "",
  }),
  methods: {
    closeInput() {
      this.$emit("closeInput");
    },
    saveTodo() {
      const data = {
        title: this.input_title,
        detail: this.input_detail,
      };

      this.$emit("saveTodo", data);

      // this.axios
      //   .post("http://localhost:8000/todo/save/", data)
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //   });

      this.closeInput();
      // this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.font-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #0a6ecd;
}

.section-body {
  height: auto;
  min-height: calc(100vh - 70px - 80px);
  padding-top: 60px;
}

.section-body-child {
  margin-top: 0.9rem;
}

#section-btns {
  display: flex;
  justify-content: end;
}

.btn-green {
  color: #5ec75e;
  border: 2px solid #5ec75e;
}

.btn-red {
  color: #cd0000;
  border: 2px solid #cd0000;
}

#section-input-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

#section-input {
  background-color: #eee;
  width: 60%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

#detail-input-wrap {
  margin-top: 2rem;
}

#section-btns-wrap {
  display: flex;
  justify-content: center;
}

#section-btns-wrap > #section-btns {
  width: 60%;
}

#title_input {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  font-size: 1.3rem;
}

#detail_input {
  width: 100%;
  height: calc(100vh * 0.25);
  border: none;
  resize: none;
  font-size: 1.2rem;
}

#saveBtn {
  margin-right: 4px;
}
</style>
