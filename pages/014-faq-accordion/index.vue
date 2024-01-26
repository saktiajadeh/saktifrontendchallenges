<template>
    <main class="wrapper">
        <figure class="absolute-bg">
            <img class="bg-mobile" src="./assets/images/background-pattern-mobile.svg" alt="Background Pattern Mobile">
            <img class="bg-desktop" src="./assets/images/background-pattern-desktop.svg"
                alt="Background Pattern Desktop">
        </figure>
        <section class="contain">
            <section class="section-content">
                <article class="wrap-title">
                    <figure class="wrap-image">
                        <img src="./assets/images/icon-star.svg" alt="Icon Star">
                    </figure>
                    <h2 class="title">
                        FAQs
                    </h2>
                </article>

                <article class="wrap-list">
                    <ul class="accordion-list">
                        <li class="list-item" v-for="(row, index) in accordionList" :key="index"
                            :class="{'active': row.isActive}" @keydown.enter="toggleAccordion(index, $event)"
                            @click="toggleAccordion(index, $event)" tabindex="0">
                            <article class="title-list-item">
                                <h6 class="title">
                                    {{ row.title }}
                                </h6>
                                <button class="btn-circle">
                                    <i class="ion-minus-round"></i>
                                    <i class="ion-plus-round"></i>
                                </button>
                            </article>
                            <article class="content-list-item">
                                <p class="description">
                                    {{ row.description }}
                                </p>
                            </article>
                        </li>
                    </ul>
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
        title: '014 FAQ accordion',
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
                crossorigin: ''
            },
        ]
    });

    const toggleAccordion = (index, event) => {
        const switchTo = !accordionList.value[index].isActive;
        accordionList.value[index].isActive = switchTo;
        let contentElementByCurrentTarget = event.currentTarget.querySelector('.content-list-item');
        if (switchTo) {
            contentElementByCurrentTarget.style.maxHeight = contentElementByCurrentTarget.scrollHeight + "px";
        } else {
            contentElementByCurrentTarget.style.maxHeight = 0;
        }
    };

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