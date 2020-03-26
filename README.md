# Biblioteca de Validação de Números de Cartão de Crédito ver. 1.0.1

Projeto individual proposto às alunas da Laboratoria. Trata-se de uma bilbioteca de validação de números de cartão de crédito. Essa biblioteca abrange as seguintes bandeiras:

- [x] MasterCard
- [x] Visa
- [x] American Express
- [x] Diners Club
- [x] Discover
- [x] enRoute
- [x] JCB
- [x] Voyager
- [x] HiperCard

Biblioteca criada com JavaScript e testada com Mocha, Chai e nyc. O usuário pode colocar o número do cartão com ou sem espaços.

### Modo de Instalação

```
npm i card-validator-aplaraujo
```

### Modo de Uso

```
cardValidator = require('card-validator-aplaraujo')

console.log(cardValidator('5327892279365543'))

//returns true
```

## Fases do projeto

### Versão 1.0.1

- Refatoração da função de validação de números de cartão de crédito
- Inclusão de testes com números com o mesmo dígito

### Versão 1.0.0
- Funcionalidades: verificar se um número de cartão de crédito é verdadeiro ou falso