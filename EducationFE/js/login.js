document.addEventListener("DOMContentLoaded", function () {
    const rememberCheckbox = document.getElementById("remember-checkbox");
    const loginForm = document.getElementById("login-form");

    // Nếu có tên người dùng được lưu trong localStorage, load vào form
    if (localStorage.getItem("email")) {
        loginForm.elements.email.value = localStorage.getItem("email");
        rememberCheckbox.checked = true;
    }

    // Hàm xử lý sự kiện thay đổi của checkbox
    rememberCheckbox.addEventListener("change", function () {
        if (this.checked) {
            localStorage.setItem("email", loginForm.elements.email.value);
        } else {
            localStorage.removeItem("email");
        }
    });

    // Hàm xử lý sự kiện khi form được submit
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn chặn việc submit form mặc định

        // Lấy giá trị email và password từ form
        const email = loginForm.elements.email.value;
        const password = loginForm.elements.password.value;

        // Thực hiện logic đăng nhập
        const validEmail = "user1@admin.com";
        const validPassword = "password1";

        if (email === validEmail && password === validPassword) {
            // Xóa form sau khi đăng nhập thành công
            loginForm.reset();

            // Chuyển hướng về trang chủ
            window.location.href = "studentManagement.html";
            // Thiết lập cờ isLoggedIn trong localStorage
            localStorage.setItem("isLoggedIn", "true");
        } else {
            alert("Incorrect username or password. Please try again.");
        }
    });
});
