function calculate() {
    let bill = document.getElementById("bill").value
    let tip = document.getElementById("tip").value
    let people = document.getElementById("people").value

    document.getElementById("bill-error").innerText = ""
    document.getElementById("tip-error").innerText = ""
    document.getElementById("people-error").innerText = ""

    let isValid = true

    if ( bill <= 0 || bill === ""){
        document.getElementById("bill-error").innerText = "Bill must be a positive number"
        isValid = false

    }

    if ( tip < 0 || tip > 100 ){
        document.getElementById("tip-error").innerText = "Tip must be between 0 and 100"
        isValid = false

    }

    if ( people < 1 || people === "" || !Number.isInteger(Number(people))) {
        document.getElementById("people-error").innerText = "Must be at least 1 person"
        isValid = false

    }


   if (isValid) {
    let billNum = Number(bill)
    let tipNum = Number(tip)
    let peopleNum = Number(people)

    let tipAmount = billNum * (tipNum / 100)
    let grandTotal = billNum + tipAmount
    let perPerson = grandTotal / peopleNum
    
    document.getElementById("bill-amount").innerText = billNum.toFixed(2)
    document.getElementById("total-tip").innerText = tipAmount.toFixed(2)
    document.getElementById("grand-total").innerText = grandTotal.toFixed(2)
    document.getElementById("per-person").innerText = perPerson.toFixed(2)
    }

}


document.getElementById("bill").oninput = calculate
document.getElementById("tip").oninput = calculate
document.getElementById("people").oninput = calculate

document.getElementById("reset").onclick = function(){
    document.getElementById("bill").value = ""
    document.getElementById("tip").value = ""
    document.getElementById("people").value = ""

    document.getElementById("bill-error").innerText = ""
    document.getElementById("tip-error").innerText = ""
    document.getElementById("people-error").innerText = ""

    document.getElementById("bill-amount").innerText = "0"
    document.getElementById("total-tip").innerText = "0"
    document.getElementById("grand-total").innerText = "0"
    document.getElementById("per-person").innerText = "0"
}

function setTip(value){
    if (value !== "custom"){
        document.getElementById("tip").value = value
        calculate()
    } else{
        document.getElementById("tip").value = ""
    }
}

document.getElementById("btn10").onclick = function(){ setTip("10")}
document.getElementById("btn15").onclick = function(){ setTip("15")}
document.getElementById("btn20").onclick = function(){ setTip("20")}
document.getElementById("btnCustom").onclick = function(){ setTip("custom")}




