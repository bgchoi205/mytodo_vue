<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

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

/* common style */
.section-body {
  height: auto;
  min-height: calc(100vh - 70px - 80px);
  padding-top: 60px;
}

.section-body-child {
  margin-top: 0.9rem;
}

.btn-green {
  color: #5ec75e;
  border: 2px solid #5ec75e;
}

.btn-red {
  color: #cd0000;
  border: 2px solid #cd0000;
}
</style>
