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
    name:"Gigabyte Aorus 15 XE4",
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
},{
    id: 10,
    name:"ASUS ROG Strix G10DK",
    price: 15200,
    image: "./images/10.JPG",
    categories: "pc",
},{
    id: 11,
    name:"HAL3000 Master Gamer 4060 Ti",
    price: 33990,
    image: "./images/11.JPG",
    categories: "pc",
},{
    id: 12,
    name:"Gaming Paladin GC130",
    price: 44990,
    image: "./images/12.JPG",
    categories: "pc",
},{
    id: 13,
    name:"Sony HDR-CX450",
    price: 9700,
    image: "./images/13.JPG",
    categories: "kamera",
},{
    id: 14,
    name:"Sony FDR-AX43A",
    price: 17500,
    image: "./images/14.JPG",
    categories: "kamera",
},{
    id: 15,
    name:"Panasonic HC-VXF1EP-K",
    price: 19900,
    image: "./images/15.JPG",
    categories: "kamera",
},{
    id: 16,
    name:"Gaming Shapeshifter",
    price: 899,
    image: "./images/16.JPG",
    categories: "mys",
},{
    id: 17,
    name:"Logitech G Pro X Superlight",
    price: 2600,
    image: "./images/17.JPG",
    categories: "mys",
},{
    id: 18,
    name:"Gaming Headhunter",
    price: 550,
    image: "./images/18.JPG",
    categories: "mys",
},{
    id: 19,
    name:"Samsung QE65QN90B - 163cm",
    price: 34990,
    image: "./images/19.JPG",
    categories: "tv",
},{
    id: 20,
    name:"Philips 65PUS7607 - 165cm",
    price: 16000,
    image: "./images/20.JPG",
    categories: "tv",
},{
    id: 21,
    name:"LG 55NANO826Q - 139cm",
    price: 15990,
    image: "./images/21.JPG",
    categories: "tv",
},{
    id: 22,
    name:"Gaming Hellhound, herní sluchátka",
    price: 1090,
    image: "./images/22.JPG",
    categories: "sluchatka",
},{
    id: 23,
    name:"Gaming Fairy, herní sluchátka",
    price: 1290,
    image: "./images/23.JPG",
    categories: "sluchatka",
},{
    id: 24,
    name:"C-TECH Midas",
    price: 330,
    image: "./images/24.JPG",
    categories: "sluchatka",
},{
    id: 25,
    name:"ASUS ROG STRIX B660-A",
    price: 3999,
    image: "./images/25.JPG",
    categories: "dashboard",
},{
    id: 26,
    name:"ASUS ROG STRIX B550-F",
    price: 3999,
    image: "./images/26.JPG",
    categories: "dashboard",
},{
    id: 27,
    name:"ASUS ROG STRIX B550-E",
    price: 4949,
    image: "./images/27.JPG",
    categories: "dashboard",
},{
    id: 28,
    name:"Patriot VIPER 4 16GB (2x8GB) DDR4",
    price: 999,
    image: "./images/28.JPG",
    categories: "ram",
},{
    id: 29,
    name:"G.Skill Ripjaws S5 64GB (2x32GB) DDR5",
    price: 5490,
    image: "./images/29.JPG",
    categories: "ram",
},{
    id: 30,
    name:"Crucial 8GB DDR5",
    price: 549,
    image: "./images/30.JPG",
    categories: "ram",
},{
    id: 31,
    name:"AMD Ryzen 7 5700X",
    price: 4690,
    image: "./images/31.JPG",
    categories: "procesor",
},{
    id: 32,
    name:"AMD Ryzen 7 5700X",
    price: 9299,
    image: "./images/32.JPG",
    categories: "procesor",
},{
    id: 33,
    name:"AMD Ryzen 9 7900",
    price: 10990,
    image: "./images/33.JPG",
    categories: "procesor",
},
]

// Zobrazení nákupního košíku přidání tříd a zmenšení stránky pro karty
let cart = document.querySelector("#cart img")
let cartAll = document.querySelector(".cart-all")
let cartlist = document.querySelector(".cart-list")
let containerProduct = document.querySelector(".container-product")
let quantity = document.querySelector(".quantity")
let total = document.querySelector(".total")

console.log(quantity);
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

        // Po přidání nastaví quantitu předmětu na 1 kus
        productArry[index].quantity = 1

        // Zatím mi nefunguje
    }
   
    // Po přidání do pole produktů spusti výpisovou funkci v košíku vždy

    reloadCard()
}

console.log(productArry);



// Výpis do košíku
const reloadCard  = () => {
    let count = 0
    let totalPrice = 0

    // Promazání toho co tam je  ??????????????????????????
    cartlist.innerHTML = ""

    // Zjistím jaké produkty jsou uložené v poli a vypíšu je do košíku
    productArry.map( (oneProduct, index) => {

        // vypočítání ceny v košíku
        // vezme v každém cyklu celkovou hodnotu a přidá k tomu cenu 1 produktu
        totalPrice = totalPrice + oneProduct.price

        // Výpočet množství
        count = count + oneProduct.quantity



        
        // POkud v košíku něco je vypiš to
        if(oneProduct != null){
            let newDiv = document.createElement("cart-card")
                newDiv.classList.add("cart-card")
                newDiv.innerHTML = `

                <article><img src="${oneProduct.image}" alt=""></article>
              
                <h2>${oneProduct.name}</h2>
                <h3>${oneProduct.price.toLocaleString()} Kč</h3>
          
              
                <div>
                    <button class="button-minus" onclick="changeQuantity(${index}, ${oneProduct.quantity - 1 })">-</button>
                    <div class="count">${oneProduct.quantity}</div>
                    <button class="button-pluse" onclick="changeQuantity(${index}, ${oneProduct.quantity + 1 })">+</button>
                </div>
                
                `
                cartlist.appendChild(newDiv)
        }

        // Ukládá celkovou cenu
        total.innerText = totalPrice.toLocaleString()
        // Ukládá počet předmětů v košíku
        quantity.innerText = count

    })

}

// Změna monožství po kliknutí na + - v košíku


