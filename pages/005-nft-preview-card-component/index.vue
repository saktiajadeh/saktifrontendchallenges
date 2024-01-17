<template>
    <div class="body">
        <div class="container">
            <div class="wrap-card">
                <a href="#" target="_blank" class="wrap-img">
                    <img src=".\images\image-equilibrium.jpg" alt="Image Product">
                    <div class="active-states">
                        <img src=".\images\icon-view.svg" alt="Icon View">
                    </div>
                </a>
                <div class="wrap-content">
                    <a href="#" target="_blank" class="wrap-title">
                        Equilibrium #3429
                    </a>
                    <div class="wrap-description">
                        Our Equilibrium collection promotes balance and calm.
                    </div>
                    <div class="wrap-price-with-icon">
                        <span class="show-price">
                            <img src=".\images\icon-ethereum.svg" alt="">
                            0.041 ETH
                        </span>
                        <span class="show-info">
                            <img src=".\images\icon-clock.svg" alt="">
                            3 days left
                        </span>
                    </div>
                    <div class="separator"></div>
                    <a href="#" target="_blank" class="wrap-info-with-thumb">
                        <img src=".\images\image-avatar.png" alt="">
                        <span>Creation of</span>&nbsp;
                        <span class="name">Jules Wyvern</span>
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
        title: '005 NFT preview card component',
    })
</script>