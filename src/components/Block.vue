<template>
    <!-- v-if directive - conditional -->
    <div class="block" v-if="showBlock">
        <!-- attribute binding - shorter form of <a v-bind:href="url">-->
        <img :src="image" alt="chabs the cat" @click="stopTimer"/>
    </div>
</template>

<script>
import image from '../assets/chabs.png'
export default {
    data() {
        return {
            image: image,
            showBlock: false,
            timer: null,
            reactionTime: 0
        }
    },
    props: ['delay'],
    // LIFECYCLES
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
            // Emit broadcasts a name of an event and data to its parent component, like so:
                // this.$emit('name-of-emitted-event', dataToPass)
            this.$emit('end', this.reactionTime)
        }
    }
}
</script>

<style>
    .block {
        z-index: 1;
        /* custom cursor! */
        cursor: url(../assets/finger.png), auto;
        position: fixed;
        right: 37%;
        top: 14.5%;
    }
    img {
        width: 400px;
    }
</style>
