/*
document.getElementById("grade_button").addEventListener("click", function () {
    let assignment = Number(document.getElementById("assignment").value) * 0.55;
    let group_project = Number(document.getElementById("group_project").value) * 0.05;
    let quiz = Number(document.getElementById("quiz").value) * 0.10;
    let exam = Number(document.getElementById("exam").value) * 0.20;
    let intex = Number(document.getElementById("intex").value) * 0.10;
    let output = assignment + group_project + quiz + exam + intex
    document.getElementById("grade_output").innerHTML = "Grade: "
})
*/

$("#grade_button").click(function () {
    //Get Input, cast to number, and give weights
    let assignment = Number($("#assignment").val()) * 0.55;
    let group_project = Number($("#group_project").val()) * 0.05;
    let quiz = Number($("#quiz").val()) * 0.10;
    let exam = Number($("#exam").val()) * 0.20;
    let intex = Number($("#intex").val()) * 0.10;

    //Add them together
    let total_grade = assignment + group_project + quiz + exam + intex;
    let letter_grade;

    //Determine letter grade
    if (total_grade >= 94) {
        letter_grade = "A";
    }
    else if (total_grade >= 90) {
        letter_grade = "A-";
    }
    else if (total_grade >= 87) {
        letter_grade = "B+";
    }
    else if (total_grade >= 84) {
        letter_grade = "B";
    }
    else if (total_grade >= 80) {
        letter_grade = "B-";
    }
    else if (total_grade >= 77) {
        letter_grade = "C+";
    }
    else if (total_grade >= 74) {
        letter_grade = "C";
    }
    else if (total_grade >= 70) {
        letter_grade = "C-";
    }
    else if (total_grade >= 67) {
        letter_grade = "D+";
    }
    else if (total_grade >= 64) {
        letter_grade = "D";
    }
    else if (total_grade >= 60) {
        letter_grade = "D-";
    }
    else {
        letter_grade = "E"
    }

    //Display Grade to p tag.
    document.getElementById("grade_output").innerHTML = "Grade: " + letter_grade + "<br/>Percentage: " + total_grade + "%"
})
