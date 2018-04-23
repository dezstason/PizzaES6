import Pizza from "pizza";
console.log(Pizza);





fetch('data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        fillDataSelect(data);
    })
    .then(
fetch('form.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(form) {
        fillFormSelect(form);
    }))
    .then(

fetch('size.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(size) {
        fillSizeSelect(size);
    }))
    .then(

fetch('tip.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(tip) {
        fillTipSelect(tip);
    }))
    .then(

fetch('bonus.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(bonus) {
        fillBonusSelect(bonus);
    }));




function fillDataSelect(data){
    let selectElement = document.getElementById('testo');

    for (let i = 0 ; i < data.length ; i++){
        let optionElement = document.createElement('option');
        optionElement.innerText = data[i].name;
        optionElement.value = data[i].price;
        selectElement.appendChild(optionElement);
    }

    document.getElementById('select1').appendChild(selectElement);
}

function fillFormSelect(form){
    let selectElement = document.getElementById('form');

    for (let i = 0 ; i < form.length ; i++){
        let optionElement = document.createElement('option');
        optionElement.innerText = form[i].name;
        optionElement.value = form[i].price;
        selectElement.appendChild(optionElement);
    }

    document.getElementById('select2').appendChild(selectElement);
}

function fillSizeSelect(size){
    let selectElement = document.getElementById('size');

    for (let i = 0 ; i < size.length ; i++){
        let optionElement = document.createElement('option');
        optionElement.innerText = size[i].name;
        optionElement.value = size[i].price;
        selectElement.appendChild(optionElement);
    }

    document.getElementById('select3').appendChild(selectElement);
}

function fillTipSelect(tip){
    let selectElement = document.getElementById('tip');

    for (let i = 0 ; i < tip.length ; i++){
        let optionElement = document.createElement('option');
        optionElement.innerText = tip[i].name;
        optionElement.value = tip[i].price;
        selectElement.appendChild(optionElement);
    }

    document.getElementById('select4').appendChild(selectElement);
}

function fillBonusSelect(bonus){
    let selectElement = document.getElementById('bonus');

    for (let i = 0 ; i < bonus.length ; i++){
        let optionElement = document.createElement('option');
        optionElement.innerText = bonus[i].name;
        optionElement.value = bonus[i].price;
        selectElement.appendChild(optionElement);
    }

    document.getElementById('select5').appendChild(selectElement);
}
let Sum = 0;
function sum(selectId){
    console.log(document.getElementById(selectId).value);
    d = Math.floor(document.getElementById(selectId).value);
    console.log(d);
    Sum += d;
    let orderElement = document.createElement('button');
    orderElement.setAttribute("class", "btn btn-secondary");

    let t = document.createTextNode(d);
    orderElement.setAttribute("onclick", "deleteOrder(t)");
    orderElement.appendChild(t);
    document.getElementById('order').appendChild(orderElement);
    document.getElementById('suma').value = '';
    document.getElementById('suma').value = Sum;
    //document.getElementById('suma').value += parseInt("document.getElementById(selectId).value", 10);
}
function deleteOrder(t){
    document.getElementById('suma').value = '';
    Sum -= t;
    document.getElementById('suma').value = Sum;
}



