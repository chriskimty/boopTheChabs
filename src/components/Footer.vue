<template>
    <footer>
        <div class="footerContent">
            <p>Copyright © <a :href="githubLink">Chris TY Kim </a>  2022</p>
            <p>✨Inspired by <a :href="tutorialLink">The Net Ninja</a></p>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            githubLink: 'https://github.com/chriskimty/',
            tutorialLink: 'https://youtu.be/bc6czIBLKTg'
        }
    }
}
</script>

<style>
    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: #2c3e50;
        color: white;
    }
    .footerContent {
        display: flex;
        justify-content: space-evenly;
    }
</style>