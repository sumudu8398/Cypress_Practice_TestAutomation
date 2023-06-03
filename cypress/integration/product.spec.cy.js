
import LoginPage from '../pages/LoginPage'
import ProductPage from "../pages/ProductPage";

describe('Product Page Sorting', () => {

    const loginPage = new LoginPage();
    const productPage = new ProductPage();

    beforeEach(() =>{
        cy.visit('https://www.saucedemo.com/');

        //  Log in with valid credentials
        loginPage.login('standard_user', 'secret_sauce')

        // Wait for the inventory to load
        cy.get('.inventory_item').should('have.length.greaterThan', 0);
    })
    it('Verifying the product sorting Z - A', () =>{

        let initialProductNames;

        productPage.getProductNames().then(names => {
            initialProductNames = names;

            productPage.sortProducts('za')

            productPage.getProductNames().then(updatedNames => {
                const sortedProductNames = [...initialProductNames].sort().reverse();
                expect(updatedNames).to.deep.equal(sortedProductNames)
            })
        })

    })

    it('Verifies sorting of prices from high to low ', () => {

        let initialProductPrices;

        productPage.getProductPrices().then(prices => {
            initialProductPrices = prices;

            productPage.sortProducts('hilo')

            productPage.getProductPrices().then(updatedProductPrices => {
                const sortedProductPrices = [...initialProductPrices].sort((a,b) => b - a);
                expect(updatedProductPrices).to.deep.equal(sortedProductPrices);
            })
        })

    });

    it('Verifying the product sorting by price (low to high)', () => {

        let initialProductPrices;

        productPage.getProductPrices().then(prices => {
            initialProductPrices = prices;

            productPage.sortProducts('lohi');

            productPage.getProductPrices().then(updatedProductPrices => {
                const sortedProductPrices = [...initialProductPrices].sort((a,b) => a - b);
                expect(updatedProductPrices).to.deep.equal(sortedProductPrices);
            })
        })

    });
});
