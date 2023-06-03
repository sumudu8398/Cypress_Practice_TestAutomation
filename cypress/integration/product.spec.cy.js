describe('Product Page Sorting', () => {
    it('Verifying the product sorting za', () =>{
        cy.visit('https://www.saucedemo.com/');

        // Log in with valid credentials
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        // Wait for the inventory to load
        cy.get('.inventory_item').should('have.length.greaterThan', 0);

        cy.get('.inventory_item .inventory_item_name').then(($products) =>{
            const initialProductNames = Array.from($products).map((product) => product.innerText);
            console.log('Initial Product Names:', initialProductNames);

            cy.get('.product_sort_container').select('za');

            cy.get('.inventory_item .inventory_item_name').then(($updatedProducts) => {
                const updatedProductNames = Array.from($updatedProducts).map((product) => product.innerText);

                // verify that the product names are sorted correctly
                const sortedProductNames = [...initialProductNames].sort().reverse();
                expect(updatedProductNames).to.deep.equal(sortedProductNames);
            });
        });

    })

    it('Verifies sorting of prices from high to low ', () => {
        cy.visit('https://www.saucedemo.com/');

        // Log in with valid credentials
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        // Wait for the inventory to load
        cy.get('.inventory_item').should('have.length.greaterThan', 0);

        cy.get('.inventory_item .inventory_item_price').then(($products) =>{
            const initialProductPrices = Array.from($products).map((product) => parseFloat(product.innerText.replace('$', '')));

            // Click on the "Price (high to low)" button to sort the products
            cy.get('.product_sort_container').select('hilo');

            // Get the updated list of product prices after sorting
            cy.get('.inventory_item .inventory_item_price').then(($updatedProducts) =>{
                const updatedProductPrices = Array.from($updatedProducts).map((product) => parseFloat(product.innerText.replace('$', '')))

                // Verify that the product prices are sorted correctly from high to low

                const sortedProductPrices = [...initialProductPrices].sort((a, b) => b -a);
                expect(updatedProductPrices).to.deep.equal(sortedProductPrices);
            });
        });
    });
});
