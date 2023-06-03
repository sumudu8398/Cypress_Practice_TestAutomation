import LoginPage from "../pages/LoginPage";

describe.only('Login Page', () => {
  const loginPage = new LoginPage();

  beforeEach(() =>{
    cy.visit('https://www.saucedemo.com/');
  })


  it('Logs in with valid credentials', () =>{

    loginPage.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html');

  });

  it('Displays error message for invalid credentials' , () =>{

    loginPage.login('username', 'xxx')

    // Use `invoke()` to retrieve the text content of the error element and assert it
    cy.get('[data-test="error"]').invoke('text').should('contain', 'Epic sadface: Username and password do not match any user in this service');
  })

});
