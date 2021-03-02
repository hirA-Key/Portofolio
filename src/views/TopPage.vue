<template>
  <div class="container">
    <div v-if="this.width >= 979" class="center">
      <div class="bio_pc_card">
        <div class="left">
          <img class="cover" src="../assets/images/backImg.jpg" alt="背景" />
          <div class="box">
            <img
              class="profile"
              src="../assets/images/IMG_6032.jpg"
              alt="アイコン"
            />
          </div>
          <h2>Taiki Hiratsuka</h2>
          <h3>ひら</h3>
          <div class="info">
            <div class="col">
              <a href="https://twitter.com/hira_saucy" target="blank">
                <svg class="iconItems">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  />
                </svg>
                <h4>Twitter</h4>
              </a>
            </div>
            <div class="col">
              <a href="https://www.instagram.com/hira_.key/" target="blank">
                <svg class="iconItems">
                  <path
                    d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"
                  />
                </svg>
                <h4>Instagram</h4>
              </a>
            </div>
            <div class="col">
              <a href="https://github.com/hirA-Key" target="blank">
                <svg class="iconItems">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                <h4>GitHub</h4>
              </a>
            </div>
          </div>
          <h3>Web Developer</h3>
        </div>
        <div class="right">
          <MyProItems />
        </div>
      </div>
    </div>
    <div v-else class="mob_center">
      <MobTopItem />
    </div>
  </div>
</template>

<script>
import MyProItems from "../components/organisms/MyProItems";
import MobTopItem from "../components/organisms/MobTop";

export default {
  name: "Top",
  components: {
    MyProItems,
    MobTopItem
  },
  data: function() {
    return {
      width: window.innerWidth
    };
  },
  methods: {
    handleResize: function() {
      // resizeのたびにこいつが発火するので、ここでやりたいことをやる
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
@import url("https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Roboto|Thasadith");

.container {
  height: 100%;
  width: 100%;
}
.center {
  height: 90%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3% 10%;
}
.mob_center {
  height: 98%;
  width: 99%;
  display: flex;
  margin: 0 auto;
}
.bio_pc_card {
  height: 95%;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.left {
  margin: 0;
  position: relative;
  width: 35%;
  height: 100%;
  border-radius: 25px 0 0 25px;
  background: rgb(76, 179, 233);
  background: -moz-linear-gradient(
    90deg,
    rgba(76, 179, 233, 1) 0%,
    rgba(74, 119, 233, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(76, 179, 233, 1) 0%,
    rgba(74, 119, 233, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(76, 179, 233, 1) 0%,
    rgba(74, 119, 233, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#4cb3e9",endColorstr="#4a77e943",GradientType=1);
  color: #fff;
}
.left .box {
  position: relative;
  height: 50px;
}
.left .cover {
  width: 100%;
  height: 200px;
  border-radius: 25px 0 0 0;
}
.left .profile {
  position: absolute;
  top: -80px;
  width: 140px;
  height: 140px;
  left: 50%;
  object-fit: cover;
  transform: translateX(-50%);
  border-radius: 100%;
  border: 1px solid #ccc;
}
.left h2 {
  position: relative;
  text-align: center;
  font-family: "Thasadith", sans-serif;
  font-size: 42px;
  font-weight: 100;
  margin: 20px 0;
}
.left h3 {
  position: relative;
  text-align: center;
  font-family: "Thasadith", sans-serif;
  font-size: 1.5rem;
  font-weight: 100;
  text-transform: uppercase;
  margin-bottom: 25px;
}
.left .info {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
}
.left .info a {
  text-decoration: none;
  color: #fff;
}
.left .info a .iconItems {
  width: 24px;
  height: 24px;
  margin-bottom: 3px;
  fill: #fff;
}
.left .info h4 {
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  font-size: 0.8rem;
}
.left .info .col {
  width: 33.33%;
}
.right {
  background-color: #fff;
  width: 65%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 0 25px 25px 0;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
}
</style>
