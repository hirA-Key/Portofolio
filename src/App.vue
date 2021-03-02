<template>
  <div id="app" class="parentWidth" ref="getParentWidth">
    <router-view></router-view>
  </div>
</template>

<script>
import "normalize.css";

export default {
  name: "App"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Roboto|Thasadith");
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
#app {
  height: 100%;
  width: 100%;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: #7271f3;
}
</style>
