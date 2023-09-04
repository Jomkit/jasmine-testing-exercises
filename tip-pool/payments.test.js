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

    it('should create a curPayment object with bill amount, tip amount, and tip percent on createCurPayment()', () => {
        let curPayment = createCurPayment();
        let billAmt = curPayment.billAmt;
        let tipAmt = curPayment.tipAmt;
        let tipPercent = curPayment.tipPercent;

        expect(Object.keys(curPayment).length).toEqual(3);
        expect(billAmt).toEqual('5');
        expect(tipAmt).toEqual('1');
        expect(tipPercent).toEqual(20);
    })

    it('should append an entry to the payment table on appendPaymentTable()', () => {
        appendPaymentTable(createCurPayment());
        
        let curPaymentList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curPaymentList.length).toEqual(4);
        expect(curPaymentList[0].innerText).toEqual('$5');
        expect(curPaymentList[1].innerText).toEqual('$1');
        expect(curPaymentList[2].innerText).toEqual('20%');
    })

    it('should add new entry under summary on updateSummary()', () => {
        submitPaymentInfo();
        updateSummary();
        expect(summaryTds[0].innerText).toEqual('$5');
        expect(summaryTds[1].innerText).toEqual('$1');
        expect(summaryTds[2].innerText).toEqual('20%');
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