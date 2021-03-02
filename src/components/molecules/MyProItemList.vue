<template>
  <div class="allWrap">
    <div v-if="this.width >= 979" class="container">
      <div class="box" v-for="item of items" v-bind:key="item.title">
        <h3>{{ item.title }}</h3>
        <ul v-for="info of item.description" v-bind:key="info.title">
          <li>{{ info.item }}</li>
        </ul>
      </div>
    </div>
    <div v-else class="container_mob">
      <div class="box" v-for="item of items" v-bind:key="item.title">
        <h3>{{ item.title }}</h3>
        <ul v-for="info of item.description" v-bind:key="info.title">
          <li>{{ info.item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        {
          title: "基本",
          description: [
            { item: "福岡県出身" },
            { item: "22歳" },
            { item: "男" }
          ],
        },
        {
          title: "個性",
          description: [
            { item: "文系出身" },
            { item: "コーディングとデザイン" },
            { item: "謙虚" }
          ],
        },
        {
          title: "スキル",
          description: [
            { item: "フロントエンド" },
            { item: "デザイン" },
            { item: "コミュニケーション" }
          ]
        },
        {
          title: "興味",
          description: [
            { item: "サーバーサイド" },
            { item: "マネジメント" },
            { item: "最新のUI/UX" }
          ]
        }
      ],
      width: window.innerWidth
    };
  },
  mounted: function() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.container_mob {
  display: grid;
  grid-template-columns: 1fr;
}
.box {
  margin: 10px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  border-radius: 15px;
}
.box h3 {
  font-family: "Montserrat", sans-serif;
  color: #666;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: left;
  margin-left: 10px;
}
ul {
  padding: 8px;
  font: 14px/1.6 "arial narrow", sans-serif;
  list-style: none;
  text-align: center;
}
ul li {
  position: relative;
  color: #454545;
  font-size: 14px;
  font-weight: bold;
  border-bottom: 1px solid rgba(129, 194, 250, 0.5);
}
ul li:after,
ul li:before {
  content: "";
  position: absolute;
  border-radius: 50%;
}
ul li:before {
  left: 0.2em;
  width: 17px;
  height: 17px;
  background: rgba(129, 194, 250, 0.5);
  top: 50%;
  -moz-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
ul li:after {
  top: 1.1em;
  left: 0.7em;
  width: 14px;
  height: 14px;
  background: rgba(129, 194, 250, 0.3);
}
</style>
