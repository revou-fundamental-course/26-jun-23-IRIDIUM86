function validateForm() {
  let name = document.forms["formulir"]["name"].value;
  let email = document.forms["formulir"]["email"].value;
  let nomor = document.forms["formulir"]["Nomor"].value;

  if (name === "") {
    alert("Mohon isi nama anda.");
    return false;
  }

  if (email === "") {
    alert("Mohon isi email anda.");
    return false;
  }

  if (nomor === "") {
    alert("Mohon isi nomor anda.");
    return false;
  }
}

function saveFormData(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    var Nomor = document.getElementById("Nomor").value;
    const Pesanan = document.getElementById("pesanan").value;
    const pesan = document.getElementById("pesan").value;

    var formData = {
      name: name,
      email: email,
      Nomor: Nomor,
      Pesanan: Pesanan,
      pesan: pesan
    };

    var jsonData = JSON.stringify(formData);

    localStorage.setItem("formData", jsonData);

    window.location.href = "C:/Users/Owner/Downloads/latihan/Main Project/HTML Files/Additional HTML/thank-you.html";}