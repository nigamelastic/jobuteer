const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false}); 
  const page = await browser.newPage()
  const email="zzzzz";
  const password="xxx";
  
  //await page.screenshot({ path: 'keyboard.png' })


  await page.goto('https://linkedin.com', {"waitUntil" : "networkidle0"});
  

  await page.type('#login-email',email); // your login here
 
  await page.type('#login-password',password); // your password here
  page.click('#login-submit');
  await page.waitForNavigation();
  
 
  await page.goto('https://www.linkedin.com/jobs/')
  
    // Type location
    await page.evaluate(function() {
      document.querySelector('input[id^="jobs-search-box-location-id"]').value = ''
      })
    await page.type('input[id^="jobs-search-box-location-id"]', 'Vienna');
    await page.waitFor(2000);
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.waitFor(1000);
    await page.keyboard.press('Enter');
    await page.keyboard.press('Enter');
    await page.waitForNavigation();
    var joblist= await page.$$( 'div[data-control-name="A_jobssearch_job_result_click"]' );
    console.log("yoo--->"+joblist.length);
    for (var i = 0; i < joblist.length; i++){
      joblist[i].click;
      console.log("Applied to "+i+1+"jobs");
    }

  //await browser.close()
  })()