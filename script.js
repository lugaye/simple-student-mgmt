const form = document.getElementById('studentForm');
const studentsList = document.getElementById('studentsList');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;
    const response = await fetch('/addStudent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, age, grade })
    });
    const message = await response.text();
    alert(message);
    if (response.ok) {
        getStudents();
        form.reset();
    }
});

async function getStudents() {
    studentsList.innerHTML = '';
    const response = await fetch('/students');
    const students = await response.json();
    students.forEach(student => {
        const studentItem = document.createElement('div');
        studentItem.innerHTML = `
            <p>Name: ${student.name}</p>
            <p>Age: ${student.age}</p>
            <p>Grade: ${student.grade}</p>
            <button onclick="editStudent(${student.id})">Edit</button>
            <button onclick="deleteStudent(${student.id})">Delete</button>
        `;
        studentsList.appendChild(studentItem);
    });
}

async function editStudent(id) {
    // Implement edit functionality
}

async function deleteStudent(id) {
    await fetch(`/deleteStudent/${id}`, {
        method: 'DELETE'
    });
    getStudents();
}

getStudents();
