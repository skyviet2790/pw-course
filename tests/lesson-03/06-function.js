// Function multiply

function multiply(a, b) {
    return (a * b);
}

multiply(10, 15)

// Function findMin

function findMin(a, b, c) {
    if (a < b && a < c) {
        return a;
    }
    if (b < a && b < c) {
        return b;
    }
    return c;
}
console.log(findMin(10, 5, 29))

// Function getTopStudent

function getTopStudent(students, threshold) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            console.log("Học sinh vượt ngưỡng", students[i].name)
        }
    }
}

let studentList = [
    { name: "Vũ", score: 50 },
    { name: "An", score: 70 }
];

getTopStudent(studentList, 60)

//Function calculateInterest

function calculateInterest(principal, rate, years) {
    let total = (principal + principal * rate * years) / 100;
    return total;
}

console.log("Kết quả tổng số tiền:", calculateInterest(2000000, 0.08, 10));
