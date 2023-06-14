const listaprodutos = document.querySelector("#listaprodutos")

function TransfJSON(dados){
    return dados.json()
}

function formataDados(dados){
    console.log(dados)
    let lHTML = ''

    for (item of dados.products){
        listaprodutos.innerHTML += `
        <div>
            <img src="${item.image}">
            <p>${item.name}</p>
            <p>${item.description}</p>
            <p>De ${item.oldPrice.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"})}</p>
            <p class="promo"> Por ${item.price.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"})}</p>
            <p> ou ${item.installments.count}x de ${item.installments.value.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"})} </p>
            <button>Comprar</button>
        </div>`
    }
}

const n = fetch("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1")
    .then(TransfJSON)
    .then(formataDados)

