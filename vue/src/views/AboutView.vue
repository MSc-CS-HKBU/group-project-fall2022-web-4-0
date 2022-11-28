<template>
  <div class="container text-center">
    <div class="logo">
      <img alt="Marko logo" src="../assets/marko.png" />
      <div class="app-name">marko</div>
      <div class="tagline">Mark Management System</div>
      <div class="description"><span class="app-name">marko</span> is your one-stop solution to input student marks, query individual records and analyze past results with various statistical charts.</div>
    </div>
    
    <div class="row">
      <div class="card-group" style="max-width: 600px; margin: 0 auto;">
        <div class="card">
          <img src="../assets/thomas.jpg" class="card-img-top" alt="Thomas Tsoi">
          <div class="card-body">
            <h5 class="card-title">Thomas Tsoi</h5>
            <h6>MSc DAAI, HKBU</h6>
            <img src="../assets/vue.png" class="text-center framework" />
            <p class="card-text">Front-End Engineer</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">ID: 21469385</small>
          </div>
        </div>
        <div class="card">
          <img src="../assets/angus.jpg" class="card-img-top" alt="Angus Yip">
          <div class="card-body">
            <h5 class="card-title">Angus Yip</h5>
            <h6>MSc DAAI, HKBU</h6>
            <img src="../assets/express.png" class="text-center framework" />
            <p class="card-text">Back-End Engineer</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">ID: 21467358</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>

h6 {
  font-size: 0.9em;
}

.logo {
  margin-bottom: 30px;
}

.logo img {
  width: 168px;
  height: 168px;
  margin-bottom: 10px;
}

.logo > .app-name {
  font-size: 2.2em;
  line-height: 30px;
}

.logo .tagline {
  font-family: 'Kanit', sans-serif;
  font-weight: 300;
  font-size: 1em;
  
}

.logo .description {
  font-family: 'Roboto Condensed', sans-serif;
  max-width: 400px;
  margin: 0 auto;
}


.app-name {
  font-family: 'Kanit', sans-serif;
  font-weight: 700;
  font-size: 1.1em;
  color: #422874;
}

.framework {
  width: 48px;
  margin-bottom: 10px;
}

.card-title {
  font-weight: bold;
}

</style>

<script>
export default {
  name: 'AboutView',
  components: {
  }
}
</script>
