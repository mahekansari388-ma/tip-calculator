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
    let tipAmount = bill * (tip / 100)
    let grandTotal = Number(bill) + Number(tipAmount)
    let perPerson = grandTotal / people
    
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

    document.getElementById("total-tip").innerText = "0"
    document.getElementById("grand-total").innerText = "0"
    document.getElementById("per-person").innerText = "0"
}



