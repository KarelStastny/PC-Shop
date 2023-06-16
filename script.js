const products = [{
    id: 1,
    name:"Xiaomi Redmi Note 10 Pro",
    price: 10000,
    image: "./images/1.JPG",
    categories: "phone",
},{
    id: 2,
    name:"Sony Xperia 1 IV 5G",
    price: 28990,
    image: "./images/2.JPG",
    categories: "phone",
},{
    id: 3,
    name:"Apple iPhone 14 Pro",
    price: 29990,
    image: "./images/3.JPG",
    categories: "phone",
},{
    id: 4,
    name:"Dell G15 Gaming",
    price: 39990,
    image: "./images/4.JPG",
    categories: "notebook",
},{
    id: 5,
    name:"Lenovo Legion Pro 7",
    price: 79989,
    image: "./images/5.JPG",
    categories: "notebook",
},{
    id: 6,
    name:"GIGABYTE AORUS 15 XE4",
    price: 47992,
    image: "./images/6.JPG",
    categories: "notebook",
},{
    id: 7,
    name:"Apple iPad Pro Wi-Fi, 12.9",
    price: 38490,
    image: "./images/7.JPG",
    categories: "tablet",
},{
    id: 8,
    name:"Lenovo TAB P12 PRO",
    price: 18563,
    image: "./images/8.JPG",
    categories: "tablet",
},{
    id: 9,
    name:"Xiaomi Pad 5",
    price: 8190,
    image: "./images/9.JPG",
    categories: "tablet",
},]

// Zobrazení nákupního košíku
let cart = document.querySelector("#cart img")
let cartAll = document.querySelector(".cart-all")

// console.log(cart);
    cart.addEventListener("click", () =>{
        cartAll.classList.toggle("cart-all-active")
    })


// Pole pro jednotlivé produkty
let containerProduct = document.querySelector(".container-product")

let productArry = []

// Vypsání do stránky se 2 hodnotami (One product je jeden produkt + index)

let getProduct = () => {
    products.map( (oneProduct, index) => {
        let card = document.createElement("div")
            card.classList.add("card-product")
            card.innerHTML = `
            
            <img src="${oneProduct.image}" alt="">
            <h2>${oneProduct.name}</h2>
            <h3>${oneProduct.price.toLocaleString()}</h3>
            <button onclick="addToCard(${index})">Přidat do Košíku </button>
            
            `
            containerProduct.appendChild(card)
      
    })
}
getProduct()
