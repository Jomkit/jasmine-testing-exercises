
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }
  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

function appendDeleteBtn(tr){
  let newTd = document.createElement('td');
  newTd.innerText = 'X';
  newTd.classList.add('remove-btn');

  newTd.addEventListener('click', (e) => {
    removeServer(e);
  });
  
  tr.append(newTd);

}

function removeServer(e) {
  let targetTr = e.target.parentElement;
  if(targetTr.parentElement.parentElement.id == 'serverTable'){
    delete allServers[targetTr.id];
    
  }
  targetTr.remove();

  paymentId = e.target.parentElement.getAttribute('id');
  delete allPayments[paymentId];
  updateServerTable();
  updateSummary();

  billAmtInput.value = '';
  tipAmtInput.value = '';
}
