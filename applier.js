const puppeteer = require('puppeteer');





(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage()
  const email = "email"; //use your email address
  const password = "password";// use your own password
  const location = "Vienna"; //change it to any city u want
  const keywords = "qa Automation"//u can write one or many keywords here
  var jobNo = 1;
  //await page.screenshot({ path: 'keyboard.png' })


  await page.goto('https://linkedin.com', { "waitUntil": "networkidle0" });


  await page.type('#login-email', email); // your login here

  await page.type('#login-password', password); // your password here
  page.click('#login-submit');
  await page.waitForNavigation();


  await page.goto('https://www.linkedin.com/jobs/')

  // Type location
  await page.evaluate(function () {
    document.querySelector('input[id^="jobs-search-box-location-id"]').value = ''
  })
  await page.type('input[id^="jobs-search-box-keyword-id"]',keywords);
  await page.type('input[id^="jobs-search-box-location-id"]', location);
 
  await page.waitFor(2000);
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.waitFor(1000);
  await page.keyboard.press('Enter');
  await page.keyboard.press('Enter');
  await page.waitForNavigation();
  // li.page-list > ol > li:nth-child(2)
  async function pappu() {


    for (let i = 1; i < 26; i++) {


      await page.click('.occludable-update:nth-child(' + i + ') p.job-card-search__description-snippet');


      await page.waitFor(1000);


      if (await page.$('.jobs-apply-button__text') !== null) {
        console.log("Applying to job number :  -->" + jobNo);
        jobNo++;
        await page.click('#jobs-apply-button__text');
      }
      //if().jobs-apply-button__text
    }


  }
  pappu();
  console.log("finished the first loop --> clicking page 2\n no more logs for loops after this");
  await page.click('li.page-list > ol > li:nth-child(2)');
  pappu();
  await page.click('li.page-list > ol > li:nth-child(3)');
  pappu();
  for (var k = 4; k < 100; k++) {
    await page.click('li.page-list > ol > li:nth-child(' + k + ')');

    pappu();
  }

  await browser.close()
})()