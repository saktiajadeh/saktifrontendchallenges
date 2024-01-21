
<template>
    <main class="wrapper">
        <section class="contain">
            <section class="section-content">
				Shift the overall look and feel by adding these wonderful
				touches to furniture in your home

				Ever been in a room and felt like something was missing? Perhaps
				it felt slightly bare and uninviting. I’ve got some simple tips
				to help you make any room feel complete.

				Michelle Appleton
				28 Jun 2020

				Share
                <!-- <article class="rating-state-start" v-if="step === 1">
                    <figure class="wrap-img">
                        <img src="./images/icon-star.svg" alt="Icon star">
                    </figure>
                    <h1 class="main-title">
                        How did we do?
                    </h1>
                    <p class="main-description">
                        Please let us know how we did with your support request. All feedback is appreciated
                        to help us improve our offering!
                    </p>
                    <nav class="rating-option">
                        <button class="btn-circle" v-for="(row, index) in buttonRatingList" :key="index"
                            :class="selectedButtonRating === row.value ? 'active' : ''"
                            @click="selectOption(row.value)">
                            {{ row.title }}
                        </button>
                    </nav>
                    <button class="btn-main" @click="submitFirstStep()">
                        Submit
                    </button>
                </article>
                <article class="rating-state-end" v-if="step === 2">
                    <figure class="wrap-img animate animate-duration-300ms fadeInScaleFromTop">
                        <img src="./images/illustration-thank-you.svg" alt="Illustration thank you">
                    </figure>
                    <p class="selected-description animate animate-duration-300ms animate-delay-150ms fadeInScaleFromCenter">
                        You selected {{ selectedButtonRating }} out of 5
                    </p>
                    <h1 class="main-title animate animate-duration-300ms animate-delay-300ms fadeInScaleFromCenter">
                        Thank you!
                    </h1>
                    <p class="main-description animate animate-duration-300ms animate-delay-450ms fadeInScaleFromCenter">
                        We appreciate you taking the time to give a rating. If you ever need more support,
                        don’t hesitate to get in touch!
                    </p>
                </article> -->
            </section>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    @import'./style.scss';
</style>

<script setup>
    useHead({
        title: '018 Article preview component',
    });
</script>