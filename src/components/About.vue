<template lang="pug">
  #about
    vue-markdown(:source="mdtext", :breaks="false")
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'About',
  components: {
    VueMarkdown
  },
  data() {
    return {
      mdtext: `
# digiCoとは
digiCo（デジコ）は、芝浦工業大学デジクリにおけるキャラクターです。

芝浦工業大学デジクリについては<a href="https://digicre.net/" target="_blank">こちら</a>。
`
    }
  }
}
</script>
