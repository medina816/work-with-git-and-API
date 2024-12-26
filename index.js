let platform = document.querySelector(".platform")

let API = "https://dummyjson.com/products"

async function getProduct() {
    try {
        const res = await fetch(API)
        const data = await res.json()
        console.log(data);
        getAgain(data.products)
        
    } catch (error) {
        console.log(error);
        
    }
}

getProduct()

function getAgain(products) {
    platform.innerHTML = products.map((item) => {
        return `<div class="outside">
        <img src="${item.thumbnail}"/>
        <button>ADD TO CART</button>
        <div class="inside">
        <p>${item.category}</p>
        <h1>${item.brand}</h1>
        <p>${item.price}</p>    
        </div>
    </div>`
    }).join("")
}