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

$("#Grade_button").click(function () {

    // Testing stuff
    //if (!$("form").isValid()){
    //    return true;
    //}


    //Get Input, cast to number, and give weights
    let Assignment = Number($("#Assignment").val());
    let Group_project = Number($("#Group_project").val());
    let Quiz = Number($("#Quiz").val());
    let Exam = Number($("#Exam").val());
    let Intex = Number($("#Intex").val());

    data = {
        Assignment: Assignment,
        Group_project: Group_project,
        Quiz: Quiz,
        Exam: Exam,
        Intex: Intex,
    };

    $.ajax({
        url: '/Home/GradeForm',
        type: 'POST',
        data: data,
        dataType: "script",
        success: function (result) {
            //Convert to readable json
            result = JSON.parse(result);
            alert("Grade: " + result.letter_grade + "\n" + "Percentage: " + result.total_grade + "%");
            //Display to page: Dont do that.
            //document.getElementById("grade_output").innerHTML = "Grade: " + result.letter_grade + "<br/>Percentage: " + result.total_grade + "%";
        },
        error: function (err) {
            console.log(err);
        }
    });

    return true;
})
