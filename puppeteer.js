const  puppeteer = require("puppeteer")

 const browser = async (website) => {
    const produkt_url = "https://www.youtube.com/watch?v=96mUw3SYplE"

    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage() 
    await page.goto(produkt_url)
}