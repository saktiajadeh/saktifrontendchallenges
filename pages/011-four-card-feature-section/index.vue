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
                                <div class="list-item bg-white" v-for="row in data">
                                    <div class="spacer">
                                        <div class="wrap-title f-verydarkblue fw-600">
                                            {{row.title}}
                                        </div>
                                        <div class="wrap-description f-verydarkblue f-grayishblue mt-20">
                                            {{ row.description }}
                                        </div>
                                    </div>
                                    <div class="wrap-img mt-30">
                                        <img :src="row.image" alt=""/>
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