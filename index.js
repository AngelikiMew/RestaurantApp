//import {menuArray} from './data.js'

const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: 0,
        price: 14,
        emoji: "🍕"
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        emoji: "🍔",
        id: 1
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        emoji: "🍺",
        id: 2
    }
]








function getContent(){

    let createContent=""

    menuArray.forEach(function(menu){
        console.log('here')
        createContent+=`
        <div class="menu-create">
            <p class='emoji'>${menu.emoji}</p>
            <div class="menu-item">
            <p>${menu.name}</p>
            <p class='ingredients'>${menu.ingredients}</p>
            <p class='price'>$${menu.price}</p>
            <hr>
</div>

<button class='plusBtn'>+</button>
        </div>
        `
        
    })
    return createContent;
}




function render(){
    document.getElementById('content').innerHTML = getContent();
}

render();