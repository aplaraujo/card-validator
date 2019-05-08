const { assert } = require('chai');
const cardValidator = require('../index');

describe('Validação de número de cartão de crédito', () => {
    describe('Deve retornar true para cartões Visa com número correto', () => {
        it('4539534739141836', () => {
          assert.equal(cardValidator('4539534739141836'), true);
        });
      });
      describe('Deve retornar false para cartões Visa com número incorreto', () => {
        it('4539534739141831', () => {
          assert.equal(cardValidator('4539534739141831'), false);
        });
      });

      describe('Deve retornar true para cartões MasterCard com número correto', () => {
        it('5563850722317274', () => {
          assert.equal(cardValidator('5563850722317274'), true);
        });
      });
      describe('Deve retornar false para cartões MasterCard com número incorreto', () => {
        it('5563850722317277', () => {
          assert.equal(cardValidator('5563850722317277'), false);
        });
      });

      describe('Deve retornar true para cartões American Express com número correto', () => {
        it('379783297096608', () => {
          assert.equal(cardValidator('379783297096608'), true);
        });
      });
      describe('Deve retornar false para cartões American Express com número incorreto', () => {
        it('379783297096603', () => {
          assert.equal(cardValidator('379783297096603'), false);
        });
      });

      describe('Deve retornar true para cartões Diners Club com número correto', () => {
        it('30392295615855', () => {
          assert.equal(cardValidator('30392295615855'), true);
        });
      });
      describe('Deve retornar false para cartões Diners Club com número incorreto', () => {
        it('30392295615845', () => {
          assert.equal(cardValidator('30392295615845'), false);
        });
      });

      describe('Deve retornar true para cartões Discover com número correto', () => {
        it('6011969434793063', () => {
          assert.equal(cardValidator('6011969434793063'), true);
        });
      });
      describe('Deve retornar false para cartões Discover com número incorreto', () => {
        it('5011969434793063', () => {
          assert.equal(cardValidator('5011969434793063'), false);
        });
      });
      describe('Deve retornar false para cartões com número aleatório', () => {
        it('02938491849605937', () => {
          assert.equal(cardValidator('02938491849605937'), false);
        });
      });
      describe('Deve retornar false para cartões com número igual', () => {
        it('1111111111111111', () => {
          assert.equal(cardValidator('1111111111111111'), false);
        });
      });
      describe('Deve retornar true para cartões enRoute com número correto', () => {
        it('201465205609763', () => {
          assert.equal(cardValidator('201465205609763'), true);
        });
      });
      describe('Deve retornar false para cartões enRoute com número incorreto', () => {
        it('701465205609763', () => {
          assert.equal(cardValidator('701465205609763'), false);
        });
      });
      describe('Deve retornar true para cartões JCB com número correto', () => {
        it('3559504287000640', () => {
          assert.equal(cardValidator('3559504287000640'), true);
        });
      });
      describe('Deve retornar false para cartões JCB com número incorreto', () => {
        it('3559504287000641', () => {
          assert.equal(cardValidator('3559504287000641'), false);
        });
      });
      describe('Deve retornar true para cartões Voyager com número correto', () => {
        it('869980453736210', () => {
          assert.equal(cardValidator('869980453736210'), true);
        });
      });
      describe('Deve retornar false para cartões Voyager com número incorreto', () => {
        it('369980453736210', () => {
          assert.equal(cardValidator('369980453736210'), false);
        });
      });
      describe('Deve retornar true para cartões Elo com número correto', () => {
        it('6362976934938952', () => {
          assert.equal(cardValidator('6362976934938952'), true);
        });
      });
      describe('Deve retornar false para cartões Elo com número incorreto', () => {
        it('1362976934938952', () => {
          assert.equal(cardValidator('1362976934938952'), false);
        });
      });
      describe('Deve retornar true para cartões HiperCard com número correto', () => {
        it('6062827644747709', () => {
          assert.equal(cardValidator('6062827644747709'), true);
        });
      });
      describe('Deve retornar false para cartões HiperCard com número incorreto', () => {
        it('3062827644747709', () => {
          assert.equal(cardValidator('3062827644747709'), false);
        });
      });
      describe('Deve retornar true para cartões Aura com número correto', () => {
        it('5001562585294439', () => {
          assert.equal(cardValidator('5001562585294439'), true);
        });
      });
      describe('Deve retornar false para cartões Aura com número incorreto', () => {
        it('3001562585294439', () => {
          assert.equal(cardValidator('3001562585294439'), false);
        });
      });
  });