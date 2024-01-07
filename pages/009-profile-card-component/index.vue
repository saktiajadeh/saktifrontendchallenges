<template>
    <div class="body">
        <div class="bg-pattern-1">
            <img src=".\images\bg-pattern-top.svg" alt="BG Pattern 1">
        </div>
        <div class="bg-pattern-2">
            <img src=".\images\bg-pattern-bottom.svg" alt="BG Pattern 2">
        </div>
        <div class="container">
            <div class="wrap-card">
                <div class="wrap-img">
                    <img src=".\images\bg-pattern-card.svg" alt="BG Pattern Card">
                </div>
                <div class="wrap-content">
                    <div class="wrap-profile">
                        <img src=".\images\image-victor.jpg" alt="Image Profile">
                    </div>
                    <div class="wrap-title">
                        <span class="highlight">Victor Crest</span>&nbsp;26
                    </div>
                    <div class="wrap-description">
                        London
                    </div>
                    <div class="separator"></div>
                    <div class="wrap-stats">
                        <div class="stats-item">
                            <div class="title">80K</div>
                            <div class="desc">Followers</div>
                        </div>
                        <div class="stats-item">
                            <div class="title">803K</div>
                            <div class="desc">Likes</div>
                        </div>
                        <div class="stats-item">
                            <div class="title">1.4K</div>
                            <div class="desc">Photos</div>
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
        title: '009 Profile card component',
    })
</script>