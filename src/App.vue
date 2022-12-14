<template>
  <header>
    <h1>Boop the Chabs!</h1>
  </header>
  <div class="instructions">
    <p>Hello hooman👋, you have one job.</p>
    <p>Chabs🐈 will appear on the screen...
      <br>when she feels like it.</p> 
    <p>When she does, you need to 
      <br>BOOP👆 the chabs as quick as you can.</p>
      <p>Good luck!</p>
      <div class="buttonContainer">
        <!-- shorter form of v-on:click -->
        <!-- v-on directive is like event listener -->
        <button @click="start" :disabled="isPlaying" class="button">{{buttonText}}</button>
      </div>
  </div>
  <!-- v-if directive - conditional -->
    <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
    <Results v-if="showResults" :score="score"/>
    <Footer />
</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: { Block, Results, Footer },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
      buttonText: "Let's Boop!"
    }
  },
  methods: {
    start() {
      // 2000 (2s base time)
        // Will give us random time between 2-7 seconds
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      this.showResults = false
      this.buttonText = "Wait for it.."
    },
    endGame(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
      this.buttonText = "Let's Boop!"
    }
  }
}
</script>
<style>
  #app {
    font-family: 'Inconsolata', monospace;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .buttonContainer {
    margin-top: 50px;
    margin-bottom: 20px;
  }
  
  button, .button {
    background-color: #FC726B;
    color: white;
    border: none;
    padding: 20px 30px;
    border-radius: 50px;
    font-size: 1.6rem;
    letter-spacing: 1px;
    cursor: pointer;
    margin: 10px;
    font-family: 'Inconsolata', monospace;
    transition: 0.3s;
  }
  button[disabled]{
    opacity: 0.3;
    cursor: not-allowed;
  }

  button:hover {
    background-color: #2c3e50;
  }

  .instructions {
    background-color: white;
    width: 600px;
    margin: 0 auto;
    border: none;
    border-radius: 40px;
    padding: 20px;
    box-shadow: 10px 10px 0px 1px rgba(0,0,0,0.75);
  }

  .instructions p {
    font-size: 1.5rem;
  }
</style>
