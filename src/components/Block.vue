<template>
    <div class="block" v-if="showBlock"  >
        <img :src="image" alt="chabs the cat" @click="stopTimer"/>
    </div>
</template>

<script>
import image from '../assets/chabs.png'
// import image2 from '../assets/finger.png'
export default {
    data() {
        return {
            image: image,
            // image2: image2,
            showBlock: false,
            timer: null,
            reactionTime: 0
        }
    },
    props: ['delay'],
    // lifecycles
    mounted() {
        // timer should be set in here
        setTimeout(() => {
            this.showBlock = true
            this.startTimer()
        }, this.delay)
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10
            }, 10)
        },
        stopTimer() {
            clearInterval(this.timer)
            this.$emit('end', this.reactionTime)
        }
    }
}
</script>

<style>
    .block {
        z-index: 1;
        cursor: url(../assets/finger.png), auto;
    }
    img {
        width: 300px;
    }
</style>
