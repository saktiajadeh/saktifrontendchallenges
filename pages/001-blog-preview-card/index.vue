<template>
    <div class="body">
        <div class="container">
            <div class="wrap-card">
                <div class="wrap-img">
                    <img src=".\assets\images\illustration-article.svg" alt="Illustration Article">
                </div>
                <div class="wrap-content">
                    <div class="wrap-tag">
                        <a href="#" target="_blank" class="tag-item">
                            Learning
                        </a>
                    </div>
                    <div class="wrap-info">
                        Published 21 Dec 2023
                    </div>
                    <a href="#" target="_blank" class="wrap-title">
                        HTML & CSS foundations
                    </a>
                    <div class="wrap-description">
                        These languages are the backbone of every website, defining structure, content, and
                        presentation.
                    </div>
                    <a href="#" target="_blank" class="wrap-info-with-thumb">
                        <img src=".\assets\images\image-avatar.webp" alt="">
                        Greg Hooper
                    </a>
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
        title: '001 Blog Preview Card',
    })
</script>