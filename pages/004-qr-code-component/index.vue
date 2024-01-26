<template>
  <div class="body">
      <div class="container">
          <div class="wrap-card">
              <div class="wrap-img">
                  <img src=".\images\image-qr-code.png" alt="Image QR Code">
              </div>
              <div class="wrap-content">
                  <div class="wrap-title">
                      Improve your front-end skills by building projects
                  </div>
                  <div class="wrap-description">
                      Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
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
        title: '004 QR code component',
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap',
                crossorigin: ''
            },
        ]
  })
</script>