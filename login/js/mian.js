import shoppingList from "./data.js";

/* 회색으로 되어있는것은 아직 사용한적이 없다는 의미 */

const bestProduct = document.querySelector('.best_product')


for(let i=0; i<shoppingList.length; i++) {

    const bestDiv = document.createElement('div')
    bestDiv.setAttribute('class', 'best_box')

    const bestImg = document.createElement('img')
    bestImg.setAttribute('src', shoppingList[i].src)
    bestDiv.appendChild(bestImg)

    const bestName = document.createElement('p')
    const bestNameText = document.createTextNode(shoppingList[i].name)
    bestName.appendChild(bestNameText)
    bestDiv.appendChild(bestName)

    const bestPrice = document.createElement('p')
    const bestPriceText = document.createTextNode(shoppingList[i].price * 0.5)
    bestPrice.appendChild(bestPriceText)
    bestDiv.appendChild(bestPriceText)

    bestProduct.appendChild(bestDiv)
    


}//shoppingList_for
