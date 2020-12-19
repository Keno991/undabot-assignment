<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/contact-us">Contact us</router-link>
    </div>
    <router-view />
    <!-- Footer -->
    <footer>
      <span>Undabot Assignment done by <b>Kenan Muhic</b></span>
      <i class="fab fa-github"></i>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 15px;
}

#nav {
  padding: 30px;
  border-bottom: 1px black solid;
  border-color: rgba(234,234,234,0.5);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration:none;
}

#nav a.router-link-exact-active {
  color: #0099cc;
}

footer {
   position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #343a40;
    color: white;
    text-align: center;
    padding: 10px 0;
}
</style>
