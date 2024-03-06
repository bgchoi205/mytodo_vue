<template>
  <div class="section-body">
    <div class="container section-body-child">
      <div id="section-btns">
        <button class="btn btn-green">Add+</button>
      </div>
    </div>
    <div class="container section-body-child">
      <div id="section-list">
        <ul id="section-list-ul">
          <li>
            <div class="todo-left">
              <div class="todo-title"><span>title</span></div>
              <div><span>20xx-01-01 12:01:25</span></div>
            </div>
            <div class="todo-right">
              <div class="complete-text todo-right-text active">
                <span>Complete</span>
              </div>
              <div class="delete-text todo-right-text"><span>Delete</span></div>
            </div>
          </li>
          <li>
            <div class="todo-left">
              <div class="todo-title"><span>title</span></div>
              <div><span>20xx-01-01 12:01:25</span></div>
            </div>
            <div class="todo-right">
              <div class="complete-text todo-right-text">
                <span>Complete</span>
              </div>
              <div class="delete-text todo-right-text"><span>Delete</span></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.section-body {
  height: auto;
  min-height: calc(100vh - 70px - 80px);
  padding-top: 80px;
}

.section-body-child {
  margin-top: 0.9rem;
}

#section-btns {
  display: flex;
  justify-content: end;
}

#section-list {
  background-color: #eee;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

#section-list-ul {
  display: grid;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1%;
  padding: 10px;
}

#section-list-ul > li {
  width: 100%;
  /*   background-color:#46C6C6; */
  background-color: white;
  border: 1px solid #46c6c6;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

#section-list-ul > li > div {
  padding: 10px 20px 10px 20px;
}

.btn-green {
  color: #5ec75e;
  border: 2px solid #5ec75e;
}

.todo-left {
  --tw-text-opacity: 1;
  color: rgba(75, 85, 99, var(--tw-text-opacity));
}

.todo-left > div {
  padding: 2px;
}

.todo-title {
  font-size: 1.5rem;
  color: ;
}

.todo-right {
  display: flex;
}

.todo-right > div {
  padding: 6px;
  cursor: pointer;
}

.todo-right > .todo-right-text {
  font-weight: 600;
}

.todo-right > .complete-text {
  color: #828282;
}

.todo-right > .complete-text:hover {
  color: #5ec75e;
}

.todo-right > .complete-text.active {
  color: #5ec75e;
}

.todo-right > .delete-text {
  color: #828282;
}

.todo-right > .delete-text:hover {
  color: #cd0000;
}
</style>
