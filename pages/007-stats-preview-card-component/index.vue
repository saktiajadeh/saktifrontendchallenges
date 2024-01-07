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
                    Get insights that help your business grow.

                    Discover the benefits of data analytics and make better decisions regarding revenue, customer 
                    experience, and overall efficiency.

                    10k+ companies
                    314 templates
                    12m+ queries
                  </div>
                  <div class="wrap-price-with-icon">
                      <div class="show-price">
                          <img src=".\images\icon-music.svg" alt="">
                          <div>
                              <span>Annual Plan</span>
                              <span>$59.99/year</span>
                          </div>
                      </div>
                      <a href="https://www.google.com/" target="_blank" class="show-info">
                          Change
                      </a>
                  </div>
                  <div class="wrap-action">
                      <a href="https://www.google.com/" target="_blank" class="wrap-button primary">
                          <span>Proceed to Payment</span>
                      </a>
                      <a href="https://www.google.com/" target="_blank" class="wrap-button cancel">
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
      title: '007 Stats preview card component',
  })
</script>