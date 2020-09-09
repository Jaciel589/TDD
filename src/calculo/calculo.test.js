const calculo = require('./calculo')

describe('Teste de juros', () => {
    it('paga-se 5% de juros até 30 dias de atraso', () => {
        const dias = [30]
        expect(calculo.sum(dias)).toEqual(0.05)
    })

    it('paga-se 10% de juros de 31 até 60 dias de atraso', () => {
        const dias = [42]
        expect(calculo.sum(dias)).toEqual(0.10)

    })

    it('paga-se 15% de juros a partir de 60 dias de atraso', () => {
        const dias = [61]
        expect(calculo.sum(dias)).toEqual(0.15)
    })

})