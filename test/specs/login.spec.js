describe('Access Admin Painel', () => {
    it('Iniciar o menu forms', async () => {
        const Botton_form = '~Forms'

        await browser.pause(10000)
        
        await $(Botton_form).click()
        expect(await $('~Forms')).toBeDisplayed()
        expect(Botton_form).toBeDisplayed()
    });
    
    it('Forms', async() => {
        const Text = '~text-input'
        const Botton_click = '~Dropdown'
        const selector = 'new UiSelector().text("Appium is awesome").className("android.widget.CheckedTextView")'
        const button = await $(`android=${selector}`)
       // const Botton_check = '~button-Active'

        await $(Text).setValue('Teste')
       
        await $(Botton_click).click()
        
        await button.click()

        await driver.execute('mobile: scroll', { direction: 'down', strategy: 'accessibility id', selector: '~button-Active' });
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        await $('~button-Active').click() 

        
    
    });
});