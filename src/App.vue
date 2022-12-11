<template>
  <h1>Boop the Chabs!</h1>
  <p>Hello hooman👋, you have one job. Chabs🐈 will appear on the screen when she wants to.</p>
  <p>When she does, you need to boop👆 the chabs as quick as you can. Good luck!</p>
  <button @click="start" :disabled="isPlaying">Let's Boop!</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
  <Results  v-if="showResults" :score="score"/>
</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'
export default {
  name: 'App',
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false
    }
  },
  methods: {
    start() {
      // 2000 (2s base time)
      // Will give us random time between 2-7 seconds
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      this.showResults = false
    },
    endGame(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
    }
  }
}
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  button {
    background: #0faf87;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;
    margin: 10px;
  }
  button[disabled]{
    opacity: 0.3;
    cursor: arrow;
  }
</style>
