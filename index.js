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
            <div class='emoji'>
            <p>${menu.emoji}</p>
            </div>
        </div>
        `
        
    })
    return createContent;
}




function render(){
    document.getElementById('content').innerHTML = getContent();
}

render();