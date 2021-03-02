<template>
  <div class="allWrap">
    <div v-if="this.width >= 979" class="pc_box">
      <div class="card" v-for="item of items" v-bind:key="item.title">
        <div
          class="card_img"
          v-bind:style="{ backgroundImage: `url(${item.imgUrl})` }"
        ></div>
        <div class="card_text">
          <span class="date">{{ item.date }}</span>
          <h2>{{ item.title }}</h2>
          <p>
            {{ item.text }}
          </p>
        </div>
        <div class="card_btn">
          <a v-bind:href="item.link" target="blank">{{ item.btnName }}</a>
        </div>
      </div>
    </div>

    <div v-else class="mob_box">
      <div class="card" v-for="item of items" v-bind:key="item.title">
        <div
          class="card_img"
          v-bind:style="{ backgroundImage: `url(${item.imgUrl})` }"
        ></div>
        <div class="card_text">
          <span class="date">{{ item.date }}</span>
          <h2>{{ item.title }}</h2>
          <p>
            {{ item.text }}
          </p>
        </div>
        <div class="card_btn">
          <a v-bind:href="item.link" target="blank">{{ item.btnName }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "work",
  data: function() {
    return {
      width: window.innerWidth,
      items: [
        {
          title: "cotton",
          date: "HTML&CSS&JS",
          text:
            "友人の美容院模型を元に、WEBサイトをデザイン・制作。1年時HEWにて銅賞を獲得しました。画像の関係で公開してないです。",
          imgUrl: require("../../assets/images/cotton.jpg"),
          link: "https://github.com/hirA-Key",
          btnName: "github"
        },
        {
          title: "b-UNLOCK",
          date: "WebAuthn",
          text:
            "ハッカソンにて友人4人と制作。スマホの指紋認証機能を利用したスマートロックシステム。",
          imgUrl: require("../../assets/images/b-unlock.png"),
          link: "https://youtu.be/Oft-5r43k7o?t=1815",
          btnName: "Youtube"
        },
        {
          title: "YAKEI",
          date: "ReactNative",
          text:
            "夜景の写真と撮影位置を共有できるSNS。iOS&Andoroidリリースを目標にチーム５人チームでほぼフルリモートの中2ヶ月で作成。現在も改善を続けています。",
          imgUrl: require("../../assets/images/yakei.png"),
          link: "https://github.com/hirA-Key/yakei",
          btnName: "GitHub"
        }
      ]
    };
  },
  methods: {
    handleResize: function() {
      this.width = window.innerWidth;
    }
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
.pc_box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.mob_box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pc_box .card {
  display: grid;
  grid-template-columns: 350px;
  grid-template-rows: 220px 220px 80px;
  grid-template-areas: "image" "text" "btn";
  border-radius: 18px;
  background: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-family: roboto;
  text-align: center;
  cursor: pointer;
  margin: 30px;
}
.mob_box .card {
  display: grid;
  grid-template-rows: 220px 220px 80px;
  grid-template-areas: "image" "text" "btn";
  border-radius: 8px;
  background: #fff;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  font-family: roboto;
  text-align: center;
  cursor: pointer;
  margin: 18px;
}
.card_img {
  grid-area: image;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-size: cover;
}
.card_text {
  grid-area: text;
  margin: 25px;
}
.card_text .date {
  color: #4a77e9;
  font-size: 13px;
  margin-bottom: 5px;
  text-align: center;
}
.card_text h2 {
  font-size: 28px;
  margin-bottom: 15px;
}
.card_text p {
  color: #454545;
  font-size: 15px;
  font-weight: 300;
  text-align: left;
}
.card_btn {
  grid-area: btn;
}
.card_btn a {
  position: relative;
  display: inline-block;
  padding: 10px 36px;
  margin: 10px 0;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
  overflow: hidden;
  letter-spacing: 2px;
  border-radius: 40px;
  background: linear-gradient(
    90deg,
    rgba(76, 179, 233, 1),
    rgba(74, 119, 233, 1)
  );
}
</style>
