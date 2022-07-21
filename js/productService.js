const getProducts = () => {
    return new Promise( (resolve, reject) => {
        fetch('http://localhost:8080/api/v1/product')
            .then( async response => {
                const products = response.json();
                resolve(products);
            } )
            .catch( error => {
                reject(error);
            });
    } );
}

const renderProducts = (products) => {
    const productsElement = document.querySelector('#products');
    if (productsElement) {
        products.forEach( product => {

            productsElement.innerHTML += `
                <div class="product">
                    <img class="product__img" src="img/najtansze-nowe-auta-otwarcie.jpeg" alt="Najtansze nowe auta"/>
                    <div class="product__info">
                        <h3> ${product.name} </h3>
                        <p> ${product.description} </p>
                        <div class="product__actions">
                            <p> Cena: ${product.price}PLN </p>
                            <p> KUP </p>
                        </div>
                    </div>
                </div>
            `;

        } );
    }
    else {
        throw new Error('#products cannot be found on the current page.');
    }
}

getProducts()
.then( products => {
    renderProducts(products);
} )
.catch( error => {
    console.log(JSON.stringify(error));
})