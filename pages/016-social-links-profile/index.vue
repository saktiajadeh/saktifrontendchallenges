<template>
  <main class="wrapper">
      <section class="contain">
          <section class="section-content">
              <!-- <figure class="wrap-img">
                  <img src="./assets/images/image-omelette.jpeg" alt="Image omelette">
              </figure> -->
              <article class="wrap-text">
                  <!-- <h1 class="main-title">
                      Simple Omelette Recipe
                  </h1>
                  <p class="main-description">
                      An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
                      to perfection, optionally filled with your choice of cheese, vegetables, or meats.
                  </p> -->
                  Jessica Randall
                  London, United Kingdom
                  "Front-end developer and avid reader."

                  GitHub
                  Frontend Mentor
                  LinkedIn
                  Twitter
                  Instagram
              </article>
          </section>
      </section>
  </main>
</template>

<style lang="scss" scoped>
  @import'./style.scss';
</style>

<script setup>
  useHead({
      title: '016 Social links profile',
  });

  const accordionList = ref([{
          title: 'What is Frontend Mentor, and how will it help me?',
          description: `Frontend Mentor offers realistic coding challenges to help developers improve their 
        frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
        all levels and ideal for portfolio building.`,
          isActive: true,
      },
      {
          title: 'Is Frontend Mentor free?',
          description: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
        option providing access to a range of projects suitable for all skill levels.`,
          isActive: false,
      },
      {
          title: 'Can I use Frontend Mentor projects in my portfolio?',
          description: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
        way to showcase your skills to potential employers!`,
          isActive: false,
      },
      {
          title: `How can I get help if I'm stuck on a Frontend Mentor challenge?`,
          description: `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
        channel where you can ask questions and seek support from other community members.`,
          isActive: false,
      },
  ]);
</script>