import LoginPage from '../pageObjects/loginPage';
import users from '../fixtures/users.json';

describe('invalid login', function(){
    
    beforeEach(function() {   
            LoginPage.visit();
        });
    
    it('Fails login with invalid credentials', function () {
    // Try logging in with invalid credentials
    LoginPage.login(users.invalidUser.username, users.invalidUser.password);

    // Assert login failure message
    LoginPage.assertLoginFailed();
});
});