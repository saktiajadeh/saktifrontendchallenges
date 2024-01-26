<template>
    <div class="body">
        <div class="bg-pattern-1">
            <img src=".\images\pattern-background-desktop.svg" alt="BG Pattern 1">
        </div>
        <div class="bg-pattern-2">
            
        </div>
        <div class="container">
            <div class="wrap-card">
                <div class="wrap-img">
                    <img src=".\images\illustration-hero.svg" alt="Image Product">
                </div>
                <div class="wrap-content">
                    <div class="wrap-title">
                        Order Summary
                    </div>
                    <div class="wrap-description">
                        You can now listen to millions of songs, audiobooks, and podcasts on any
                        device anywhere you like!
                    </div>
                    <div class="wrap-price-with-icon">
                        <div class="show-price">
                            <img src=".\images\icon-music.svg" alt="">
                            <div>
                                <span>Annual Plan</span>
                                <span>$59.99/year</span>
                            </div>
                        </div>
                        <a href="#" target="_blank" class="show-info">
                            Change
                        </a>
                    </div>
                    <div class="wrap-action">
                        <a href="#" target="_blank" class="wrap-button primary">
                            <span>Proceed to Payment</span>
                        </a>
                        <a href="#" target="_blank" class="wrap-button cancel">
                            <span>Cancel Order</span>
                        </a>
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
        title: '006 Order summary component',
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
                crossorigin: ''
            },
        ]
    })
</script>