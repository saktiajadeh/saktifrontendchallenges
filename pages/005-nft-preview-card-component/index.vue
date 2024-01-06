
<template>
  <div class="body">
      <div class="container">
          <div class="wrap-card">
              <div class="wrap-img">
                  <img src=".\images\image-product-desktop.jpg" alt="Image Product" class="img-desktop">
                  <img src=".\images\image-product-mobile.jpg" alt="Image Product">
              </div>
              <div class="wrap-content">
                  <div class="wrap-title">
                  </div>
                  <div class="wrap-description">
                    Equilibrium #3429

                    Our Equilibrium collection promotes balance and calm.

                    0.041 ETH
                    3 days left

                    Creation of Jules Wyvern
                  </div>
                  <div class="wrap-action">
                      <a href="https://www.google.com/" target="_blank" class="wrap-button">
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
      title: '005 NFT preview card component',
  })
</script>