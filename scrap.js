const scrape = require("website-scraper");
const websiteUrl = "https://brihackathon.id/";

scrape({
  urls: [websiteUrl],
  urlFilter: function(url){
    return url.indexOf(websiteUrl) == 0;
  },
  recursive: true,
  maxDepth: 50,
  prettifyUrls: true,
  filenameGenerator: "bySiteStructure",
  directory: "../bri-scrape"
}).then((data) => {
  console.log("download success");
}).catch((err) => {
  console.log("download error", err);
});
