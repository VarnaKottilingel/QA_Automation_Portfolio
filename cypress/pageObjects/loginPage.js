class LoginPage {

    weblocators={
        username: '#user-name',
        password: '#password',
        loginButton: '#login-button',
        error: '[data-test="error"]'
    }

    visit() {
        cy.visit(Cypress.config().baseUrl);
    }

    enterUsername(UserName) {
        cy.get(this.weblocators.username).type(UserName);
    }

    enterPassword(Password) {
        cy.get(this.weblocators.password).type(Password);
    }

    clickLogin() {
        cy.get(this.weblocators.loginButton).click();
    }

    login(UserName, Password) {
        this.enterUsername(UserName);
        this.enterPassword(Password);
        this.clickLogin();
    }
    assertLoginFailed() {
        cy.get(this.weblocators.error).should('be.visible')
            .and('contain', 'Epic sadface: Username and password do not match any user in this service');
    }
}

export default new LoginPage();
