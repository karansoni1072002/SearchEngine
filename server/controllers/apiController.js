const API_KEY = process.env.GOOGLE_API
const ENGINE_ID = process.env.ENGINE_ID
const axios = require('axios');
const RequestSummary = require('../utilities/RequestSummary')
const ScrapePage = require('../utilities/ScrapePage')

module.exports.searchResults = async (req, res) => {
    const input = req.body.input
    let results = []
    let linksArray = []
    await axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ENGINE_ID}&q=${input}`)
        .then((response) => {
            if (response.status === 200) {
                results = response.data.items
                for (let i = 0; i < Math.min(5, results.length); i++) {
                    const obj = results[i]
                    if (obj.link) {
                        linksArray.push(obj.link)
                    }
                }
            }
            console.log('Got links');
        })
        .catch((err) => res.send({ 'message': 'Error in fetching data' }))

    let individualSummaries = [];

    await Promise.all(linksArray.map(async (url) => {
        try {
            const scrapedData = await ScrapePage(url)
            const response = await RequestSummary(scrapedData)
            const individualSummary = response.summary_text;
            console.log(individualSummary)
            individualSummaries.push(individualSummary);
            console.log(`Got individual summary for ${url}`);
        } catch (error) {
            console.error(`Error in processing ${url}: ${error}`);
        }

    }))
    console.log('GOt scraped data');
    const concatenatedText = individualSummaries.join(' ');
    console.log('Got individual summaries');
    console.log('Got scraped data');
    try {
        const summary = await RequestSummary(concatenatedText)
        console.log('Got summary');
        console.log(summary)
        res.send({ summary, 'results': results })
    } catch (error) {
        console.log(error)
        res.send({ 'message': 'Error in generating summary' })
    }
}