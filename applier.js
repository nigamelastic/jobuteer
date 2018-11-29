const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false}); 
  const page = await browser.newPage()
  const email="Jeher"
  const password="password"
  
  //await page.screenshot({ path: 'keyboard.png' })


  await page.goto('https://linkedin.com', {"waitUntil" : "networkidle0"});
  

  await page.type('#login-email','login'); // your login here
 
  await page.type('#login-password','password'); // your password here
  page.click('#login-submit');
  await page.waitForNavigation();
  console.log('done!');
 
  await page.goto('https://www.linkedin.com/jobs/')
  
    // Type location
    await page.evaluate(function() {
      document.querySelector('input#location-search-box').value = ''
      })
    await page.type('#location-search-box', 'Vienna');
    await page.waitFor(3000);
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.waitFor(1000);
    await page.keyboard.press('Enter');
    await page.keyboard.press('Enter');
  

  await browser.close()
  })()