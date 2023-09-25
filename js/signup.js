const signUpBtn = document.getElementById("signup-btn");
signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //console.log("clicked");

  const fullName = document.getElementById("full-name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const data = {
    fullName: fullName.value,
    email: email.value,
    password: password.value,
  };

  const signUp = async () => {
    const response = await fetch(
      "https://backend-mu-pied.vercel.app/users/register",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const signUpResp = await response.json();
    console.log(signUpResp);

    if (signUpResp.status) {
      document.getElementById("error-msg").innerText = signUpResp.message;
      //window.location.href = "login.html";
    } else {
      document.getElementById("error-msg").innerText = signUpResp.message;
    }
  };

  signUp();
});
