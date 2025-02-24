// This is the main test file for the SauceDemo application-testcases written here
/// <reference types="cypress" />

import LoginPage from '../pageObjects/loginPage';
import InventoryPage from '../pageObjects/inventoryPage';
import CartPage from '../pageObjects/cartPage';
import users from '../fixtures/users.json';

describe('SauceDemo Login and Checkout using POM', () => {
    beforeEach(function() {   
        cy.login(users.validUser.username, users.validUser.password);     //using Commands.js         
       // LoginPage.visit();
    });

    it('Logs in and completes checkout', function()  {
        // Login
        //LoginPage.login(users.validUser.username, users.validUser.password);
        cy.url().should('include', '/inventory.html'); // Assert successful login

        // Add item to cart
        InventoryPage.addFirstItemToCart();
        InventoryPage.assertCartItemCount('1'); // Assert cart count
        InventoryPage.goToCart();

        // Checkout process
        CartPage.proceedToCheckout();
        CartPage.enterCheckoutDetails(
            users.checkoutDetails.firstName,
            users.checkoutDetails.lastName,
            users.checkoutDetails.postalCode
        );
        CartPage.continueCheckout();
        CartPage.finishOrder();

        // Verify order completion
        CartPage.verifyOrderCompletion();
    });

    /*it('Fails login with invalid credentials', function () {
        // Try logging in with invalid credentials
        LoginPage.login(this.data.invalidUser.username, this.data.invalidUser.password);

        // Assert login failure message
        LoginPage.assertLoginFailed();
    });*/
});
