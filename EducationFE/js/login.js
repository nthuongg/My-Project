document.addEventListener("DOMContentLoaded", function () {
    const rememberCheckbox = document.getElementById("remember-checkbox");
    const loginForm = document.getElementById("login-form");

    // Load username from localStorage if available
    if (localStorage.getItem("username")) {
        loginForm.elements.username.value = localStorage.getItem("username");
        rememberCheckbox.checked = true;
    }

    // Function to handle checkbox change
    rememberCheckbox.addEventListener("change", function () {
        if (this.checked) {
            localStorage.setItem("username", loginForm.elements.username.value);
        } else {
            localStorage.removeItem("username");
        }
    });

    // Function to handle form submission
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Perform login logic here (e.g., send data to server)
        const username = loginForm.elements.username.value;
        const password = loginForm.elements.password.value;

        // Example: Log the username and password to console
        console.log("Username:", username);
        console.log("Password:", password);

        // Clear the form after submission
        loginForm.reset();
    });
});
