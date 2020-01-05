const puppeteer = require("puppeteer");

const scrapeJobBoard = async () => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  const url = "https://boards.greenhouse.io/joinsharenow";

  await page.goto(url);
  let scrapedData = "";
  try {
    scrapedData = await page.evaluate(() =>
      Array.from(document.querySelectorAll("h3"))
      //.find(el => el.textContent === "Product Development & Technology")
      // //Array.from(document.querySelectorAll("#4036731002")).map(link => ({
      //   title: link.querySelector("#4036731002").textContent,
      //   url: link.querySelector('a').href
      // }))
    );
    console.log(scrapedData)

  } catch (error) {
    console.error(error)
  }
  finally {
    await browser.close();
  }

  return scrapedData;
};

scrapeJobBoard().catch(error => console.error(error)); 