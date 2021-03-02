<template>
  <div class="sidebar">
    <div class="menu-items">
      <router-link
        to="/"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">
          <div v-if="this.width >= 979">
            <fa-icon class="iconItems" icon="home"></fa-icon>
            TOP
          </div>
          <div v-else><fa-icon class="iconItems" icon="home"></fa-icon></div>
        </div>
      </router-link>
      <router-link
        to="/skill"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">
          <div v-if="this.width >= 979">
            <fa-icon class="iconItems" icon="code"></fa-icon>
            スキル
          </div>
          <div v-else><fa-icon class="iconItems" icon="code"></fa-icon></div>
        </div>
      </router-link>
      <router-link
        to="/works"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">
          <div v-if="this.width >= 979">
            <fa-icon class="iconItems" icon="address-book"></fa-icon>
            作品
          </div>
          <div v-else>
            <fa-icon class="iconItems" icon="address-book"></fa-icon>
          </div>
        </div>
      </router-link>
      <router-link
        to="/contact"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">
          <div v-if="this.width >= 979">
            <fa-icon class="iconItems" icon="comment"></fa-icon>
            コンタクト
          </div>
          <div v-else>
            <fa-icon class="single_iconItems" icon="comment"></fa-icon>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
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
.sidebar {
  margin-top: 10px;
  min-width: 75px;
  height: 100vh;
}
.iconItems {
  font-size: 22px;
  padding-right: 3px;
}
.single_iconItems {
  font-size: 22px;
}
.menu-items {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.menu-items > * {
  margin-top: 60px;
}
.side-btn {
  border: none;
  padding: 16px 0px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: transparent;
}
.side-btn:focus {
  outline: none;
}
.side-btn.active {
  position: relative;
  background-color: #fff;
  color: #7271f3;
  font-weight: 900;
  margin-left: 10px;
  border-radius: 30px 0 0 30px;
}
.side-btn.active::before {
  top: -30px;
}
.side-btn.active::after {
  bottom: -30px;
}
.side-btn.active::before,
.side-btn.active::after {
  position: absolute;
  content: "";
  right: 0;
  height: 30px;
  width: 30px;
  background-color: #fff;
}
.side-btn.active .link-container::before {
  top: -60px;
}
.side-btn.active .link-container::after {
  bottom: -60px;
  z-index: 99;
}
.side-btn.active .link-container::before,
.side-btn.active .link-container::after {
  position: absolute;
  content: "";
  right: 0px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: #6777f4;
}
</style>
