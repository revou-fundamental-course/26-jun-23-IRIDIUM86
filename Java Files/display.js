var jsonData = localStorage.getItem("formData");
var formData = JSON.parse(jsonData);

document.write("<p>Name: " + formData.name + "</p>");
document.write("<p>Email: " + formData.email + "</p>");
document.write("<p>Nomor Telepon: " + formData.Nomor + "</p>");
document.write("<p>Pesanan: " + formData.Pesanan + "</p>");
document.write("<p>Paket: " + formData.pesan + "</p>");

localStorage.removeItem("formData");