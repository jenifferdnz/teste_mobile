const homeScreen = require ("../screens/home.screen");
const loginScreen = require("../screens/login.screen");

describe('Acess Admin Panel', () => {
    it('shoul login with valid credentials', async () => {
        await homeScreen.goToLogin()
        await loginScreen.setStoreAdress('http://lojaebac.ebaconline.art.br/')
        await loginScreen.continue()
        await loginScreen.login('gerente', 'GD*peToHNJ1#c$sgk08EaYJQ')
        await loginScreen.goToTwoFactorAuth()
        
    });
    
});