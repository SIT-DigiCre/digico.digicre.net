<template lang="pug">
  .hello
    b-jumbotron(header="digiCo Project", lead="芝浦工業大学 デジクリ", bg-variant="dark", text-variant="light", fluid)
      section
        h2 NLP Project
        p digiCo Natural Language Processing project
        p
          a(href="#aboutnlp", v-scroll-to="{el:'#aboutnlp',offset:-60}") Learn more &raquo;
      section
        h2 VTuber Project
        p digiCo Virtual YouTuber project
        p
          a(href="#aboutvtuber", v-scroll-to="{el:'#aboutvtuber',offset:-60}") Learn more &raquo;
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style scoped lang="scss">
a {
  color: #42b983;
}
a:hover {
  color: #30a776;
}
</style>
