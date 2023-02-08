class HomeScreen {
    //Clicando no botão de login
    get enterStoreAdress() {
        return $('bab29f09-7dc3-4664-a5be-be53a15bfd53')
    }

    async goToLogin(){
        this.enterStoreAdress.click()

    }
}

module.exports = new HomeScreen()