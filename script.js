function calculate() {
    let bill = document.getElementById("bill").value
    let tip = document.getElementById("tip").value
    let people = document.getElementById("people").value

    let tipAmount = bill * (tip / 100)
    let grandTotal = Number(bill) + Number(tipAmount)
    let perPerson = grandTotal / people
    
    document.getElementById("total-tip").innerText = tipAmount.toFixed(2)
    document.getElementById("grand-total").innerText = grandTotal.toFixed(2)
    document.getElementById("per-person").innerText = perPerson.toFixed(2)
}


document.getElementById("bill").oninput = calculate
document.getElementById("tip").oninput = calculate
document.getElementById("people").oninput = calculate



