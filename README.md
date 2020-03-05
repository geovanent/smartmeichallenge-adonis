# Como executar essa aplicação?

1. Copie o env example com cp .env.example para .env
2. execute:
```bash
npm install
adonis serve --dev
```
3. Esse projeto possui um endpoint POST {{host}}/crawler esperando receber um body como parametro { url = 'https://www.smartmei.com.br' }
```js
POST {{host}}/crawler 
    {
    "url" = 'https://www.smartmei.com.br'
    }
```
4. Retorno esperado:
```js
    {
    "plano": "PROFISSIONAL",
    "transferencia": "R$ 7,00",
    "cobranca": "R$ 5,00 por boleto pago.",
    "mensalidade": "R$ 15,00 *pagando R$45,00/trimestre"
    }
```

## Teste Unitário

Esse teste permite saber se a aplicação quebrou em algum momento e pode ser configurada no CI/CD do git para rodar automaticamente no commit e gestor/dev já recebe um alerta que algo não saiu como esperado.
Rode o teste com:
```bash
adonis test
```

