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

// Zobrazení nákupního košíku přidání tříd a zmenšení stránky pro karty
let cart = document.querySelector("#cart img")
let cartAll = document.querySelector(".cart-all")
let containerProduct = document.querySelector(".container-product")
let cartQuantity = document.querySelector("#cart span")

console.log(cartQuantity);
// console.log(cart);
    cart.addEventListener("click", () =>{
        cartAll.classList.toggle("cart-all-active")

    })




// Vypsání do stránky se 2 hodnotami (One product je jeden produkt + index)

let getProduct = () => {
    products.map( (oneProduct, index) => {
        let card = document.createElement("div")
            card.classList.add("card-product")
            card.innerHTML = `
            
            <img src="${oneProduct.image}" alt="">
            <article>
            <h2>${oneProduct.name}</h2>
            <h3>${oneProduct.price.toLocaleString()} Kč</h3>
            <button onclick="addToArry(${index})">Přidat do Košíku </button>
            </article>
            `
            containerProduct.appendChild(card)
      
    })
}
getProduct()



// Po kliknutí na tlačíkto Přidat do košíku přidání produktů do do výpisového pole
// Pole pro jednotlivé produkty
let productArry = []

const addToArry = (index) =>{
    if(productArry[index] == null){
        // POkud je pole prázdné protáhni přes local všechny naše produkty
        productArry[index] = JSON.parse(JSON.stringify(products[index]))

        // Přidá počet předmětů v košíku 
        // productArry[index].cartQuantity = 1

        // Zatím mi nefunguje
    }

    // Po přidání do pole produktů spusti výpisovou funkci v košíku vždy

    reloadCard()
}


// Výpis do košíku
const reloadCard  = () => {

    

    // Promazání toho co tam je  ??????????????????????????
    cartAll.innerHTML = ""


    // Zjistím jaké produkty jsou uložené v poli a vypíšu je do košíku
    productArry.map( (oneProduct, index) => {
        
        // POkud v košíku něco je vypiš to
        if(oneProduct != null){
            let newDiv = document.createElement("cart-card")
                newDiv.innerHTML = `
                <img src="${oneProduct.image}" alt="">
                <article>
                <h2>${oneProduct.name}</h2>
                <h3>${oneProduct.price.toLocaleString()} Kč</h3>
                <button onclick="addToArry(${index})">Přidat do Košíku </button>
                </article>
                
                `
                cartAll.appendChild(newDiv)
        }
        

    })

}


