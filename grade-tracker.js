const students = [
    { name: "Alice", grades: [90, 93, 92] },
    { name: "Bob", grades: [80, 85, 90] },
    { name: "Charlie", grades: [75, 76, 76] },
    { name: "David", grades: [60, 65, 70] }
];

const calculateAverage = (grades) => 
    grades.reduce((total, grade) => total + grade, 0) / grades.length;

const getStudentAverage = (studentName) => {
    const student = students.find(({ name }) => name === studentName);
    return student ? calculateAverage(student.grades) : "Student not found";
};

const getTopStudents = () => 
    students
        .filter(({ grades }) => calculateAverage(grades) > 75)
        .map(({ name }) => name);

console.log(getStudentAverage("Alice").toFixed(2));
console.log(getStudentAverage("Charlie").toFixed(2));
getTopStudents().forEach(name => console.log(name));