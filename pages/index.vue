<template>
    <div class="body">
        <div class="container">
            <ul class="styled-list">
                <li><NuxtLink to="/001-blog-preview-card">001 Blog Preview Card</NuxtLink></li>
                <li><NuxtLink to="/002-results-summary-component">002 Results Summary Component</NuxtLink></li>
                <li><NuxtLink to="/003-product-preview-card-component">003 Product preview card component</NuxtLink></li>
                <li><NuxtLink to="/004-qr-code-component">004 QR code component</NuxtLink></li>
                <li><NuxtLink to="/005-nft-preview-card-component">005 NFT preview card component</NuxtLink></li>
            </ul>
            <div class="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://github.com/saktiajadeh">Sakti</a>.
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import './style.scss';
</style>

<script setup>
    useHead({
        title: 'Sakti Frontend Challenges',
    })
</script>