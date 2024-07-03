function convert() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result = (amount * to / from).toFixed(2);

    document.getElementById("result").textContent = result;
}
