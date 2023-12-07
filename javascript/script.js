document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

function randomRecipe() {
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    if (recipes[randomNumber].name === "CHICKEN BACON BROCCOLI ALFREDO") {
        window.location.href='./recipe_page.html?recipe=chicken_bacon_brocoli_alfredo';
    }
    else if (recipes[randomNumber].name === "GARLIC MASHED SWEET POTATOES") {
        window.location.href='./recipe_page.html?recipe=garlic_mashed_sweet_potatoes';
    }
    else if (recipes[randomNumber].name === "EASY MAC N CHEESE") {
        window.location.href='./recipe_page.html?recipe=easy_mac_n_cheese';
    }
}

const surpriseButton = document.querySelector('.findrecipe__button');
surpriseButton.addEventListener('click', randomRecipe);