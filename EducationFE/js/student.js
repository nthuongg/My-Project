function save() {
  let fullName = document.getElementById("fullName").value;
  let classValue = document.getElementById("class").value;
  let studentID = document.getElementById("studentID").value;
  let score = document.getElementById("score").value;
  let schoolYear = document.getElementById("schoolYear").value;
  let studentImageInput = document.getElementById("studentImage");
  
  if (_.isEmpty(fullName)) {
    document.getElementById('fullName-error').innerHTML = 'Enter name, please!!';
    return;
  } else {
    document.getElementById('fullName-error').innerHTML = '';
  }

  // class error 
  if (_.isEmpty(classValue)) {
    document.getElementById('class-error').innerHTML = 'Enter class, please!!';
    return;
  } else {
    document.getElementById('class-error').innerHTML = '';
  }
  

  // studentID er
  if (_.isEmpty(studentID)) {
    document.getElementById('studentID-error').innerHTML = 'Enter student ID, please!!';
    return;
  } else {
    document.getElementById('studentID-error').innerHTML = '';
  }

  let studentIDPattern = /^\d{7}$/;
  if (!studentIDPattern.test(studentID)) {
    document.getElementById('studentID-error').innerHTML = 'Student ID must be a 7-digit number!';
    return;
  } else {
    document.getElementById('studentID-error').innerHTML = '';
  }

  // score er
  if (_.isEmpty(score)) {
    document.getElementById('score-error').innerHTML = 'Enter score, please!!';
    return;
  } else {
    document.getElementById('score-error').innerHTML = '';
  }
  
  if (score < 0 || score > 10) {
    document.getElementById('score-error').innerHTML = 'Score must be between 0 and 10!';
    return;
  } else if (score == 0) {
    // Hiển thị form xác nhận
    let confirmation = confirm('Are you sure the score is 0?');
  
    if (!confirmation) {
      // Người dùng không xác nhận, dừng lại và không lưu dữ liệu
      return;
    }
  } else {
    document.getElementById('score-error').innerHTML = '';
  }

  // year er
  if (_.isEmpty(schoolYear)) {
    document.getElementById('schoolYear-error').innerHTML = 'Enter school year, please!!';
    return;
  } else {
    document.getElementById('schoolYear-error').innerHTML = '';
  }

  // img er
  if (studentImageInput.files.length === 0) {
    alert('Please select an image!');
    return;
  }
  

  let studentImageFile = studentImageInput.files[0];
  let reader = new FileReader();

  reader.onload = function(event) {
    let studentImageBase64 = event.target.result;
    
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    
    students.push({
      fullName: fullName,
      classValue: classValue,
      studentID: studentID,
      score: score,
      schoolYear: schoolYear,
      studentImage: studentImageBase64,
    });

    localStorage.setItem('students', JSON.stringify(students));

    renderListStudent();
  };

  reader.readAsDataURL(studentImageFile);
}

function renderListStudent() {
  let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
  
  if (students.length === 0) {
     document.getElementById('grid-students').innerHTML = '<tr><td colspan="8">No data available</td></tr>';
     return;
  }

  let tableContent = `
      <tr class="heading">
          <th>SL No</th>
          <th>Picture</th>
          <th>Full Name</th>
          <th>Class</th>
          <th>Student ID</th>
          <th>Score</th>
          <th>School Year</th>
          <th>Action</th>
      </tr>
     `;

  students.forEach((student, i) => {
    let studentId = i;
    i++;
    tableContent += `
      <tr>
          <td>${i}</td>
          <td><img src="${student.studentImage}" alt="Student Image" width="40" height="40"></td>
          <td>${student.fullName}</td>
          <td>${student.classValue}</td>
          <td>${student.studentID}</td>
          <td>${student.score}</td>
          <td>${student.schoolYear}</td>
          <td>
            <i class="bi bi-pencil-square" style="margin-right: 5px;"></i> 
            <i onclick='deleteStudent(${studentId})' class="bi bi-trash""></i>
          </td>
      </tr>
      `;
  });

  document.getElementById('grid-students').innerHTML = tableContent;
}

function deleteStudent(id) {
  let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
  students.splice(id, 1);
  localStorage.setItem('students', JSON.stringify(students));
  renderListStudent();
}
