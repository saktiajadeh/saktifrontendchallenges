<template>
    <div class="body">
        <div class="container">
            <div class="wrap-card">
                <div class="wrap-img">
                    <img src=".\images\image-product-desktop.jpg" alt="Image Product" class="img-desktop">
                    <img src=".\images\image-product-mobile.jpg" alt="Image Product" class="img-mobile">
                </div>
                <div class="wrap-content">
                    <div class="wrap-tag">
                        <a href="#" target="_blank" class="tag-item">
                            Perfume
                        </a>
                    </div>
                    <div class="wrap-title">
                        Gabrielle Essence Eau De Parfum
                    </div>
                    <div class="wrap-description">
                        A floral, solar and voluptuous interpretation composed by Olivier Polge,
                        Perfumer-Creator for the House of CHANEL.
                    </div>
                    <div class="wrap-price">
                        <span class="show-price">$149.99</span>
                        <span class="disc-price">$169.99</span>
                    </div>
                    <div class="wrap-action">
                        <a href="#" target="_blank" class="wrap-button">
                            <img src=".\images\icon-cart.svg" alt="Icon Cart">
                            <span>Add to Cart</span>
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
        title: '003 Product preview card component',
    })
</script>