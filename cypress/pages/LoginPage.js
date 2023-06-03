class LoginPage {

    getUsernameInput(){
        return cy.get('[data-test="username"]');
    }

    getPasswordInput(){
        return cy.get('[data-test="password"]')
    }

    getLoginButton(){
        return cy.get('[data-test="login-button"]')
    }

    login(username, password){
        this.getUsernameInput().type(username);
        this.getPasswordInput().type(password);
        this.getLoginButton().click();
    }

}

export default LoginPage;
