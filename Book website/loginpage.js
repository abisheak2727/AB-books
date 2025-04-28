function checkPassword() {
    const password = document.getElementById("password").value;
    if (password.length > 7) {
      alert("Check your password");
    }
  }
function checkUsername() {
    const username = document.getElementById("username").value;
    if (username.length > 0) {
      alert("Check your username");
    }
  }
function checkEmail() {
    const email = document.getElementById("email").value;
    if (email.length > 0) {
      alert("Check your email");
    }
  }  
  