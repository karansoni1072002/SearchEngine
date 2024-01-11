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
        })
        .catch((err) => res.status(401).send({ 'message': 'Error in fetching data' }))

    let concatenatedText = ''


    await Promise.all(linksArray.map(url => ScrapePage(url)))
        .then((results) => {
            concatenatedText = results.join(' ');
        })
        .catch((err) => {
            res.status(402).send({ 'message': 'Error in scraping data' })
        });
    try {
        const summary = await RequestSummary(concatenatedText)
        res.status(200).send({ summary, 'results': results })
    } catch (error) {
        res.status(403).send({ 'message': 'Error in generating summary' })
    }
}