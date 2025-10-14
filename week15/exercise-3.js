const getPassedStudents = (students) => {
    return students.filter(student => student.score >= 50);
}

let result1 = getPassedStudents([
    { name: "A", score: 80 },
    { name: "B", score: 45 },
    { name: "C", score: 60 }
 ]);
 console.log(result1); // ["A", "C"]// [{ name: "Eve", score: 60 }]