const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false}); 
  const page = await browser.newPage()
  
  //await page.screenshot({ path: 'keyboard.png' })


  await page.goto('https://linkedin.com');
  await page.focus('input.login-email');
  await page.type('login'); // your login here
  await page.focus('input.login-password');
  await page.type('password'); // your password here
  page.click('.submit-button');
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