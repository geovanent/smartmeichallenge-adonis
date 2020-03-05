'use strict'
const axios = require('axios')
const cheerio = require('cheerio')

class CrawlerController {
    // give values from taxes of Transferência, Cobrança e Mensalidade of plan 'PROFISSIONAL'
    async crawlar({ request, response }){
        const { url } = request.only(['url'])
        let items = {}
        await axios({ url, method: 'get' })
            .then(resp => {
                let $ = cheerio.load(resp.data)
                items = { 
                            plano: 'PROFISSIONAL',
                            transferencia: $('#tarifas-2').find('.tarifas-2-2-2').text().trim(),
                            cobranca: $('#tarifas-2').find('.tarifas-2-1-2').text().trim(),
                            mensalidade: $('#tarifas-2').find('.tarifas-2-4-2').text().trim().replace(/(\r\n|\n|\r)/gm," ")
                        }
            })
            .catch(err => { 
                console.log(err) 
                items = { error: true, message: "Ocorreu um erro na sua requisicão verifique os parametros e tente novamente!" }
            })

        if(items.error){
            response.status(400).json(items)
        }else if(items.mensalidade == ''){
            response.status(400).json( { error: true, message: "A URL informada não é aceita." } )
        }else{
            return items 
        }
    }
}

module.exports = CrawlerController
