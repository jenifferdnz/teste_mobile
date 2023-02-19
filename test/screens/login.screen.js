class LoginScreen {
    //Clicando no botão de login
    get #storeAdress() {
        return $('android.widget.EditText')
    }

    get #continue (){
        return $('id:bottom_button')
    }

    get #continueWithStoreCredentials (){
        return $('id:login_site_creds')
    }

    get #username(){
        return ('android=new UiSelector().text("Username")')
    }

    get #password(){
        return ('android=new UiSelector().text("Pasword")')
    }

    get #twoFactorPasswordBtn(){
        return $('id:login_enter_password') 
    }

    async setStoreAdress(url){
        this.#storeAdress.setValue(url)

    }

    async login (username, password){
        await this.#username.setValue(username)
        await this.#password.setValue(password)
        await this.#continue.clink()
    }

    async continue(){
        await this.#continue.click()
    }

    async cont () {
        await this.#continueWithStoreCredentials.click()        
    }

    async goToTwoFactorAuth(){
        await this.#twoFactorPasswordBtn.click()
    }

}

module.exports = new LoginScreen()