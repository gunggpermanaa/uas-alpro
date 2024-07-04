function convert() {
  let amount = document.getElementById("jumlah").value;
  let from = document.getElementById("dari").value;
  let to = document.getElementById("ke").value;
  let result = ((amount * to) / from).toFixed(2);

  document.getElementById("result").textContent = result;
}
