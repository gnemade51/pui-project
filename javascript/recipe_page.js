// class Recipe {
//     constructor(name, ingredients, steps, heat_imgs, recipe_imgs, time_imgs){
//         this.name = name;
//         this.ingredients = ingredients;
//         this.steps = steps;
//         this.heat_imgs = heat_imgs;
//         this.recipe_imgs = recipe_imgs;
//         this.time_imgs = time_imgs;
//     }
// };

var swiper = new Swiper('.card-slider', {
    // direction: 'vertical',
    spaceBetween: 30,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    loop: false,
    mousewheel:{
        invert: false,
    },
    pagination: {
        el: '.card_slider_pagination',
        clickable: true,
    }
})

function addSteps(display_recipe) {
    let numberOfSteps = display_recipe.steps.length;
    const steps_wrapper = document.querySelector('.card-slider_wrapper');
    console.log(numberOfSteps);
    for (let i = 0; i < numberOfSteps; i++) {
        const template = document.querySelector("#card-template");
        const clone = template.content.cloneNode(true);
        let step = clone.querySelector(".step");
        let heat = clone.querySelector("#heat_image");
        let time = clone.querySelector("#time_image");
        let recipe = clone.querySelector("#recipe_image");
        step.innerText = display_recipe.steps[i];
        heat.src = display_recipe.heat_imgs[i];
        recipe.src = display_recipe.recipe_imgs[i];
        time.src = display_recipe.time_imgs[i];

        
        steps_wrapper.appendChild(clone);
    }
    const last_template = document.querySelector("#final-card-template");
    const last_clone = last_template.content.cloneNode(true);
    let last_recipe = last_clone.querySelector("#last_recipe");
    last_recipe.src = display_recipe.recipe_imgs[numberOfSteps];
    steps_wrapper.appendChild(last_clone);
}
    

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const recipe = params.get('recipe');
console.log(recipe)

let display_recipe;

if (recipe === 'chicken_bacon_brocoli_alfredo') {
    display_recipe = new Recipe(recipe_1.name, recipe_1.ingredients, recipe_1.steps, recipe_1.heat_imgs, recipe_1.recipe_imgs, recipe_1.time_imgs);
}

if (recipe === 'garlic_mashed_sweet_potatoes') {
    display_recipe = new Recipe(recipe_2.name, recipe_2.ingredients, recipe_2.steps, recipe_2.heat_imgs, recipe_2.recipe_imgs, recipe_2.time_imgs);
}

if (recipe === 'easy_mac_n_cheese') {
    display_recipe = new Recipe(recipe_3.name, recipe_3.ingredients, recipe_3.steps, recipe_3.heat_imgs, recipe_3.recipe_imgs, recipe_3.time_imgs);
}

//update the title
let selectTitle = document.querySelector('.recipe_title');
selectTitle.innerText = display_recipe.name;
console.log(display_recipe.name)

//update the steps
let ingredient_box = document.querySelector('.ingredientItems')
for (let i of display_recipe.ingredients) {
    let p = document.createElement("p");
    p.classList.add('.')
    p.innerHTML = i;
    ingredient_box.appendChild(p)
}

addSteps(display_recipe);