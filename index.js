//import {menuArray} from './data.js'

const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushroom", "mozarella"],
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


const order =[]
let flagOrder=false
let flagPrice=false
let createOrder= ""
let sum=0
let totalCost=0
//const removeBtn = document.getElementById("remove")


document.addEventListener ('click', function(e){
        addOrder(e.target.dataset.item)
})


//if (flagOrder == true){
    //removeBtn.addEventListener('click', function(e){
        
       // console.log('new' + e.target.dataset.item)
        
   // })
//}

function addOrder(menuItem){
let price=0;
 let idx = order.find(temp => temp.name == menuItem)
 
 for ( let item of menuArray){
        if(item.name == menuItem){
         order.push(item)
         price= item.price;
         console.log(order)
        }
 }

 if (idx){
     let result = order.filter((orders => orders.name == menuItem));
     console.log(result.length)
     totalCost= result.length*price
     document.getElementById("price-"+menuItem).innerHTML= '$ ' + totalCost;
     console.log(menuItem)
     console.log('exists')
     getTotal(price)
 }else{
       for ( let item of menuArray){
        if(item.name == menuItem){
            getTotal(item.price)
         renderOrder(item)
         
         }
  }
 }

function getTotal(cost){
    
    sum+=cost;
  
    let totalLine = `
    
    <hr class="total-hr">
    <div class='total-line'>
    <p class="total-price"> Total price: </p> 
    <p class="sum"> $${sum} </p>
    </div>
    `
    document.getElementById("total").innerHTML = totalLine
}

    

  
}
   
function renderOrder(obj){

        if (flagOrder == false){
         document.getElementById("order-head").style.display='block';
         document.getElementById("complete").style.display='block';
         flagOrder = true
     }
     createOrder+= `
     <div class='newOrder' id='newOrder-${obj.name}'> 
     <p class="order-name" id='order-name-${obj.name}'> ${obj.name}
     <a class="remove" id="remove" onClick='remove("${obj.name}")'>remove</a>
     </p>
     <p class="order-price" id="price-${obj.name}"> $${obj.price}</p>
     </div>
     <div class='complete-order'>
     `
    document.getElementById('order').innerHTML = createOrder
    
 
    }


function remove(name){
    
        for( var i = 0; i < order.length; i++){ 
            
            if ( order[i].name == name ) { 
                 totalCost-=order[i].price
                 order.splice(i, 1) 
                 if (totalCost>0){
                     document.getElementById("price-"+name).innerHTML= '$ ' + totalCost
                    }else{
                        let div=document.getElementById("newOrder-"+name);
                             while (div.hasChildNodes())
                                {
                                     div.removeChild(div.lastChild)
                                }
                    }
            }
            console.log(order)
            break;
            
            
            
        }
}




function getContent(){

    let createContent=""

    menuArray.forEach(function(menu){
       
        createContent+=`
        <div class="menu-create">
            <p class='emoji' >${menu.emoji}</p>
            <div class="menu-item">
            <p class="menu-name">${menu.name}</p>
            <p class='ingredients'>${menu.ingredients}</p>
            <p class='price'>$${menu.price}</p>
            <hr>
</div>
<button id='plusBtn' data-item=${menu.name}>+</button>
        </div>
        `
        
    })
    return createContent;
}




function render(){
    document.getElementById('content').innerHTML = getContent();
}
render();



