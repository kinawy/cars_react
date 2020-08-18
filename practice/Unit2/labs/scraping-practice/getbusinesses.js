const request = require("request"); // this is an alternative to axios
const cheerio = require("cheerio");
const URL =
  "https://visitseattle.org/partners/?frm=partners&ptype=visitors-guide&s=&neighborhood=Capitol+Hill";

request(URL, (error, response, body) => {
  let $ = cheerio.load(body);
  //   let result = $('.search-result-preview').find('a').attr('title')
  let results = $(".search-result-preview");
  let resultsTitles = results.map((index, element) => {
    let myImg = $(element).find("div").css("background-image");
    myImg = myImg.substring(5, myImg.length - 2);
    return {
      index: index,
      title: $(element).find("a").attr("title"),
      img: myImg,
    };
  });
  //   results.each((index, element) => {
  //       console.log($(element).find('a').attr('title'))
  //   })
  console.log(results.length);
  console.log(resultsTitles.get());
});
