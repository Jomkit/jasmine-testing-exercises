describe('helpers.js tests', () => {
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
        submitPaymentInfo();
    })
    
    it('should sum the bill amount of all payments and return the total on sumPaymentTotal()', () => {
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 300;
        tipAmtInput.value = 40;

        submitPaymentInfo();
        
        expect(sumPaymentTotal('billAmt')).toEqual(400);
    })

    it('should sum the tip amount of all payments and return the total on sumPaymentTotal()', () => {
        expect(sumPaymentTotal('tipAmt')).toEqual(10);

        billAmtInput.value = 200;
        tipAmtInput.value = 10;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(20);
    })

    it('should calculate tip percent given bill amt and tip amt on calculateTipPercent()', () => {
        expect(calculateTipPercent(400, 25)).toEqual(6);
        expect(calculateTipPercent(30, 3)).toEqual(10);
    })

    it('should add new cells to a table row on appendTd()', () => {
        let testTr = document.createElement('tr');
        
        appendTd(testTr, 'test');
        expect(testTr.children.length).toEqual(1);
        expect(testTr.firstChild.innerText).toEqual('test');
    })

    it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
        let newTr = document.createElement('tr');
    
        appendDeleteBtn(newTr);
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });
    
    afterEach(() => {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentTbody.innerHTML = '';
        serverId = 0;
        allPayments = {};
        paymentId = 0;
    })
})