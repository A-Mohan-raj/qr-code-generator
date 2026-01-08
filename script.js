function generateQR() {
  const text = document.getElementById("qrText").value;
  const qrBox = document.getElementById("qrBox");

  
  qrBox.innerHTML = "";

  if (text.trim() === "") {
    alert("Enter some text!");
    return;
  }

  new QRCode(qrBox, {
    text: text,
    width: 180,
    height: 180,
    colorDark: "#ffffff",
    colorLight: "#020617"
  });
}
