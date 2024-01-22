<template>
    <main class="wrapper">
        <section class="contain">
            <section class="section-content">
                <figure class="wrap-img">
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