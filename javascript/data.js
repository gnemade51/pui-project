class Recipe {
    constructor(name, ingredients, steps, heat_imgs, recipe_imgs, time_imgs){
        this.name = name;
        this.ingredients = ingredients;
        this.steps = steps;
        this.heat_imgs = heat_imgs;
        this.recipe_imgs = recipe_imgs;
        this.time_imgs = time_imgs;
    }
};

// Recipe 1 Data

recipe_1_ingredients = [
    'Cooking Oil.....................1 Cup',
    'Garlic Cloves..............6-7 Cloves',
    'Parsley.......................1/2 Cup',
    'Cooking Oil.....................1 Cup',
    'Cooking Oil.....................1 Cup',
    'Cooking Oil.....................1 Cup',
    'Cooking Oil.....................1 Cup',
    'Cooking Oil.....................1 Cup',
    'Cooking Oil.....................1 Cup',
    'Cooking Oil.....................1 Cup'
]

recipe_1_steps = [
    'Step 1: Heat oil in a pan.',
    'Step 2: Add diced chicken breast.',
    'Step 3: Add salt and pepper.',
    'Step 4: Add two garlic cloves.',
    'Step 5: Add one cup brocolli.',
    'Step 6: Add two cups of milk.',
    'Step 7: Add one cup of parmesan.',
    'Step 8: Add one-fourth cup of parsley.',
    'Step 9: Add four strips of bacon.',
    'Step 10: Add half pound spaghetti.'
];

recipe_1_heat = [];
for(let i=0; i < 10; i++) {
    recipe_1_heat.push('assets/recipe_1/heat_'+(i+1)+'.png')
};

recipe_1_imgs = [];
for(let i=0; i < 11; i++) {
    recipe_1_imgs.push('assets/recipe_1/recipe_'+(i+1)+'.svg')
};

recipe_1_time = [];
for(let i=0; i < 10; i++) {
    recipe_1_time.push('assets/recipe_1/time_'+(i+1)+'.png')
};

// Recipe 2 Data

recipe_2_ingredients = [
    'Sweet Potatoes................3 Units',
    'Water..........................3 Cups',
    'Melted Butter..................2 Tbsp',
    'Heavy Cream...................1/4 Cup',
    'Salt.....................................As Per',
    'Pepper........................As Per'
];

recipe_2_steps = [
    'Step 1: Boil sweet potatoes.',
    'Step 2: Peel the sweet potatoes.',
    'Step 3: Mash the sweet potatoes.',
    'Step 4: Add two tbsp melted butter.',
    'Step 5: Add one-fourth cup heavy cream.',
    'Step 6: Add three cloves of minced garlic.',
    'Step 7: Add salt and pepper and mix.',
];

recipe_2_heat = [];
for(let i=0; i < 7; i++) {
    recipe_2_heat.push('assets/recipe_2/heat_'+(i+1)+'.png')
};

recipe_2_imgs = [];
for(let i=0; i < 8; i++) {
    recipe_2_imgs.push('assets/recipe_2/recipe_'+(i+1)+'.svg')
};

recipe_2_time = [];
for(let i=0; i < 7; i++) {
    recipe_2_time.push('assets/recipe_2/time_'+(i+1)+'.png')
};

// Recipe 3 Data

recipe_3_ingredients = [
    'Whole Milk.....................5 Cups',
    'Elbow Macaroni..................1 Box',
    'Butter........................1/2 Cup',
    'Cheddar........................2 Cups',
    'Salt..................................As Per',
    'Pepper..............................As Per'
];

recipe_3_steps = [
    'Step 1: Boil 5 cups whole milk.',
    'Step 2: Add 1 box elbow macaroni and mix.',
    'Step 3: Add 1/2 cup melted butter.',
    'Step 4: Add two cups of cheddar.',
    'Step 5: Add salt and pepper and mix.',
];

recipe_3_heat = [];
for(let i=0; i < 5; i++) {
    recipe_3_heat.push('assets/recipe_3/heat_'+(i+1)+'.png')
};

recipe_3_imgs = [];
for(let i=0; i < 6; i++) {
    recipe_3_imgs.push('assets/recipe_3/recipe_'+(i+1)+'.svg')
};

recipe_3_time = [];
for(let i=0; i < 5; i++) {
    recipe_3_time.push('assets/recipe_3/time_'+(i+1)+'.png')
};


recipes=[]
let recipe_1 = new Recipe('CHICKEN BACON BROCCOLI ALFREDO', recipe_1_ingredients, recipe_1_steps, recipe_1_heat, recipe_1_imgs, recipe_1_time);
let recipe_2 = new Recipe('GARLIC MASHED SWEET POTATOES', recipe_2_ingredients, recipe_2_steps, recipe_2_heat, recipe_2_imgs, recipe_2_time);
let recipe_3 = new Recipe('EASY MAC N CHEESE', recipe_3_ingredients, recipe_3_steps, recipe_3_heat, recipe_3_imgs, recipe_3_time);
recipes.push(recipe_1,recipe_2,recipe_3);

console.log(recipe_1)