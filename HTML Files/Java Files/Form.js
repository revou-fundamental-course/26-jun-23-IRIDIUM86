function saveFormData(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    var Nomor = document.getElementById("Nomor").value;
    const Pesanan = document.getElementById("pesanan").value;
    const pesan = document.getElementById("pesan").value;

    {
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
    var formData = {
      name: name,
      email: email,
      Nomor: Nomor,
      Pesanan: Pesanan,
      pesan: pesan
    };

    var jsonData = JSON.stringify(formData);

    localStorage.setItem("formData", jsonData);

    window.location.href = "Additional HTML/thank-you.html";}