
let all = document.getElementById('all')
let starters = document.getElementById('starters')
let entrees = document.getElementById('entrees')
let desserts = document.getElementById('desserts')

let menuList = document.getElementById('menuList')

for(let index=0; index < dishes.length; index++){
  let dishesInfo = dishes[index]

  let menuItem=
  `
    <li>

      <img src="${dishesInfo.imageURL}"></img>
      <div class="titledescription">
        <h1>${dishesInfo.title}</h1>
        <p>${dishesInfo.description}</p>
      </div>
      <h4>Price: $${dishesInfo.price}</h4>

    </li>
  `
  menuList.insertAdjacentHTML('beforeend',menuItem)
}
