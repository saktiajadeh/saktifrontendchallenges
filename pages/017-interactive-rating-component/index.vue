<template>
    <main class="wrapper">
        <section class="contain">
            <section class="section-content">
                <!-- <figure class="wrap-img">
                  <img src="./assets/images/avatar-jessica.jpeg" alt="Image omelette">
              </figure>
              <article class="wrap-text">
                  <h1 class="main-title">
                      Jessica Randall
                  </h1>
                  <h2 class="main-highlight">
                      London, United Kingdom
                  </h2>
                  <p class="main-description">
                      "Front-end developer and avid reader."
                  </p>
                  <nav class="wrap-button">
                      <a :href="row.url" target="_blank" class="btn-main" v-for="(row, index) in buttonList"
                          :key="index">
                          {{ row.title }}
                      </a>
                  </nav>
              </article> -->
                <!-- Rating state start -->

                How did we do?

                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!

                1 2 3 4 5

                Submit

                <!-- Rating state end -->

                <!-- Thank you state start -->

                You selected
                <!-- Add rating here --> out of 5

                Thank you!

                We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!

                <!-- Thank you state end -->
            </section>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    @import'./style.scss';
</style>

<script setup>
    useHead({
        title: '017 Interactive rating component',
    });

    const buttonList = ref([{
            title: 'GitHub',
            url: '#',
        },
        {
            title: 'Frontend Mentor',
            url: '#',
        },
        {
            title: 'LinkedIn',
            url: '#',
        },
        {
            title: 'Twitter',
            url: '#',
        },
        {
            title: 'Instagram',
            url: '#',
        },
    ]);
</script>