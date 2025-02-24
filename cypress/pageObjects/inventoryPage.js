class InventoryPage {
    addFirstItemToCart() {
        cy.get('.inventory_item').first().find('button').click();
    }

    goToCart() {
        cy.get('.shopping_cart_link').click();
    }
    
    assertCartItemCount(expectedCount) {
        cy.get('.shopping_cart_badge').should('have.text', expectedCount);
    }
}

export default new InventoryPage();
