
const puppeteer = require('puppeteer');

async function get(){
 // Get the "viewport" of the page, as reported by the page.
  const browser = await puppeteer.launch({headless:false});
const page = await browser.newPage();
await page.goto("https://food.grab.com/sg/en/restaurants?lng=en&search=Manila");
const dimensions = await page.evaluate(() => {
  const title = document.querySelectorAll(".name___2epcT");
     const titlearr = [...title];
     const res = titlearr.map(e=>e.innerText)
 
 
    //  const company = document.querySelectorAll(".vNEEBe");
    //  const companyarr = [...company];
    //  const res2 = companyarr.map(e=>e.innerText)
 
 
    //  const location = document.querySelectorAll(".Qk80Jf");
    //  const locationarr = [...location];
    //  const res3 = locationarr.map(e=>e.innerText)
 return {
    res
 };
});

await browser.close();
  return dimensions;
  await browser.close();
};
module.exports = {get};