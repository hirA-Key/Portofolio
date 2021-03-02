<template>
  <div class="container">
    <WorkItem />
  </div>
</template>

<script>
import WorkItem from "../components/organisms/MyWork";

export default {
  components: {
    WorkItem
  }
};
</script>

<style scoped>
.container {
  max-width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
