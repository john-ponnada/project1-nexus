document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const loginSwitch = document.getElementById("loginSwitch");
    const signupSwitch = document.getElementById("signupSwitch");
    loginSwitch.style.display = "none";

    loginSwitch.addEventListener("click", function () {
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
        loginSwitch.classList.add("active");
        signupSwitch.classList.remove("active");
        loginSwitch.style.display = "none";
        signupSwitch.style.display="block";
    });

    signupSwitch.addEventListener("click", function () {
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
        signupSwitch.classList.add("active");
        loginSwitch.classList.remove("active");
        signupSwitch.style.display = "none";
        loginSwitch.style.display = "block";
    });

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // Basic form validation - you can add more validation logic here
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;

        if (!validateEmail(email) || password.length < 6) {
            window.alert("Please enter a valid email and a password with at least 6 characters.");
            return;
        }

        // Perform signup actions (e.g., send data to server, etc.)
        console.log("Signup successful!");
        window.alert("Signup Successful");
        signupForm.reset();
    });

    function validateEmail(email) {
        // Simple email validation regex
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // Basic form validation - you can add more validation logic here
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        if (!validateEmail(email) || password.length === 0) {
            window.alert("Please enter a valid email and password.");
            return;
        }

        // Perform login actions (e.g., send data to server, etc.)
        console.log("Login successful!");
        window.alert("Login successful");
        loginForm.reset();
    });
});