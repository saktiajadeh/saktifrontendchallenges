<template>
    <main class="wrapper">
        <section class="contain">
            <article class="article-list">
                <ul class="styled-list">
                    <li v-for="(row, index) in cardList" :key="index">
                        <NuxtLink :to="row.url" class="wrap-item">
                            <figure class="wrap-img">
                                <img :src="row.imageUrl" :alt="'Preview Design '+index+1">
                                <article class="overlay">
                                </article>
                            </figure>
                        </NuxtLink>
                        <article class="wrap-content">
                            <h4 class="wrap-title">
                                <NuxtLink :to="row.url">
                                    {{ row.title }}
                                </NuxtLink>
                            </h4>
                        </article>
                    </li>
                </ul>
            </article>

            <footer class="attribution">
                <p>
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"><u>Frontend
                            Mentor</u></a>.
                    Coded by <a href="https://github.com/saktiajadeh"><u>Sakti</u></a>.
                </p>
            </footer>
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

    useHead({
        title: 'Sakti Frontend Challenges',
    })

    const cardList = ref([{
            title: '001 Blog Preview Card',
            url: '/001-blog-preview-card',
            imageUrl: '/challenge-assets/001-blog-preview-card/design/desktop-preview.jpg',
        },
        {
            title: '002 Results Summary Component',
            url: '/002-results-summary-component',
            imageUrl: '/challenge-assets/002-results-summary-component/design/desktop-preview.jpg',
        },
        {
            title: "003 Product preview card component",
            url: "/003-product-preview-card-component",
            imageUrl: '/challenge-assets/003-product-preview-card-component/design/desktop-preview.jpg',
        },
        {
            title: '004 QR code component',
            url: "/004-qr-code-component",
            imageUrl: '/challenge-assets/004-qr-code-component/design/desktop-preview.jpg',
        },
        {
            title: '005 NFT preview card component',
            url: "/005-nft-preview-card-component",
            imageUrl: '/challenge-assets/005-nft-preview-card-component/design/desktop-preview.jpg',
        },
        {
            title: '006 Order summary component',
            url: "/006-order-summary-component",
            imageUrl: '/challenge-assets/006-order-summary-component/design/desktop-preview.jpg',
        },
        {
            title: '007 Stats preview card component',
            url: "/007-stats-preview-card-component",
            imageUrl: '/challenge-assets/007-stats-preview-card-component/design/desktop-preview.jpg',
        },
        {
            title: '008 3-column preview card component',
            url: "/008-3-column-preview-card-component",
            imageUrl: '/challenge-assets/008-3-column-preview-card-component/design/desktop-preview.jpg',
        },
        {
            title: '009 Profile card component',
            url: "/009-profile-card-component",
            imageUrl: '/challenge-assets/009-profile-card-component/design/desktop-preview.jpg',
        },
        {
            title: '010 Social proof section',
            url: "/010-social-proof-section",
            imageUrl: '/challenge-assets/010-social-proof-section/design/desktop-preview.jpg',
        },
        {
            title: '011 Four card feature section',
            url: "/011-four-card-feature-section",
            imageUrl: '/challenge-assets/011-four-card-feature-section/design/desktop-preview.jpg',
        },
        {
            title: '012 Single price grid component',
            url: "/012-single-price-grid-component",
            imageUrl: '/challenge-assets/012-single-price-grid-component/design/desktop-preview.jpg',
        },
        {
            title: '013 Huddle landing page with a single introductory section',
            url: "/013-huddle-landing-page-with-single-introductory-section",
            imageUrl: '/challenge-assets/013-huddle-landing-page-with-single-introductory-section/design/desktop-preview.jpg',
        },
    ]);
</script>