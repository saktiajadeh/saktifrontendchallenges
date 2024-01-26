<template>
    <main class="wrapper">
        <section class="contain">
            <section class="section-content">
                <article class="rating-state-start" v-if="step === 1">
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
                </article>
            </section>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    @import'./style.scss';
</style>

<script setup>
    import {
        ref
    } from 'vue';
    import Swal from 'sweetalert2';

    useHead({
        title: '017 Interactive rating component',
        link: [{
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
                crossorigin: ''
            },
        ]
    });

    const step = ref(1);
    const selectedButtonRating = ref(-1);
    const buttonRatingList = ref([{
            title: '1',
            value: 1,
        },
        {
            title: '2',
            value: 2,
        },
        {
            title: '3',
            value: 3,
        },
        {
            title: '4',
            value: 4,
        },
        {
            title: '5',
            value: 5,
        },
    ]);

    const selectOption = (option) => {
        selectedButtonRating.value = option;
    };

    const submitFirstStep = () => {
        let isIncludes = false;
        buttonRatingList.value.forEach((val, i) => {
            if (val.value === selectedButtonRating.value) {
                isIncludes = true;
            }

        });

        if (isIncludes) {
            step.value += 1;
        } else {
            Swal.fire({
                icon: 'error',
                text: 'Please select an option before proceeding.',
            });
        }
    };
</script>