<template lang="pug">
  .home.bg-light.text-dark
    HelloWorld
    b-container
      About.mb-4
      AboutNLP.mb-4
      AboutVTuber
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import About from '@/components/About.vue'
import AboutNLP from '@/components/AboutNLP.vue'
import AboutVTuber from '@/components/AboutVTuber.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    About,
    AboutNLP,
    AboutVTuber
  }
}
</script>
