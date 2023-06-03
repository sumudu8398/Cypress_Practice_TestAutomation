class ProductPage{

    sortProducts(sortOptions) {
        cy.get('.product_sort_container').select(sortOptions);
    }

    getProductNames() {
        return cy.get('.inventory_item .inventory_item_name').then($products => {
            const productNames = Array.from($products).map(product => product.innerText);
            return cy.wrap(productNames);
        });
    }

    getProductPrices() {
        return cy.get('.inventory_item .inventory_item_price').then($products => {
            const productPrices = Array.from($products).map(product =>
                parseFloat(product.innerText.replace('$', '')));
            return cy.wrap(productPrices);
        });
    }

}

export default ProductPage;
