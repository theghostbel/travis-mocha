describe('when user clicks button', function () {
    before(function () {
        document.getElementsByTagName('button')[0].click()
    })

    it('shows welcome text in input', function () {
        var inputValue = document.getElementsByTagName('input')[0].value
        expect(inputValue).to.equal('Tallinn')
    })

    it('has welcome text of 7 chars', function () {
        var inputValue = document.getElementsByTagName('input')[0].value
        expect(inputValue.length).to.equal(7)
    })
})
