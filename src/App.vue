<template lang="pug">
  #app
    b-navbar#nav.border-dark.border-bottom(type="light", variant="light", sticky)
      b-container
        b-navbar-brand(href="#app", v-scroll-to="{el:'#app',offset:-60}") digiCo Project
        b-navbar-nav.ml-auto
          b-nav-item-dropdown.mr-2(text="Projects", right)
            b-dropdown-item(href="#aboutnlp", v-scroll-to="{el:'#aboutnlp',offset:-60}") NLP
            b-dropdown-item(href="#aboutvtuber", v-scroll-to="{el:'#aboutvtuber',offset:-60}") VTuber
          b-nav-item.mr-2(href="#about", v-scroll-to="{el:'#about',offset:-60}") About
          b-nav-item(href="https://digicre.net/", target="_blank") digicre.net
    router-view
</template>

<style lang="scss">
/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}*/
</style>
