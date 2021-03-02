<template>
  <div class="container">
    <div class="box">
      <ul>
        <li v-for="skill of skills" v-bind:key="skill.lang">
          <div class="lang">{{ skill.lang }}</div>
          <div class="bar">
            <div
              class="progress"
              v-bind:style="{
                background: skill.color,
                width: skill.percent + '%'
              }"
            ></div>
            <span class="percent">{{ skill.percent }}%</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "skill",
  data: function() {
    return {
      skills: [
        { lang: "HTML&CSS", percent: 75, color: "#fe53bb" },
        { lang: "JavaScript", percent: 70, color: "#f5d300" },
        { lang: "React", percent: 45, color: "#61DBFB" },
        { lang: "Vue", percent: 55, color: "#13ca91" },
        { lang: "Firebase", percent: 65, color: "#fe6b35" },
        { lang: "PHP", percent: 35, color: "#bdbdfd" }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  width: 100%;
}
.box {
  width: 88%;
  padding: 10px;
  margin: 30px auto;
  background: #fff;
  border-radius: 25px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
}
ul li {
  list-style-type: none;
  padding: 10px;
}
.lang {
  margin: 10px;
  font-size: 20px;
  font-weight: 600;
}
.bar {
  width: 100%;
  overflow: hidden;
  padding: 5px;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 6px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  border-radius: 25px;
}
.progress {
  float: left;
  padding: 15px;
  border-radius: 25px;
}
.percent {
  float: right;
  font-weight: 600;
  height: 30px;
  line-height: 30px;
}
</style>
