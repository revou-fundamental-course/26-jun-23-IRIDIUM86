document.getElementById("formulir").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var nameInput = document.getElementById("name");
    if (nameInput.value.trim() === "") {
      alert("Mohon masukan nama anda.");
      nameInput.focus();
      return;

      var nameInput = document.getElementById("email");
      if (nameInput.value.trim() === "") {
        alert("Mohon masukan email anda.");
        nameInput.focus();
        return;
      }

      var nameInput = document.getElementById("Nomor");
      if (nameInput.value.trim() === "") {
        alert("Mohon masukan nomor anda.");
        nameInput.focus();
        return;
      }
    }});