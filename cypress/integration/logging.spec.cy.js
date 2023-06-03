describe.only('Sauce Demo Logging', () => {
  it('Logs in with valid credentials', () =>{
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').should('be.visible').type('performance_glitch_user');
    cy.get('[data-test="password"]').should('be.visible').type('secret_sauce');
    cy.get('[data-test="login-button"]').should('be.visible').click();
    cy.url().should('include', '/inventory.html');
  });

  it('Displays error message for invalid credentials' , () =>{
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').should('be.visible').type('invalid user');
    cy.get('[data-test="password"]').should('be.visible').type('xxx');
    cy.get('[data-test="login-button"]').should('be.visible').click();

    // Use `invoke()` to retrieve the text content of the error element and assert it
    cy.get('[data-test="error"]').invoke('text').should('contain', 'Epic sadface: Username and password do not match any user in this service');
  })

});
