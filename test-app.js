describe('when user clicks button', function () {
    before(function () {
        document.getElementsByTagName('button')[1].click()
    })

    it('shows welcome text in input', function () {
        var inputValue = document.getElementsByTagName('input')[0].value
        expect(inputValue).to.equal('Soligorsk')
    })
})

