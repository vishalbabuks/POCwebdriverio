describe('mouse hover',()=>{
xit('mouse',async()=>{
     await browser.url('http://www.leafground.com/pages/mouseOver.html');
     await browser.maximizeWindow();
     await browser.pause(6000);
     await (await $('a.btnMouse')).moveTo();
     await browser.pause(6000);
     await(await $("//a[@class='listener' and text()='Selenium']")).click();
     await browser.pause(6000);
     var text=await browser.getAlertText();
     console.log(text);
     await browser.acceptAlert();

})

it('edit boxes',async()=>{
     await browser.url('http://www.leafground.com/pages/Edit.html');
     await browser.maximizeWindow();
     await browser.pause(4000);
     $("#email").setValue('test@test.com');
     await browser.pause(4000);
     $("input[value='Append ']").setValue('testing')
     await browser.pause(4000);
     browser.keys('Tab')
    var textof=$("input[value='TestLeaf']");
    
    var tt=await textof.getValue();
    console.log(tt);
    await browser.pause(4000);
    var clear=browser.$("input[value='Clear me!!']");
    await clear.clearValue();
    var enab=$("input[disabled='true']");
    var enabledvalue=await enab.isEnabled();
    console.log(enabledvalue);

})

})