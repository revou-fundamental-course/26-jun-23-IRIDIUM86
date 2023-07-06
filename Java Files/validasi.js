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