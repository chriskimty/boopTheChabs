<template>
    <p>Your boop time: {{ score }} ms</p>
    <p class="rank"> {{ rank }}</p>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if (this.score < 251) {
            this.rank = "Legendary Booper🏆!"
        } else if (this.score < 450) {
            this.rank = "Boop-tastic! Nearly a legend."
        } else {
            this.rank = "BOOOOOOOp. Too slow."
        }
    }
}
</script>

<style>
    .rank {
        font-size: 1.8rem;
        color: #2c3e50;
        font-weight: bold;
    }
</style>