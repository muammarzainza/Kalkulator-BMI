document.getElementById("bmiform").addEventListener("submit", function (e) {
  e.preventDefault();
  const berat = parseFloat(document.getElementById("berat").value);
  const tinggiCm = parseFloat(document.getElementById("tinggi").value);
  const tinggi = tinggiCm / 100;
  if (!berat || !tinggiCm || tinggi <= 0) {
    document.getElementById("hasil").innerHTML =
      "<p>Masukkan nilai yang valid!</p>";
    return;
  }
  const bmi = berat / (tinggi * tinggi);
  let status = "";
  if (bmi < 18.5) status = "Underweight";
  else if (bmi < 24.9) status = "Normal";
  else if (bmi < 29.9) status = "Overweight";
  else status = "Obesitas";
  document.getElementById(
    "hasil"
  ).innerHTML = `<p>BMI anda adalah: <strong>${bmi.toFixed(
    2
  )}</strong></p><p>Status: <strong>${status}</strong></p>`;
});
