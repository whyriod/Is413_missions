////document.getElementById("grade_button").addEventListener("click", function () {
////    let assignment = Number(document.getElementById("assignment").value) * 0.55;
////    let group_project = Number(document.getElementById("group_project").value) * 0.05;
////    let quiz = Number(document.getElementById("quiz").value) * 0.10;
////    let exam = Number(document.getElementById("exam").value) * 0.20;
////    let intex = Number(document.getElementById("intex").value) * 0.10;

////    let output = assignment + group_project + quiz + exam + intex
////    document.getElementById("grade_output").innerHTML = "Grade: "
////})


$("#grade_button").click(function () {
    let assignment = Number($("#assignment").val()) * 0.55;
    let group_project = Number($("#group_project").val()) * 0.05;
    let quiz = Number($("#quiz").val()) * 0.10;
    let exam = Number($("#exam").val()) * 0.20;
    let intex = Number($("#intex").val()) * 0.10;

    let output = assignment + group_project + quiz + exam + intex
    document.getElementById("grade_output").innerHTML = "Grade: " + output
})
