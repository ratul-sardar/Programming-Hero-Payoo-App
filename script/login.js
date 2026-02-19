console.log("login time");
const loginBtn = document.getElementById("login-btn");

const telNumber = 12345678910;
const password = 1234;

loginBtn.addEventListener("click", function () {
  let telinput = document.getElementById("tel-field").value;
  let passInput = document.getElementById("password-field").value;

  if (telNumber == telinput && password == passInput) {
    alert("logging in");
    window.location.assign("/home.html");
  } else {
    alert("user or password did not matched");
  }
});
