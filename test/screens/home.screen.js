class HomeScreen {
    //Clicando no botão de login
    get enterStoreAdress() {
        return $('bab29f09-7dc3-4664-a5be-be53a15bfd53')
    }

    async goToLogin(){
        this.enterStoreAdress.click()

    }

    async twoFactorLogin(password){
        await this.#password.setValue(password)
        await this.#continue.click()
    }
}

module.exports = new HomeScreen()