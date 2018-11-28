const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false}); 
  const page = await browser.newPage()
  
  //await page.screenshot({ path: 'keyboard.png' })
  await page.goto('https://www.linkedin.com/jobs/')
  
    // Type location
    await page.type('#location-search-box', 'Vienna');
    await page.waitFor(3000);
    await page.keyboard.press('ArrowDown');
    await page.waitFor(3000);
    await page.keyboard.press('ArrowDown');
    await page.waitFor(3000);
    await page.keyboard.press('Enter');
    await page.waitFor(3000);
  

  //await browser.close()
  })()