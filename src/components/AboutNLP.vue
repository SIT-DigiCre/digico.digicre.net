<template lang="pug">
  #aboutnlp
    vue-markdown(:source="mdtext", :breaks="false")
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'AboutNLP',
  components: {
    VueMarkdown
  },
  data() {
    return {
      mdtext: `
# NLP Project
自然言語処理による質問応答システム「デジコ」の開発を行っています。

<a href="https://digico.cordx.net/" target="_blank">成果物</a>
`
    }
  }
}
</script>
