<template>
    <div class="body">
        <div class="container">
            <div class="wrap-card">
                <a href="https://www.google.com/" target="_blank" class="wrap-img">
                    <img src=".\images\image-equilibrium.jpg" alt="Image Product">
                    <div class="active-states">
                        <img src=".\images\icon-view.svg" alt="Icon View">
                    </div>
                </a>
                <div class="wrap-content">
                    <a href="https://www.google.com/" target="_blank" class="wrap-title">
                        Order Summary
                    </a>
                    <div class="wrap-description">

                        You can now listen to millions of songs, audiobooks, and podcasts on any
                        device anywhere you like!

                        Annual Plan
                        $59.99/year

                        Change

                        Proceed to Payment
                        Cancel Order
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
                    <a href="https://www.google.com/" target="_blank" class="wrap-info-with-thumb">
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
        title: '006 Order summary component',
    })
</script>