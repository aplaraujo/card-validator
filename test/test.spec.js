const chai = require('chai')
const expect = chai.expect
const cardNumber = require('../src/index')

describe('Validation of credit card numbers', () => {
    describe('cardValidator', () => {
        it('Testing of a MasterCard credit card number with spaces', () => {
            expect(cardNumber.cardValidator('5402 8970 6440 6848')).to.equal(true)
        })

        it('Testing of a MasterCard credit card number with spaces and an incorrect digit', () => {
            expect(cardNumber.cardValidator('5402 8970 6450 6848')).to.equal(false)
        })

        it('Testing of a MasterCard credit card number without any spaces', () => {
            expect(cardNumber.cardValidator('5183216733596878')).to.equal(true)
        })

        it('Testing of a MasterCard credit card number without any spaces and with an incorrect digit', () => {
            expect(cardNumber.cardValidator('5181216733596878')).to.equal(false)
        })

        it('Testing of a Visa credit card number with spaces', () => {
            expect(cardNumber.cardValidator('4081 1708 8678 5273')).to.equal(true)
        })

        it('Testing of a Visa credit card number with spaces and with an incorrect digit', () => {
            expect(cardNumber.cardValidator('4081 1708 8618 5273')).to.equal(false)
        })

        it('Testing of a Visa credit card number without any spaces', () => {
            expect(cardNumber.cardValidator('4024007136977013')).to.equal(true)
        })

        it('Testing of a Visa credit card number without any spaces and with an incorrect digits', () => {
            expect(cardNumber.cardValidator('4924007136977013')).to.equal(false)
        })

        it('Testing of an American Express credit card number with spaces', () => {
            expect(cardNumber.cardValidator('3488 967375 56268')).to.equal(true)
        })

        it('Testing of an American Express credit card number with spaces and with an incorrect digit', () => {
            expect(cardNumber.cardValidator('3488 967375 56262')).to.equal(false)
        })

        it('Testing of an American Express credit card number without any spaces', () => {
            expect(cardNumber.cardValidator('346073573310919')).to.equal(true)
        })

        it('Testing of an American Express credit card number without any spaces and with an incorrect digit', () => {
            expect(cardNumber.cardValidator('346073573310979')).to.equal(false)
        })

        it('Testing of a Diners Club credit card number with spaces', () => {
            expect(cardNumber.cardValidator('3658 535559 5206')).to.equal(true)
        })

        it('Testing of a Diners Club credit card number with spaces and with an incorrect digit', () => {
            expect(cardNumber.cardValidator('3058 535559 5206')).to.equal(false)
        })

        it('Testing of a Diners Club credit card number without any spaces', () => {
            expect(cardNumber.cardValidator('30195490006469')).to.equal(true)
        })

        it('Testing of a Diners Club credit card number without any spaces and with an incorrect digit', () => {
            expect(cardNumber.cardValidator('30195490076469')).to.equal(false)
        })

        it('Testing of a Discover credit card number with spaces', () => {
            expect(cardNumber.cardValidator('6011 0455 0884 5475')).to.equal(true)
        })

        it('Testing of a Discover credit card number with spaces and with an incorrect digit', () => {
            expect(cardNumber.cardValidator('6011 0455 0884 5471')).to.equal(false)
        })

        it('Testing of a Discover credit card number without any spaces', () => {
            expect(cardNumber.cardValidator('6011124428707311')).to.equal(true)
        })

        it('Testing of a Discover credit card number without any spaces and with an incorrect digit', () => {
            expect(cardNumber.cardValidator('6011124428707315')).to.equal(false)
        })

        it('Testing of an enRoute credit card number with spaces', () => {
            expect(cardNumber.cardValidator('2149 9923035 2218')).to.equal(true)
        })

        it('Testing of an enRoute credit card number with spaces and with an incorrect digit', () => {
            expect(cardNumber.cardValidator('2141 9923035 2218')).to.equal(false)
        })

        it('Testing of an enRoute credit card number without any spaces', () => {
            expect(cardNumber.cardValidator('214924324461915')).to.equal(true)
        })

        it('Testing of an enRoute credit card number without any spaces and with an incorrect digit', () => {
            expect(cardNumber.cardValidator('214924324466915')).to.equal(false)
        })

        it('Testing of a JCB credit card number with spaces', () => {
            expect(cardNumber.cardValidator('3577 9221 7737 7472')).to.equal(true)
        })

        it('Testing of a JCB credit card number with spaces and with an incorrect digit', () => {
            expect(cardNumber.cardValidator('3577 9121 7737 7472')).to.equal(false)
        })

        it('Testing of a JCB credit card number without any spaces', () => {
            expect(cardNumber.cardValidator('3596853370694750')).to.equal(true)
        })

        it('Testing of a JCB credit card number without any spaces and with an incorrect digit', () => {
            expect(cardNumber.cardValidator('3596853370694350')).to.equal(false)
        })

        it('Testing of a Voyager credit card number with spaces', () => {
            expect(cardNumber.cardValidator('86998 7857 40870 0')).to.equal(true)
        })

        it('Testing of a Voyager credit card number with spaces and with an incorrect digit', () => {
            expect(cardNumber.cardValidator('86998 7857 40870 3')).to.equal(false)
        })

        it('Testing of a Voyager credit card number without any spaces', () => {
            expect(cardNumber.cardValidator('869994524108762')).to.equal(true)
        })

        it('Testing of a Voyager credit card number without any spaces and with an incorrect digit', () => {
            expect(cardNumber.cardValidator('869994524105762')).to.equal(false)
        })

        it('Testing of an HiperCard credit card number with spaces', () => {
            expect(cardNumber.cardValidator('6062 8281 6342 6253')).to.equal(true)
        })

        it('Testing of an HiperCard credit card number with spaces and with an incorrect digit', () => {
            expect(cardNumber.cardValidator('6062 8281 6342 6053')).to.equal(false)
        })

        it('Testing of an HiperCard credit card number without any spaces', () => {
            expect(cardNumber.cardValidator('6062822926406280')).to.equal(true)
        })

        it('Testing of an HiperCard credit card number without any spaces and with an incorrect digit', () => {
            expect(cardNumber.cardValidator('6062802926406280')).to.equal(false)
        })

        it('Testing of credit card number with spaces and all numbers ending in 0', () => {
            expect(cardNumber.cardValidator('0000 0000 0000 0000')).to.equal(false)
        })

        it('Testing of credit card number without any spaces and with all numbers ending in 0', () => {
            expect(cardNumber.cardValidator('0000000000000000')).to.equal(false)
        })

        it('Testing of credit card number with spaces and all numbers ending in 1', () => {
            expect(cardNumber.cardValidator('1111 1111 1111 1111')).to.equal(false)
        })

        it('Testing of credit card number without any spaces and with all numbers ending in 1', () => {
            expect(cardNumber.cardValidator('1111111111111111')).to.equal(false)
        })

        it('Testing of credit card number with spaces and all numbers ending in 2', () => {
            expect(cardNumber.cardValidator('2222 2222 2222 2222')).to.equal(false)
        })

        it('Testing of credit card number without any spaces and with all numbers ending in 2', () => {
            expect(cardNumber.cardValidator('2222222222222222')).to.equal(false)
        })

        it('Testing of credit card number with spaces and all numbers ending in 3', () => {
            expect(cardNumber.cardValidator('3333 3333 3333 3333')).to.equal(false)
        })

        it('Testing of credit card number without any spaces and with all numbers ending in 3', () => {
            expect(cardNumber.cardValidator('3333333333333333')).to.equal(false)
        })

        it('Testing of credit card number with spaces and all numbers ending in 4', () => {
            expect(cardNumber.cardValidator('4444 4444 4444 4444')).to.equal(false)
        })

        it('Testing of credit card number without any spaces and with all numbers ending in 4', () => {
            expect(cardNumber.cardValidator('4444444444444444')).to.equal(false)
        })

        it('Testing of credit card number with spaces and all numbers ending in 5', () => {
            expect(cardNumber.cardValidator('5555 5555 5555 5555')).to.equal(false)
        })

        it('Testing of credit card number without any spaces and with all numbers ending in 5', () => {
            expect(cardNumber.cardValidator('5555555555555555')).to.equal(false)
        })

        it('Testing of credit card number with spaces and all numbers ending in 6', () => {
            expect(cardNumber.cardValidator('6666 6666 6666 6666')).to.equal(false)
        })

        it('Testing of credit card number without any spaces and with all numbers ending in 6', () => {
            expect(cardNumber.cardValidator('6666666666666666')).to.equal(false)
        })

        it('Testing of credit card number with spaces and all numbers ending in 7', () => {
            expect(cardNumber.cardValidator('7777 7777 7777 7777')).to.equal(false)
        })

        it('Testing of credit card number without any spaces and with all numbers ending in 7', () => {
            expect(cardNumber.cardValidator('7777777777777777')).to.equal(false)
        })

        it('Testing of credit card number with spaces and all numbers ending in 8', () => {
            expect(cardNumber.cardValidator('8888 8888 8888 8888')).to.equal(false)
        })

        it('Testing of credit card number without any spaces and with all numbers ending in 8', () => {
            expect(cardNumber.cardValidator('8888888888888888')).to.equal(false)
        })

        it('Testing of credit card number with spaces and all numbers ending in 9', () => {
            expect(cardNumber.cardValidator('9999 9999 9999 9999')).to.equal(false)
        })

        it('Testing of credit card number without any spaces and with all numbers ending in 9', () => {
            expect(cardNumber.cardValidator('99999999999999999')).to.equal(false)
        })
    })
})