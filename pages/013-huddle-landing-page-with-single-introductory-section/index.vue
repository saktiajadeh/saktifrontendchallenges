<template>
    <main class="wrapper">
        <figure class="absolute-bg">
            <img src="./images/bg-mobile.svg">
        </figure>

        <header class="header">
            <a href="https://www.google.com/" target="_blank" class="header-image">
                <img class="" src="./images/logo.svg" alt="Logo Huddle" />
            </a>
        </header>

        <section class="section-content">
            <figure class="figure-mockup">
                <img class="" src="./images/illustration-mockups.svg" alt="Illustration Mockups" />
            </figure>

            <article class="article-content">
                <h2>Build The Community Your Fans Will Love</h2>
                <p>
                    Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
                    Create connections with your users as you engage in genuine discussion.
                </p>
            </article>

            <nav class="wrapper-action">
                <a href="https://www.google.com/" target="_blank" class="btn-main">
                    Register
                </a>
            </nav>
        </section>

        <footer class="footer">
            <nav class="social-links">
                <a href="https://www.google.com/" target="_blank" class="btn-circle">
                    <i class="ion-social-facebook"></i>
                </a>
                <a href="https://www.google.com/" target="_blank" class="btn-circle">
                    <i class="ion-social-twitter"></i>
                </a>
                <a href="https://www.google.com/" target="_blank" class="btn-circle">
                    <i class="ion-social-instagram"></i>
                </a>
            </nav>
        </footer>
    </main>
</template>

<style lang="scss" scoped>
    @import'./style.scss';
</style>

<script setup>
    useHead({
        title: '013 Huddle landing page with a single introductory section',
    });
</script>