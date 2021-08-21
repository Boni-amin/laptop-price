
function getMemoryNumber(memoryCost, number){
    const totalNumberText = document.getElementById(memoryCost);
    totalNumberText.innerText = number;
}
function getTotalInnerText(inputText){
    const bestNumber = document.getElementById(inputText);
    const bestNumberValue = Number(bestNumber.innerText);
    return bestNumberValue;
}
function getTotalPrice(){
    const bestNumberValue = getTotalInnerText('best-number');
    const memoryNumberValue = getTotalInnerText('memory-number');
    const storngNumberValue = getTotalInnerText('storng-number');
    const delivaryNumberValue = getTotalInnerText('delivary-number');

    const totalValue = bestNumberValue +memoryNumberValue + storngNumberValue + delivaryNumberValue;

    const totalNumber = document.getElementById('total-number');
    const finalTotal = document.getElementById('final-total-number');
    totalNumber.innerText = totalValue;
    finalTotal.innerText = totalValue;
}

// Memory button handle 
document.getElementById('memory-button1').addEventListener('click', function(){
    getMemoryNumber('memory-number', 0);
    getTotalPrice()
})
document.getElementById('memory-button2').addEventListener('click', function(){
    getMemoryNumber('memory-number', 180);
    getTotalPrice();

});
// Strong button handle 
document.getElementById('strong-button1').addEventListener('click', function(){
    getMemoryNumber('storng-number', 0);
    getTotalPrice();
});
document.getElementById('strong-button2').addEventListener('click', function(){
    getMemoryNumber('storng-number', 100);
    getTotalPrice();
});
document.getElementById('strong-button3').addEventListener('click', function(){
    getMemoryNumber('storng-number', 180);
    getTotalPrice();
});
//  Delivary option  handle 
document.getElementById('delivary-button1').addEventListener('click', function(){
    getMemoryNumber('delivary-number', 0);
    getTotalPrice();
});
document.getElementById('delivary-button2').addEventListener('click', function(){
    getMemoryNumber('delivary-number', 20);
    getTotalPrice();
});

// Apply button handle 
document.getElementById('apply-button').addEventListener('click', function(){
    getTotalPrice()
   
});
