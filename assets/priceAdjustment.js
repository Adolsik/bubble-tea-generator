// Pricing Adjustment

let price = 16;

let labelPrice = document.getElementById("labelCenaZl");
let selectType = document.getElementById("baza");
let selectSize = document.getElementById("rozmiar");
let selectAddon = document.getElementById("dodatek");
let selectSirup = document.getElementById("syrop");
let checkboxDiscount = document.getElementById("rabat");

let counter1 = 0;
let counter2 = 0;

selectType.addEventListener("change",function(){
    let discount = document.getElementById("rabat").checked;
    let mlekoz = document.querySelector("option[value='mlekoz']").selected;
    let mlekok = document.querySelector("option[value='mlekos']").selected;

    if(mlekoz || mlekok){
        if(counter1 == 0){
            price += 2
            counter1++;
        }
        
        if(!discount){
            labelPrice.innerHTML = `${price} zł`
        }
        else{
            labelPrice.innerHTML = `${price - (price / 10)} zł`
        }
    }
    else{
        if(counter1 == 0){ 

        }else{
            price -= 2;
            counter1 = 0;
        }

        if(!discount){
            labelPrice.innerHTML = `${price} zł`
        }
        else{
            labelPrice.innerHTML = `${price - (price / 10)} zł`
        }
    }
});

selectSize.addEventListener("change",function(){
    let discount = document.getElementById("rabat").checked;
    let powiekszony = document.querySelector("option[value='powiekszony']").selected;
    if(powiekszony){
        if(counter2 == 0){
            price += 4
            counter2++;
        }
        
        if(!discount){
            labelPrice.innerHTML = `${price} zł`
        }
        else{
            labelPrice.innerHTML = `${price - (price / 10)} zł`
        }
    }
    else{
        if(counter2 == 0){ 

        }else{
            price -= 4;
            counter2 = 0;
        }

        if(!discount){
            labelPrice.innerHTML = `${price} zł`
        }
        else{
            labelPrice.innerHTML = `${price - (price / 10)} zł`
        }
    }
});

checkboxDiscount.addEventListener("change",function(){
    let discount = document.getElementById("rabat").checked;
    if(!discount){
        labelPrice.innerHTML = `${price} zł`
    }else{
        labelPrice.innerHTML = `${price - (price / 10)} zł`
    }
});

selectAddon.addEventListener("change",function(){
    
});


 