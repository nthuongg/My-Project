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
        const users = [
            { email: "user1@example.com", password: "password1", role: "user" },
            { email: "admin1@example.com", password: "adminpassword1", role: "admin" }
        ];

        let isLoggedIn = false;
        let userRole = "";

        // Kiểm tra xem người dùng có tồn tại trong danh sách không
        users.forEach(user => {
            if (user.email === email && user.password === password) {
                isLoggedIn = true;
                userRole = user.role;
            }
        });

        // Nếu đăng nhập thành công
        if (isLoggedIn) {
            // Xóa form sau khi đăng nhập thành công
            loginForm.reset();

            // Chuyển hướng về trang phù hợp tùy theo quyền của người dùng
            if (userRole === "user") {
                window.location.href = "user_dashboard.html";
            } else if (userRole === "admin") {
                window.location.href = "admin_dashboard.html";
            }

            // Thiết lập cờ isLoggedIn trong localStorage
            localStorage.setItem("isLoggedIn", "true");
        } else {
            alert("Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng thử lại.");
        }
    });
});