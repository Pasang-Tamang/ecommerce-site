const email = document.getElementById("email");
const password = document.getElementById("password");

const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  //   console.log("login here");
  //   console.log(email.value);
  //   console.log(password.value);

  let data = {
    email: email.value,
    password: password.value,
  };

  //Change Object to JSON using JSON.stringify method
  //   async function loginForm(){
  //     const resp = await fetch("https://e8a1-27-34-30-0.ngrok.io/users/login")
  //   }

  const loginForm = async () => {
    const resp = await fetch("https://backend-mu-pied.vercel.app/users/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const loginResp = await resp.json();

    if (loginResp.status) {
      //document.getElementById("error-msg").innerText = loginResp.message;
      window.location.href = "product.html";
    } else {
      document.getElementById("error-msg").innerText = loginResp.message;
    }

    console.log(loginResp);
  };

  loginForm();
});
