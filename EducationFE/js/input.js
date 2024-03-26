document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn form gửi đi để xử lý JavaScript
  
    // Lấy giá trị từ các trường input
    var fullName = document.getElementById("fullName").value;
    var classValue = document.getElementById("class").value;
    var studentID = document.getElementById("studentID").value;
    var score = document.getElementById("score").value;
    var schoolYear = document.getElementById("schoolYear").value;
    var studentImage = document.getElementById("studentImage").value; // This is a file name, not the actual image data
  
    // Kiểm tra điểm số, nếu là 0 thì hiển thị form xác nhận
    if (parseInt(score) === 0) {
        var confirmation = confirm("You have entered the score as 0. Are you sure?");
        if (!confirmation) {
          return; // Ngăn chặn việc gửi form nếu người dùng hủy bỏ
        }
    }
  
    // Xử lý dữ liệu (ví dụ: gửi dữ liệu đến máy chủ để lưu trữ)
    console.log("Full Name:", fullName);
    console.log("Class:", classValue);
    console.log("Student ID:", studentID);
    console.log("Score:", score);
    console.log("School Year:", schoolYear);
    console.log("Student Image:", studentImage); // Just a file name, actual image processing needed
    
    // Reset form sau khi xử lý
    document.getElementById("studentForm").reset();
  });
  