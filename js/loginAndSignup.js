const signinForm = document.querySelector("#signin_form");
const signupForm = document.querySelector("#signup_form");

let signinInformation;
let signupInformation;

//Denna funktion lyssnar på webbformuläret och går igenom varje input och sparar ner det i ett objekt.
signinForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(signinForm);

  const dataObject = {};

  for (let pair of formData.entries()) {
    dataObject[pair[0]] = pair[1];
  }

  const username = dataObject.username;
  const password = dataObject.password;

  signinInformation = {
    username: username,
    password: password,
  };

  console.log(signinInformation);
});

//Denna funktion lyssnar på webbformuläret och går igenom varje input och sparar ner det i ett objekt.

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(signupForm);

  const dataObject = {};

  for (let pair of formData.entries()) {
    dataObject[pair[0]] = pair[1];
  }

  const username = dataObject.username;
  const password = dataObject.password;
  const email = dataObject.email;
  const fullname = dataObject.fullname;

  signupInformation = {
    username: username,
    password: password,
    email: email,
    fullname: fullname,
  };
  console.log(signupInformation);

  return signinInformation;
});
