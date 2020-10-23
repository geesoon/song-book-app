<template>
  <nav class="nav" id="navbar">
    <router-link to="/" class="nav__link">
      <i class="material-icons nav__icon">home</i>
      <span class="nav__text small">Home</span>
    </router-link>
    <router-link to="/search" class="nav__link nav__link--active">
      <i class="material-icons nav__icon">search</i>
      <span class="nav__text small">Search</span>
    </router-link>
  </nav>
</template>

<script>
export default {};
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.bottom = "0";
  } else {
    document.getElementById("navbar").style.bottom = "-50px";
  }
  prevScrollpos = currentScrollPos;
};
</script>

<style>
body {
    margin: 0 0 55px 0;
}

.nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 55px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    display: flex;
    overflow-x: auto;
    transition: bottom 0.3s;
}

.nav__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    min-width: 50px;
    overflow: hidden;
    white-space: nowrap;
    font-family: sans-serif;
    font-size: 13px;
    color: #444444;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 0.1s ease-in-out;
}

.nav__link:hover {
    background-color: #eeeeee;
    text-decoration: none;
}

.nav__link--active {
    color: #009578;
}

.nav__icon {
    font-size: 18px;
}
</style>