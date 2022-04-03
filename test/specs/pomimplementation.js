import bankhomepage from "../pageobjects/bankhome.js";

describe('loginbank testsuite', ()=>{
    it('logintestcase',async()=>{
        await browser.url('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        await bankhomepage.customerloginbutton.click();
    })
})
