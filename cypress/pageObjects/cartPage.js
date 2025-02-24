class CartPage {
    proceedToCheckout() {
        cy.get('#checkout').click();
    }

    enterCheckoutDetails(firstName, lastName, postalCode) {
        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#postal-code').type(postalCode);
    }

    continueCheckout() {
        cy.get('#continueeee').click();
    }

    finishOrder() {
        cy.get('#finish').click();
    }

    verifyOrderCompletion() {
        cy.get('.complete-header').should('contain', 'Thank you for your order!');
    }
}

export default new CartPage();
