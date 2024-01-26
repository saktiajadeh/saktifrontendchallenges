<template>
    <main class="wrapper">
        <section class="contain">
            <section class="section-content">
                <figure class="wrap-img">
                    <img src="./assets/images/image-omelette.jpeg" alt="Image omelette">
                </figure>
                <article class="wrap-text">
                    <h1 class="main-title">
                        Simple Omelette Recipe
                    </h1>
                    <p class="main-description">
                        An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
                        to perfection, optionally filled with your choice of cheese, vegetables, or meats.
                    </p>
                    <article class="wrap-highlight-text">
                        <h3 class="highlight-title">
                            Preparation time
                        </h3>
                        <ul class="highlight-list">
                            <li>
                                <span>Total:</span> Approximately 10 minutes
                            </li>
                            <li>
                                <span>Preparation:</span> 5 minutes
                            </li>
                            <li>
                                <span>Cooking:</span> 5 minutes
                            </li>
                        </ul>
                    </article>
                    <article class="wrap-step-text">
                        <h2 class="step-title">
                            Ingredients
                        </h2>
                        <ul class="step-list disc">
                            <li>
                                2-3 large eggs
                            </li>
                            <li>
                                Salt, to taste
                            </li>
                            <li>
                                Pepper, to taste
                            </li>
                            <li>
                                1 tablespoon of butter or oil
                            </li>
                            <li>
                                Optional fillings: cheese, diced vegetables, cooked meats, herbs
                            </li>
                        </ul>
                    </article>
                    <article class="wrap-step-text">
                        <h2 class="step-title">
                            Instructions
                        </h2>
                        <ol class="step-list">
                            <li>
                                <span>Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper
                                until they are well mixed.
                                You can add a tablespoon of water or milk for a fluffier texture.
                            </li>
                            <li>
                                <span>Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter
                                or oil.
                            </li>
                            <li>
                                <span>Cook the omelette:</span> Once the butter is melted and bubbling, pour in the
                                eggs. Tilt the pan to ensure
                                the eggs evenly coat the surface.
                            </li>
                            <li>
                                <span>Add fillings (optional):</span> When the eggs begin to set at the edges but are
                                still slightly runny in the
                                middle, sprinkle your chosen fillings over one half of the omelette.
                            </li>
                            <li>
                                <span>Fold and serve:</span> As the omelette continues to cook, carefully lift one edge
                                and fold it over the
                                fillings. Let it cook for another minute, then slide it onto a plate.
                            </li>
                            <li>
                                <span>Enjoy:</span> Serve hot, with additional salt and pepper if needed.
                            </li>
                        </ol>
                    </article>
                    <article class="wrap-step-text">
                        <h2 class="step-title">
                            Nutrition
                        </h2>
                        <p class="step-description">
                            The table below shows nutritional values per serving without the additional fillings.
                        </p>
                        <article class="wrap-table">
                            <table>
                                <tr>
                                    <td>Calories</td>
                                    <td class="text-highlight">277kcal</td>
                                </tr>
                                <tr>
                                    <td>Cabs</td>
                                    <td class="text-highlight">0g</td>
                                </tr>
                                <tr>
                                    <td>Protein</td>
                                    <td class="text-highlight">20g</td>
                                </tr>
                                <tr>
                                    <td>Fat</td>
                                    <td class="text-highlight">22g</td>
                                </tr>
                            </table>
                        </article>
                    </article>
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
        title: '015 Recipe page',
        link: [{
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Young+Serif&display=swap',
                crossorigin: ''
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Young+Serif&display=swap',
                crossorigin: ''
            },
        ]
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