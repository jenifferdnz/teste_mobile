const {join} = require ('path')
exports.config = {

    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    services: ['appium'],
    specs: [

        './test/specs/**/*.spec.js'
    ],

    framework:'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "9.0",
        "deviceName": "ebacc-qe",
        "automationName": "Uiautomator2",
        "app": join(process.cwd(), './app/android/wcandroid-12.2-Signed.apk'),
        "appActivity": ".ui.main.MainActivity",
        "appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity",
        "appPackage": "com.woocommerce.android"

    }]

   
}
