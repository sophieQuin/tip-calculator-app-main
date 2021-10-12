
let tipBtn = document.querySelectorAll('.tip');
let resetBtn = document.getElementById('reset');

function formatNum(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

/*Default Value*/
defaultPeople = document.getElementById('quantity').value = 1;

/*Tip calculation - using buttons*/
function totalBill (perc) {
    let myBill = document.getElementById('amount').value;
    let people = document.getElementById('quantity').value;
    totalResult = myBill*(1+(perc/100))/people;
    document.getElementById('tip-person').value = '£ ' + formatNum(parseFloat(totalResult).toFixed(2));
    resetBtn.style.backgroundColor = '#26C2AE';
    function totalTip (perc) {
        withTips = myBill*perc/100/people;
       document.getElementById('tip-amount').value = '£ ' + formatNum(parseFloat(withTips).toFixed(2));
       
    }
    return totalTip(perc);
};

/*Tip calculation with custom tip*/
function customTipCalc () {
    customTip = document.getElementById('custom').value;
    let myBill = document.getElementById('amount').value;
    let people = document.getElementById('quantity').value;
    totalResult = myBill*(1+(customTip/100))/people;
    document.getElementById('tip-person').value = '£ ' + formatNum(parseFloat(totalResult).toFixed(2))
    ;
    resetBtn.style.backgroundColor = '#26C2AE'
function totalTip () {
    withTips = myBill*customTip/100/people;
    document.getElementById('tip-amount').value = '£ ' + formatNum(parseFloat(withTips).toFixed(2));
       
    }
    return totalTip();
}




/*Reset function*/
function resetValue () {
    totalAmount = document.getElementById('tip-amount').value = 0;
    personAmount = document.getElementById('tip-person').value = 0;
    document.getElementById('custom').value = '';
    document.getElementById('amount').value = '';
    resetBtn.style.backgroundColor = '#0D686D';
    document.getElementById('quantity').value = 1;
};




   resetBtn.addEventListener('click', resetValue);
   tipBtn[0].addEventListener('click', () => {totalBill(5)});
   tipBtn[1].addEventListener('click', () => {totalBill(10)});
   tipBtn[2].addEventListener('click', () => {totalBill(15)});
   tipBtn[3].addEventListener('click', () => {totalBill(25)});
   tipBtn[4].addEventListener('click', () => {totalBill(50)});
   document.getElementById('custom').addEventListener('keyup', () => {customTipCalc()});
   
   

   




  

  

