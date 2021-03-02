<template>
  <div class="contact">
    <img src="../assets/Images_parallax/1.png" data-speed="-5" class="layer" />
    <img src="../assets/Images_parallax/2.png" data-speed="5" class="layer" />
    <img src="../assets/Images_parallax/3.png" data-speed="2" class="layer" />
    <img src="../assets/Images_parallax/4.png" data-speed="6" class="layer" />
    <img src="../assets/Images_parallax/5.png" data-speed="8" class="layer" />
    <img src="../assets/Images_parallax/6.png" data-speed="-2" class="layer" />
    <img src="../assets/Images_parallax/7.png" data-speed="4" class="layer" />
    <img src="../assets/Images_parallax/8.png" data-speed="-9" class="layer" />
    <img src="../assets/Images_parallax/9.png" data-speed="6" class="layer" />
    <img src="../assets/Images_parallax/10.png" data-speed="-7" class="layer" />
    <img src="../assets/Images_parallax/11.png" data-speed="-5" class="layer" />
    <img src="../assets/Images_parallax/12.png" data-speed="5" class="layer" />
    <a href="mailto:hira12.tai11@gmail.com" target="_blank">
      <h2 class="layer" data-speed="2">hira12.tai11@gmail.com</h2>
    </a>
  </div>
</template>

<script type="text/javascript">
document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".layer").forEach(layer => {
    const speed = layer.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / 90;
    const y = (window.innerHeight - e.pageY * speed) / 90;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
</script>

<style scoped>
.contact {
  position: relative;
  max-width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content a {
  text-decoration: none;
}
.content h2 {
  position: relative;
  color: #333;
  font-size: 3.6vh;
}
</style>
