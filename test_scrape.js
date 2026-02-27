const axios = require('axios');
const cheerio = require('cheerio');

async function testBing() {
    try {
        const query = "melhor crm omnichannel whatsapp chatbot email brasil";
        const url = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
        const { data } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
            }
        });
        const $ = cheerio.load(data);
        const results = [];
        $('.b_algo').each((i, el) => {
            const title = $(el).find('h2 a').text();
            const link = $(el).find('h2 a').attr('href');
            const snippet = $(el).find('.b_caption p').text() || $(el).find('.b_algoSlug, .b_lineclamp2').text();
            if (title && link) {
                results.push({ title, link, snippet });
            }
        });
        console.log("Bing Results:", results.length);
        console.log(results.slice(0, 2));
    } catch (e) {
        console.error("Error:", e.message);
    }
}
testBing();
