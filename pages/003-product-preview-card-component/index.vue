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
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100;0,9..144,200;0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;0,9..144,900;1,9..144,100;1,9..144,200;1,9..144,300;1,9..144,400;1,9..144,500;1,9..144,600;1,9..144,700;1,9..144,800;1,9..144,900&display=swap',
                crossorigin: ''
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
                crossorigin: ''
            },
        ]
    })
</script>