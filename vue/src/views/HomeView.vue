<template>
  <div class="container text-center">
    <div class="logo">
      <img alt="Marko logo" src="../assets/marko.png" />
      <div class="app-name">marko</div>
      <div class="tagline">Mark Management System</div>
      <div class="description"><span class="app-name">marko</span> is your one-stop solution to input students' assessment marks, query individual records and analyze past results with various statistical charts.</div>
    </div>

    <a class="btn btn-dark" href="/about" role="button">Learn more about our creators</a>
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
  margin-bottom: 10px;
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


.btn:hover {
  background-color: #550050;
}


</style>

<script>
export default {
  name: 'HomeView',
  components: {
  }
}
</script>
