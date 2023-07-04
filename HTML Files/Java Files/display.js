    // Retrieve the saved data from Local Storage
    var jsonData = localStorage.getItem("formData");

    // Parse the JSON string back into an object
    var formData = JSON.parse(jsonData);

    // Display the data on the page
    document.write("<p>Name: " + formData.Name + "</p>");
    document.write("<p>Email: " + formData.Email + "</p>");
    document.write("<p>Nomor Telepon: " + formData.Nomor + "</p>");
    document.write("<p>Pesanan: " + formData.Pesanan + "</p>");
    document.write("<p>Paket: " + formData.paket + "</p>");

    // Clear the saved data from Local Storage
    localStorage.removeItem("formData");