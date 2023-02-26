import {menuArray} from './data.js'










function getContent(){

    let createContent=``;
    menuArray.forEach(function(menu){
        createContent+=`
        <div class="menu-create">
            <div class='emoji'>
            <p>${menu.emoji}</p>
            </div>

        
        
        
        
        
        </div>
        `
        return createContent;
    })

}




function render(){
    document.getElementById('content').innerHTML = getContent();
}

render();