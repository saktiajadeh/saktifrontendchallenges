<template>
    <div class="body">
        <div class="container">
            <div class="container-card">
                <div class="wrap-card brightorange">
                    <div class="wrap-content">
                        <div class="spacer">
                            <div class="wrap-img">
                                <img src=".\images\icon-sedans.svg" alt="Icon Preview">
                            </div>
                            <div class="wrap-title">
                                Sedans
                            </div>
                            <div class="wrap-description">
                                Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
                                or on your next road trip.
                            </div>
                        </div>
                        <div class="wrap-action">
                            <a href="#" target="_blank" class="wrap-button primary">
                                <span>Learn More</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="wrap-card darkcyan">
                    <div class="wrap-content">
                        <div class="spacer">
                            <div class="wrap-img">
                                <img src=".\images\icon-suvs.svg" alt="Icon Preview">
                            </div>
                            <div class="wrap-title">
                                SUVs
                            </div>
                            <div class="wrap-description">
                                Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.
                            </div>
                        </div>
                        <div class="wrap-action">
                            <a href="#" target="_blank" class="wrap-button primary">
                                <span>Learn More</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="wrap-card verydarkcyan">
                    <div class="wrap-content">
                        <div class="spacer">
                            <div class="wrap-img">
                                <img src=".\images\icon-luxury.svg" alt="Icon Preview">
                            </div>
                            <div class="wrap-title">
                                Luxury
                            </div>
                            <div class="wrap-description">
                                Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
                                rental and arrive in style.
                            </div>
                        </div>
                        <div class="wrap-action">
                            <a href="#" target="_blank" class="wrap-button primary">
                                <span>Learn More</span>
                            </a>
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
        title: '008 3-column preview card component',
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap',
                crossorigin: ''
            }, 
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100;200;300;400;500;600;700;800;900&display=swap',
                crossorigin: ''
            }, 
        ]
    })
</script>