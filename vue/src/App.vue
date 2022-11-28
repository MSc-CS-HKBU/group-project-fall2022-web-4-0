<template>

  <nav class="navbar navbar-expand-md navbar-dark" style="background-color: #1b192e">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="./assets/marko.svg" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
        Marko
      </a>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" @click="offcanvas">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
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


  <div class="offcanvas offcanvas-start show text-bg-dark" tabindex="-1" id="offcanvas">
  <div class="offcanvas-header">
    <div class="offcanvas-title">
        <img src="./assets/marko.svg" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
        Marko
      </div>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" @click="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>

  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&family=Roboto+Condensed&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.offcanvas-title {
  font-family: 'Kanit', sans-serif;
  font-weight: 700;
  font-size: 20px;
}

A.navbar-brand {
  font-family: 'Kanit', sans-serif;
  font-weight: 700;
  color: rgb(230, 230, 230);
}

A.navbar-brand img {
  border-radius: 50%;
  -webkit-box-shadow:0px 0px 5px 0px rgba(230, 230, 230,0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(230, 230, 230,0.75);
  box-shadow: 0px 0px 5px 0px rgba(230, 230, 230,0.75);
}

A.navbar-brand:hover {
  color: rgb(255, 255, 255);
}

A.navbar-brand:hover img {
  -webkit-box-shadow:0px 0px 10px 0px rgba(255, 255, 255,0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(255, 255, 255,0.75);
  box-shadow: 0px 0px 10px 0px rgba(255, 255, 255,0.75);
}


.navbar-text {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 0.9em;
}


body {
  background-color: #d9dbff !important;
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