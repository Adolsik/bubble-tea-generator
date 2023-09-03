// Pricing Adjustment
let totalPrice = 16;
let basePrice = 0;
let sizePrice = 0;
let extrasPrice = 0;
let sirupPrice = 0;

let progressBarValue = 0;

let price = document.getElementById("labelPriceVal");
let selectType = document.getElementById("teaType");
let selectBase = document.getElementById("base");
let selectSize = document.getElementById("size");
let selectExtras = document.getElementById("extras");
let selectSirup = document.getElementById("sirup");
let checkboxDiscount = document.getElementById("checkboxDiscount");
let progressBar = document.getElementById("progressBar");
let progressStep = document.getElementById("progressStep")


// update total price 
function updateTotalPrice(){
    if(checkboxDiscount.checked) {
        let priceVal = (parseInt(totalPrice) + parseInt(basePrice) + parseInt(sizePrice) + parseInt(extrasPrice) + parseInt(sirupPrice)) * 0.9;
        price.innerHTML = priceVal.toFixed(2) + " zł";
        return priceVal;
    } else {
        let priceVal = parseInt(totalPrice) + parseInt(basePrice) + parseInt(sizePrice) + parseInt(extrasPrice) + parseInt(sirupPrice);
        price.innerHTML = priceVal + " zł";
        return priceVal
    }
}

// update progressbar
function updateProgressBar(){
    if(selectType.value != 'disabled' ){
        progressBar.hidden = false
        progressBarValue = 20;
        progressStep.innerHTML = "Wybierz bazę herbaty";
        if(selectBase.value != 'disabled'){
            progressBarValue = 40;
            progressStep.innerHTML = "Wybierz rozmiar herbaty";
            if(selectSize.value != 'disabled'){
                progressBarValue = 60;
                progressStep.innerHTML = "Wybierz smak syropów";
                if(selectSirup.value != 'disabled'){
                    progressBarValue = 80;
                    progressStep.innerHTML = "Wybierz dodatki";
                    if(selectExtras.value != 'disabled'){
                        progressBarValue = 100;
                        progressStep.innerHTML = "Gotowe! Do zapłaty: " + updateTotalPrice() + " zł";
                    }
                }
            }
        }
    }
    progressBar.style.width = progressBarValue + "%";
}

// checkbox update
checkboxDiscount.addEventListener("change",function(){
    checkboxDiscount.checked = checkboxDiscount.checked;
    updateTotalPrice();
    updateProgressBar();
})

// type select

selectType.addEventListener('change',function(){
    updateProgressBar();
})

// base price
selectBase.addEventListener('change', function(){
    basePrice = selectBase.value;
    updateTotalPrice();
    updateProgressBar();
})

// size price
selectSize.addEventListener('change',function(){
    sizePrice = selectSize.value;
    updateTotalPrice();
    updateProgressBar();
})

// extras price
selectExtras.addEventListener('change', function(){
    let options = selectExtras.options, count = -1;
    for (let i=0; i < options.length; i++) {
        if (options[i].selected) count++;
    }
    extrasPrice = count * 4;
    updateTotalPrice();
    updateProgressBar();
})

// sirupPrice
selectSirup.addEventListener('change', function(){
    let options = selectSirup.options, count = -1;
    for (let i=0; i < options.length; i++) {
        if (options[i].selected) count++;
    }
    sirupPrice = count * 3;
    updateTotalPrice();
    updateProgressBar();
})