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
        "deviceName": "ebac-qe",
        "automationName": "Uiautomator2",
        "app": join(process.cwd(), './app/android/Android-NativeDemoApp-0.4.0.apk'),
        //"appActivity": ".ui.main.MainActivity",
        "appWaitActivity": ".MainActivity",
        "appActivity": ".SplashActivity", 
        "appPackage": "com.wdiodemoapp"

    }]

   
}
