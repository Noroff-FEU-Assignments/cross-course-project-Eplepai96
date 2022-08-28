const productContainer = document.querySelector(".product-specific");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");



console.log(id);

const baseUrl = "http://localhost/flower-power/wordpress/wp-json/wc/store/products/"

const url = "http://localhost/flower-power/wordpress/wp-json/wc/store/products/" + id;

const productImage = url + "wp_get_attachment_image_src";

console.log(productImage)

console.log(url);

async function fetchProduct() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);
      
    }
    catch(error) {
        console.log(error);
    }
    
}

fetchProduct();

function createHtml(details) {
    productContainer.innerHTML = `<h1>${details.name}</h1>
                                <div class="details-image" style="background-image:url(${productImage})"></div>
                                <div class="details-price"> Price: ${details.prices.price}</div>
                                <div class="details-description"> ${details.description}</div>
                                <div class="details-button"> ${details.add_to_cart}</div>`;
                            }

createHtml();

