document.addEventListener("DOMContentLoaded", function() {
    const loginLink = document.getElementById("loginLink");
    const crudLink = document.getElementById("crudLink");

    loginLink.addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn chuyển hướng mặc định
        showLoginForm(); // Hiển thị form đăng nhập khi click vào "Đăng nhập"
    });

    crudLink.addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn chuyển hướng mặc định

        const userRole = localStorage.getItem("userRole");

        if (userRole === "admin") {
            window.location.href = "crud.html"; // Chuyển hướng đến trang CRUD nếu là admin
        } else {
            alert("Bạn không đủ điều kiện để sử dụng tính năng này !"); // Hiển thị thông báo nếu không phải là admin
        }
    });

    const rememberCheckbox = document.getElementById("remember-checkbox");
    const loginForm = document.getElementById("login-form");

    // Load email từ localStorage nếu có
    if (localStorage.getItem("email")) {
        loginForm.elements.email.value = localStorage.getItem("email");
        rememberCheckbox.checked = true;
    }

    // Xử lý sự kiện thay đổi checkbox "Remember Me"
    rememberCheckbox.addEventListener("change", function() {
        if (this.checked) {
            localStorage.setItem("email", loginForm.elements.email.value);
        } else {
            localStorage.removeItem("email");
        }
    });

    // Xử lý sự kiện submit form đăng nhập
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn việc submit form mặc định

        const email = loginForm.elements.email.value;
        const password = loginForm.elements.password.value;

        const users = [
            { email: "user1@example.com", password: "password1", role: "user" },
            { email: "admin1@example.com", password: "adminpassword1", role: "admin" }
        ];

        let isLoggedIn = false;
        let userRole = "";

        users.forEach(user => {
            if (user.email === email && user.password === password) {
                isLoggedIn = true;
                userRole = user.role;
            }
        });

        if (isLoggedIn) {
            loginForm.reset();
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userRole", userRole);

            if (userRole === "user") {
                window.location.href = "qlsv.html";
            } else if (userRole === "admin") {
                window.location.href = "crud.html";
            }
        }
    });
});

function showLoginForm() {
    var overlay = document.getElementById("overlay");
    var loginForm = document.getElementById("login-form-container");
    overlay.style.display = "block";
    loginForm.style.display = "block";
}

function hideLoginForm() {
    var overlay = document.getElementById("overlay");
    var loginForm = document.getElementById("login-form-container");
    overlay.style.display = "none";
    loginForm.style.display = "none";
}