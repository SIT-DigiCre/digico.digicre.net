<template lang="pug">
  #aboutvtuber
    vue-markdown(:source="mdtext", :breaks="false")
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'AboutVTuber',
  components: {
    VueMarkdown
  },
  data() {
    return {
      mdtext: `
# VTuber Project
VTuberとしてのコンテンツを制作しています。

<iframe width="560" height="315" src="https://www.youtube.com/embed/HTKSWzQRUK4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

![digiCo poster](/img/vtuber/poster_digico-1.png)
`
    }
  }
}
</script>

<style lang="scss" scoped>
* /deep/ img {
  max-width: 50%;
}
* /deep/ iframe {
  max-width: 80%;
}
</style>
