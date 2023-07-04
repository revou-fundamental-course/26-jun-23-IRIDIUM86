function saveFormData(event) {
    event.preventDefault();

    // Retrieve data from the HTML form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var Nomor = document.getElementById("Nomor").value;
    var Pesanan = document.getElementById("Pesanan").value;
    var pesan = document.getElementById("pesan").value;

    // Create an object to store the form data
    var formData = {
      name: name,
      email: email,
      Nomor: Nomor,
      Pesanan: Pesanan,
      pesan: pesan
    };

    // Convert the object to a JSON string
    var jsonData = JSON.stringify(formData);

    // Save the data to Local Storage
    localStorage.setItem("formData", jsonData);

    // Redirect or perform any other desired action
    window.location.href = "C:/Users/Owner/Downloads/latihan/Main Project/HTML Files/Additional HTML/thank-you.html";}