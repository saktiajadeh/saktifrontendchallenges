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
                          <a href="https://www.google.com/" target="_blank" class="wrap-button primary">
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
                          <a href="https://www.google.com/" target="_blank" class="wrap-button primary">
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
                            Join our community

                            30-day, hassle-free money back guarantee

                            Gain access to our full library of tutorials along with expert code reviews. 
                            Perfect for any developers who are serious about honing their skills.

                            Monthly Subscription

                            &dollar;29 per month

                            Full access for less than &dollar;1 a day

                            Sign Up

                            Why Us

                            Tutorials by industry experts
                            Peer &amp; expert code review
                            Coding exercises
                            Access to our GitHub repos
                            Community forum
                            Flashcard decks
                            New videos every week
                          </div>
                      </div>
                      <div class="wrap-action">
                          <a href="https://www.google.com/" target="_blank" class="wrap-button primary">
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
  })
</script>