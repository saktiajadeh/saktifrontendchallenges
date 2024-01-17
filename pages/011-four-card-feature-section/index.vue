<template>
    <div class="body">
        <div class="container">
            <div class="container-card">
                <div class="wrap-card">
                    <div class="wrap-content">
                        <div class="spacer">
                            <div class="wrap-title f-verydarkmagenta">
                                <span class="f-verydarkblue fw-200">
                                    Reliable, efficient delivery
                                </span>
                                <br>
                                <span class="f-verydarkblue fw-600">
                                    Powered by Technology
                                </span>
                            </div>
                            <div class="wrap-description mt-20">
                                <span class="f-grayishblue fw-400 d-block mt-20">
                                    Our Artificial Intelligence powered tools use millions of project data points
                                    to ensure that your project is successful
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="wrap-card">
                    <div class="wrap-content">
                        <div class="spacer">
                            <div class="wrap-list-column">
                                <div class="list-item bg-white">
                                    <div class="spacer">
                                        <div class="wrap-title f-verydarkblue fw-600">
                                            Supervisor
                                        </div>
                                        <div class="wrap-description f-verydarkblue f-grayishblue mt-20">
                                            Monitors activity to identify project roadblocks
                                        </div>
                                    </div>
                                    <div class="wrap-img mt-30">
                                        <img src="./images/icon-supervisor.svg" alt=""/>
                                    </div>
                                </div>
                                <div class="list-item bg-white">
                                    <div class="spacer">
                                        <div class="wrap-title f-verydarkblue fw-600">
                                            Team Builder
                                        </div>
                                        <div class="wrap-description f-verydarkblue f-grayishblue mt-20">
                                            Scans our talent network to create the optimal team for your project
                                        </div>
                                    </div>
                                    <div class="wrap-img mt-30">
                                        <img src="./images/icon-team-builder.svg" alt=""/>
                                    </div>
                                </div>
                                <div class="list-item bg-white">
                                    <div class="spacer">
                                        <div class="wrap-title f-verydarkblue fw-600">
                                            Karma
                                        </div>
                                        <div class="wrap-description f-verydarkblue f-grayishblue mt-20">
                                            Regularly evaluates our talent to ensure quality
                                        </div>
                                    </div>
                                    <div class="wrap-img mt-30">
                                        <img src="./images/icon-karma.svg" alt=""/>
                                    </div>
                                </div>
                                <div class="list-item bg-white">
                                    <div class="spacer">
                                        <div class="wrap-title f-verydarkblue fw-600">
                                            Calculator
                                        </div>
                                        <div class="wrap-description f-verydarkblue f-grayishblue mt-20">
                                            Uses data from past projects to provide better delivery estimates
                                        </div>
                                    </div>
                                    <div class="wrap-img mt-30">
                                        <img src="./images/icon-calculator.svg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
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
        title: '011 Four card feature section',
    });

    import { data } from './scripts.js';
</script>