function submitForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message").value;

    // Add your form submission logic here
    console.log("Username: " + username);
    console.log("Email: " + email);
    console.log("Password: " + password);
    console.log("Message: " + message);
    // You would typically send this information to a server for processing
  }

  function resetForm() {
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("message").value = "";
  }