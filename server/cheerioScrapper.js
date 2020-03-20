const axios = require("axios");
const cheerio = require("cheerio");

const siteUrl = "https://www.worldometers.info/coronavirus/country/us/";

class CheerioScraper {
    
    constructor() {}

    async scrapeWIData() {
        console.log(`${siteUrl}`);
        const result = await axios.get(siteUrl);
        const data = cheerio.load(result.data);
    
        let wisconsinData = {
            state: 'Wisconsin', 
            totalCases: '0', 
            newCases: '0', 
            totalDeaths: '0', 
            newDeaths: '0', 
            totalRecovered: '0', 
            activeCases: '0'
        };

        data('#usa_table_countries_today > tbody').find('tr').each((i, row) => {
            let tableData = data(row).find('td');
            
            tableData.each((i, node) => {
                let txt = data(node).text().trim();
                if (txt === 'Wisconsin') {
                    wisconsinData.state = this.getNodeData(data(tableData[0]));
                    wisconsinData.totalCases = Number(this.getNodeData(data(tableData[1])));
                    wisconsinData.newCases = Number(this.getNodeData(data(tableData[2])));
                    wisconsinData.totalDeaths = Number(this.getNodeData(data(tableData[3])));
                    wisconsinData.newDeaths = Number(this.getNodeData(data(tableData[4])));
                    wisconsinData.totalRecovered = Number(this.getNodeData(data(tableData[5])));
                    wisconsinData.activeCases = Number(this.getNodeData(data(tableData[6])));

                    // console.log(`Wisconsin data ${JSON.stringify(wisconsinData)}`);
                }
            })
        });

        return wisconsinData;
    }

    getNodeData(node) {
        if (node)
            return node.text().trim();

        return '';
    }

    getNodeNumbericValue(node) {

    }
};
Scraper = new CheerioScraper();

module.exports = Scraper;