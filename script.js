var roll = prompt("Enter Your Roll Number:");
var name = prompt("Enter Your Name:");
var obtMarks = prompt("Enter Your Obtained Marks:");
var totalMarks = prompt("Enter Your Total Marks:");

obtMarks = Number(obtMarks);
totalMarks = Number(totalMarks);

var percentage = Math.floor((obtMarks * 100) / totalMarks);
var grade = "";

if (percentage >= 80) grade = "A+";
else if (percentage >= 70) grade = "A";
else if (percentage >= 60) grade = "B";
else if (percentage >= 50) grade = "C";
else grade = "Fail";

document.getElementById("resultBody").innerHTML = 
`
<tr>
    <td>${roll}</td>
    <td>${name}</td>
    <td>${obtMarks}</td>
    <td>${totalMarks}</td>
    <td>${percentage}%</td>
    <td>${grade}</td>
</tr>
`
;
