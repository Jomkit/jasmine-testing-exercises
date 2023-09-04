describe('Payments.js tests', () => {
    beforeEach(function() {
        billAmtInput.value = 5;
        tipAmtInput.value = 1;

    })

    it('should add new payment info on submit', () => {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('5');
    })
    
    afterEach(() => {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        paymentId = 0;
        allPayments = {};
    })
})