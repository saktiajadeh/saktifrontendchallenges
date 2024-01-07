<template>
  <div class="body">
      <div class="container">
          <div class="wrap-card">
              <div class="wrap-img">
                  <img src=".\images\image-header-desktop.jpg" alt="Image Preview">
                    <div class="active-states">
                    </div>
              </div>
              <div class="wrap-content">
                  <div class="wrap-title">
                    Get <span class="accent">insights</span> that help your business grow.
                  </div>
                  <div class="wrap-description">
                    Discover the benefits of data analytics and make better decisions regarding revenue, customer 
                    experience, and overall efficiency.
                  </div>
                  <div class="wrap-stats">
                    <div class="stats-item">
                      <div class="title">10k+</div>
                      <div class="desc">companies</div>
                    </div>
                    <div class="stats-item">
                      <div class="title">314</div>
                      <div class="desc">templates</div>
                    </div>
                    <div class="stats-item">
                      <div class="title">12m+</div>
                      <div class="desc">queries</div>
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
      title: '007 Stats preview card component',
  })
</script>