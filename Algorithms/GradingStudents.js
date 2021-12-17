// https://www.hackerrank.com/challenges/grading/problem
// Non Optimized version


function gradingStudents(grades) {
    let newGrades = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
            newGrades.push(grades[i]);
        } else {
            let nextMultipleOfFive = Math.ceil(grades[i] / 5) * 5;
            if (nextMultipleOfFive - grades[i] < 3) {
                newGrades.push(nextMultipleOfFive);
            } else {
                newGrades.push(grades[i]);
            }
        }
    }
    return newGrades;
}


