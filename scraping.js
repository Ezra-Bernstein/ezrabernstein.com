let cheerio = require('cheerio');
let jsonframe = require('jsonframe-cheerio');

let $ = cheerio.load('https://devpost.com/Ezra-Bernstein?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav');
jsonframe($); // initializes the plugin

var frame = {
	"projects": {
		"selector": ".item",
		"data": [{
			"name": ".software-entry-name entry-body" [itemprop=""],
		}]
	}

};

var companiesList = $('.list.items').scrape(frame);
console.log(companiesList); // Output the data in the terminal