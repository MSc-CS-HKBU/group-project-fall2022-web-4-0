<template>
  <div class="top-bar">
    COMP7270 & COMP7980 Web and Mobile Programming
  </div>
  <nav class="navbar navbar-expand-md navbar-dark sticky-top" style="background-color: #1b192e">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img src="./assets/marko.svg" alt="Logo" class="d-inline-block align-text-top">
        marko
      </router-link>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" @click="offcanvas">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/input" class="nav-link">Input</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/query" class="nav-link">Query</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/analyze" class="nav-link">Analyze</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>

        <span class="navbar-text">
          A Project by Team <strong>Web 4.0</strong>
        </span>
      </div>
    </div>
  </nav>


  <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvas" data-bs-backdrop="static" >
  <div class="offcanvas-header">
    <div class="offcanvas-title">
        <img src="./assets/marko.svg" alt="Logo" class="d-inline-block align-text-top">
        marko
      </div>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" @click="offcanvas"></button>
  </div>
  <div class="offcanvas-body">

    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link to="/input" class="nav-link">Input</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/query" class="nav-link">Query</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/analyze" class="nav-link">Analyze</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
    </ul>

  </div>
</div>

  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;700&family=Roboto+Condensed&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  margin-bottom: 40px;
}

.top-bar {
  background-color: #000000;
  color: rgb(128,128,128);
  font-size: 0.7em;
  text-align: left;
  padding: 2px 10px;
}

.offcanvas-title {
  font-family: 'Kanit', sans-serif;
  font-weight: 700;
  font-size: 28px;
}

A.navbar-brand {
  font-family: 'Kanit', sans-serif;
  font-weight: 700;
  color: rgb(230, 230, 230);
  font-size: 28px;
  line-height: 30px;
  margin: 0 30px 0 0;
  padding: 0;
}

A.navbar-brand img, .offcanvas-title img {
  border-radius: 50%;
  -webkit-box-shadow:0px 0px 5px 0px rgba(230, 230, 230,0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(230, 230, 230,0.75);
  box-shadow: 0px 0px 5px 0px rgba(230, 230, 230,0.75);
  width: 40px;
}

A.navbar-brand:hover {
  color: rgb(255, 255, 255);
}

A.navbar-brand:hover img {
  -webkit-box-shadow:0px 0px 10px 0px rgba(255, 255, 255,0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(255, 255, 255,0.75);
  box-shadow: 0px 0px 10px 0px rgba(255, 255, 255,0.75);
}

A.router-link-active {
  color: rgba(255,255,255, 0.75);
}

nav {
  margin-bottom: 20px;
}

.navbar-text {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 0.9em;
}

.nav-item {
  font-weight: bold;
  padding-top: 7px;
}

.offcanvas {
    width: 340px !important;
}

body {
  background-color: #d9dbff !important;
}

.btn-close:hover {
  background-color: #ffffff;
}

</style>

<script>

export default {
  methods: {
    offcanvas(){
        document.getElementById("offcanvas").classList.toggle("show");
    }
  }
}
</script>