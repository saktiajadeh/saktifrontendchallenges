<template>
    <div class="wrapper">
        <header class="header__wrapper">
            <div class="container">
                <a href="#" target="_blank">
                    <img src="./images/logo.svg" alt="logo">
                </a>
            </div>
        </header>
        <main class="main__wrapper">
            <section class="main__hero">
                <div class="main__hero__wrapimage">
                    <img src="./images/hero-mobile.jpg" alt="Hero Mobile" class="img-mobile">
                    <img src="./images/hero-desktop.jpg" alt="Hero Desktop" class="img-desktop">
                </div>
            </section>
            <section class="main__content">
                <div class="container">
                    <div class="main__content__text">
                        <h2 class="main__content__title">
                            <span class="accent">
                                We're
                            </span>
                            <br>
                            coming soon
                        </h2>

                        <p class="main__content__description">
                            Hello fellow shoppers! We're currently building our new fashion store.
                            Add your email below to stay up-to-date with announcements and our launch deals.
                        </p>
                    </div>
                    <Form @submit="onSubmit" :validation-schema="schema" class="main__content__form">
                        <div class="main__content__form_group">
                            <Field name="email" type="email" v-slot="{ field, errorMessage }" id="email">
                                <input v-bind="field" placeholder="Email Address" :class="{'error':errorMessage}"/>
                                <span v-if="errorMessage" class="icon-error animate animate-duration-300ms fadeInScaleFromTop">
                                    <i class="ion-android-alert"></i>
                                </span>
                                <!-- <span v-if="errorMessage" class="error-block">{{ errorMessage }}</span> -->
                            </Field>
                            <button id="btnSubmit">
                                <i class="ion-chevron-right"></i>
                            </button>
                        </div>
                        <ErrorMessage name="email" class="error-block animate animate-duration-300ms fadeInScaleFromLeft"/>
                    </Form>
                </div>
            </section>
        </main>
    </div>
</template>

<style lang="scss" scoped>
    @import'./style.scss';
</style>

<script setup>
    useHead({
        title: '019 Base Apparel coming soon page',
        bodyAttrs: {
            style: 'background: linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))',
        },
        link: [{
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap',
            crossorigin: ''
        }, ]
    });

    import Swal from 'sweetalert2';
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import * as yup from 'yup';

    const schema = yup.object({
        email: yup.string().required('Please provide a email').email('Please provide a valid email'),
    });

    function onSubmit(values) {
        Swal.fire({
            icon: 'success',
            text: "Thanks for signing up! 🎉 Get ready for some exciting news and exclusive deals straight to your inbox. Stay tuned, and happy shopping!",
        });
        // alert(JSON.stringify(values, null, 2));
    }
</script>