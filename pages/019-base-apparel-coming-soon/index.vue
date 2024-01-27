<template>
    <main class="main__wrapper">
        <div class="container">
            <section class="main__content">
                <div class="main__content__wrapimage">
                    <img src="./images/hero-mobile.jpg" alt="Hero Mobile">
                </div>
                <div class="main__content__wrap">
                    <div class="main__content__text">
                        <h2 class="main__content__title">
                            We're coming soon
                        </h2>

                        <p class="main__content__description">
                            Hello fellow shoppers! We're currently building our new fashion store.
                            Add your email below to stay up-to-date with announcements and our launch deals.

                            Email Address
                        </p>
                    </div>
                    <div class="main__content__form">
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    @import'./style.scss';
</style>

<script setup>
    import {
        ref
    } from 'vue';

    useHead({
        title: '019 Base Apparel coming soon page',
        link: [{
            rel: 'stylesheet',
            href: 'test',
            crossorigin: ''
        }, ]
    });
</script>