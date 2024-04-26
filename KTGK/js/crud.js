document.getElementById("crudLink").addEventListener("click", function(event) {
    event.preventDefault(); // Ngăn chặn chuyển hướng
    fetch("crud.html")
        .then(response => response.text())
        .then(html => {
            document.querySelector(".main-content").innerHTML = html;
        });
});
//! khởi tạo các giá trị ban đầu
var selectedRow = null;
//! logic khi submit form
function onFormSubmit(event) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
      insertNewRecord(formData); 
    } else {
      updateRecord(formData);
    }
    resetForm();
}

//! phương thức lấy dữ liệu (trích xuất dữ liệu)
function readFormData() {
  var formData = {};
  formData["studentID"] = document.getElementById("studentID").value;
  formData["studentName"] = document.getElementById("studentName").value;
  return formData;
}

//! chèn dữ liệu mới vào (phương thức POST)
function insertNewRecord(data) {
  var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = data.studentID;
  cell2.innerHTML = data.studentName;
  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = `<button onClick="onEdit(this)">Sửa</button> <button onClick="onDelete(this)">Xóa</button>`;
}

//! chỉnh sửa và cập nhật dữ liệu (phương thức Update)
// chỉnh sửa dữ liệu (lấy dữ liệu)
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("studentID").value = selectedRow.cells[0].innerHTML;
  document.getElementById("studentName").value = selectedRow.cells[1].innerHTML;
}

// cập nhật dữ liệu
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.studentID;
  selectedRow.cells[1].innerHTML = formData.studentName;
}

//! xóa dữ liệu (phương thức delete)
// xóa dữ liệu
function onDelete(td) {
  if (confirm("Bạn có chắc chắn muốn xóa sinh viên này?")) {
    var row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

//! đặt lại các giá trị trong form
function resetForm() {
  document.getElementById("studentID").value = "";
  document.getElementById("studentName").value = "";
  selectedRow = null;
}