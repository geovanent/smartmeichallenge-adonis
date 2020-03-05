'use strict'

const { test , trait} = use('Test/Suite')('Crawler')

trait('Test/ApiClient')

test('crawler retrive data', async ({ client }) => {

  const response = await client.post('crawler')
  .send({
    url: "https://www.smartmei.com.br"
  }).end()

  response.assertStatus(200)
  response.assertJSONSubset({
      plano: "PROFISSIONAL",
      transferencia: "R$ 7,00",
      cobranca: "R$ 5,00 por boleto pago.",
      mensalidade: "R$ 15,00 *pagando R$45,00/trimestre"
  })
})