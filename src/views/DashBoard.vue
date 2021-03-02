<template>
  <div class="dashboard">
    <Sidebar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";

export default {
  name: "dashbord",
  components: {
    Sidebar
  }
};
</script>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 1fr 7fr;
  background-color: #6777f4;
  height: 100vh;
  width: 100vw;
  margin: 5px 0 0 0;
}
.content {
  background-color: #fff;
  border-radius: 10px;
  margin: 0px 16px 0px 0px;
}
</style>
