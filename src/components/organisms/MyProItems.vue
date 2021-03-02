<template>
  <div class="myProItemWrap">
    <div class="text">
      <h1>Hello,World!</h1>
      <h2>HAL東京WEB開発学科</h2>
    </div>
    <MyProItemList />
  </div>
</template>
<script>
import MyProItemList from "../molecules/MyProItemList";

export default {
  name: "MyProItems",
  components: {
    MyProItemList
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Roboto|Thasadith");

.text {
  height: 100%;
  padding: 25px;
  display: flex;
  flex-flow: column wrap;
  margin: 0 auto;
}
.right h1 {
  font-family: "Thasadith", sans-serif;
  text-transform: uppercase;
  text-overflow: ellipsis;
  font-size: 36px;
  font-weight: 100;
  color: #454545;
}

.right h2 {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  margin: 5px 0;
  font-size: 24px;
  font-weight: 500;
}
</style>
