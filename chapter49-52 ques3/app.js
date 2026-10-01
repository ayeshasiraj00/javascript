let students = [];
let editIndex = -1;


// Add Student
document.getElementById("studentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let rollNo = document.getElementById("rollNo").value;
    let className = document.getElementById("className").value;
    let age = document.getElementById("age").value;

    students.push({
        name: name,
        rollNo: rollNo,
        className: className,
        age: age
    });

    displayStudents();

    document.getElementById("studentForm").reset();
});


// Display Students
function displayStudents() {

    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach(function(student, index) {

        table.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td>${student.rollNo}</td>
                <td>${student.className}</td>
                <td>${student.age}</td>

                <td>
                    <button onclick="editStudent(${index})">
                        Edit
                    </button>

                    <button onclick="deleteStudent(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}


// Delete Student
function deleteStudent(index) {

    students.splice(index, 1);

    displayStudents();
}


// Edit Student
function editStudent(index) {

    editIndex = index;

    document.getElementById("editBox").style.display = "block";

    document.getElementById("editName").value =
        students[index].name;

    document.getElementById("editRollNo").value =
        students[index].rollNo;

    document.getElementById("editClass").value =
        students[index].className;

    document.getElementById("editAge").value =
        students[index].age;
}


// Update Student
function updateStudent() {

    students[editIndex].name =
        document.getElementById("editName").value;

    students[editIndex].rollNo =
        document.getElementById("editRollNo").value;

    students[editIndex].className =
        document.getElementById("editClass").value;

    students[editIndex].age =
        document.getElementById("editAge").value;

    displayStudents();

    document.getElementById("editBox").style.display = "none";
}