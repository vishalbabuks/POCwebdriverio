describe('My first test suite',()=>
{
      it('open webapp',async()=>
      {
          
            await browser.url("https://opensource-demo.orangehrmlive.com/")
            await  browser.maximizeWindow()
            await expect(browser).toHaveUrl("https://opensource-demo.orangehrmlive.com/")
            await  browser.pause(3000)
            var title= await browser.getTitle();
            console.log(title);
            await expect(browser).toHaveTitle(title)
           // var txt= await $("//input[@id='txtUsername']");
           // await browser.pause(6000)
           // txt.setValue('Admin');
           // await browser.pause(6000)
          //  await (await $("//input[@id='txtPassword']")).setValue('admin123')
          //  await browser.pause(6000)
           // await (await $("//input[@id='btnLogin']")).click()
      })
});