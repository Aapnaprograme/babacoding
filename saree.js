
document.querySelector(".input-box button").addEventListener("click", () => {
    let email = document.querySelector(".input-box input").value;

    if(email === ""){
        alert("Please enter your email ❗");
    } else {
        alert("Subscribed Successfully 🎉");
    }
});
