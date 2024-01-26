<template>
    <div class="body">
        <div class="container">
            <div class="wrap-card">
                <div class="wrap-result">
                    <div class="wrap-info">
                        Your Result
                    </div>
                    <div class="wrap-result-info">
                        <span class="highlight">
                            76
                        </span>
                        <span class="info">
                            of 100
                        </span>
                    </div>
                    <div class="wrap-title">
                        Great
                    </div>
                    <div class="wrap-description">
                        You scored higher than 65% of<br>the people who have taken<br>these tests.
                    </div>
                </div>
                <div class="wrap-summary">
                    <div class="wrap-title">
                        Summary
                    </div>
                    <div class="wrap-result-list">
                        <div class="result-item lightred">
                            <div class="left">
                                <img src=".\assets\images\icon-reaction.svg" alt="">
                                Reaction
                            </div>
                            <div class="right">
                                <strong>80</strong> / 100
                            </div>
                        </div>
                        <div class="result-item orangeyellow">
                            <div class="left">
                                <img src=".\assets\images\icon-memory.svg" alt="">
                                Memory
                            </div>
                            <div class="right">
                                <strong>92</strong> / 100
                            </div>
                        </div>
                        <div class="result-item greenteal">
                            <div class="left">
                                <img src=".\assets\images\icon-verbal.svg" alt="">
                                Verbal
                            </div>
                            <div class="right">
                                <strong>61</strong> / 100
                            </div>
                        </div>
                        <div class="result-item cobaltblue">
                            <div class="left">
                                <img src=".\assets\images\icon-visual.svg" alt="">
                                Visual
                            </div>
                            <div class="right">
                                <strong>72</strong> / 100
                            </div>
                        </div>
                    </div>
                    <div class="wrap-action">
                        <a href="#" target="_blank" class="wrap-button">
                            Continue
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import'./style.scss';
</style>

<script setup>
    useHead({
        title: '002 Results Summary Component',
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
                crossorigin: ''
            },
        ]
    })
</script>