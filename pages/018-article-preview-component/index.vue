<template>
    <main class="main__wrapper">
        <div class="container">
            <section class="main__content">
                <div class="main__content__wrapimage">
                    <img src="./images/drawers.jpg" alt="Drawers">
                </div>
                <div class="main__content__wrap">
                    <div class="main__content__text">
                        <h2 class="main__content__title">
                            Shift the overall look and feel by adding these wonderful
                            touches to furniture in your home
                        </h2>

                        <p class="main__content__description">
                            Ever been in a room and felt like something was missing? Perhaps
                            it felt slightly bare and uninviting. I’ve got some simple tips
                            to help you make any room feel complete.
                        </p>
                    </div>
                    <div class="main__content__social" :class="{'active' : isActive}">
                        <button id="toggleSocial" type="button" @click="toggleSocialShare($event)">
                            <i class="ion-android-share"></i>
                        </button>
                        <div class="main__content__social__left">
                            <div class="main__content__social__avatar">
                                <img src="./images/avatar-michelle.jpg" alt="Avatar Michelle"
                                    class="animate animate-duration-300ms fadeInScaleFromLeft">
                                <div class="main__content__social__left__text">
                                    <p class="animate animate-duration-300ms animate-delay-150ms fadeInScaleFromTop">
                                        Michelle Appleton
                                    </p>
                                    <p class="animate animate-duration-300ms animate-delay-300ms fadeInScaleFromTop">
                                        28 Jun 2020
                                    </p>
                                </div>
                            </div>
                            <div class="main__content__social__share animate animate-duration-300ms fadeInScaleFromBottom"
                                ref="floatingBox">
                                <p class="animate animate-duration-300ms animate-delay-150ms fadeInScaleFromLeft">
                                    SHARE
                                </p>
                                <a href="#" target="_blank"
                                    class="animate animate-duration-300ms animate-delay-300ms fadeInScaleFromTop">
                                    <i class="ion-social-facebook"></i>
                                </a>
                                <a href="#" target="_blank"
                                    class="animate animate-duration-300ms animate-delay-450ms fadeInScaleFromTop">
                                    <i class="ion-social-twitter"></i>
                                </a>
                                <a href="#" target="_blank"
                                    class="animate animate-duration-300ms animate-delay-600ms fadeInScaleFromTop">
                                    <i class="ion-social-pinterest"></i>
                                </a>
                            </div>
                        </div>
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
        title: '018 Article preview component',
        link: [{
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap',
            crossorigin: ''
        }, ]
    });

    const isActive = ref(false);
    const floatingBox = ref(null);

    const toggleSocialShare = (event) => {
        const switchTo = !isActive.value;
        isActive.value = switchTo;
    };
</script>