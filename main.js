var Student =[];

function submit(){
for (var j=1; j<=8; j++)
{
    var name=document.getElementById("name_of_the_student_"+j).value;
    console.log (name);
    Student.push(name);
}
var remove_comma=Student.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_comma;
document.getElementById ("submit_button").style.display="none";
document.getElementById ("sort_button").style.display="inline-block";
}
 function sorting (){
    Student.sort();
document.getElementById ("submit_button").style.display="inline-block";
document.getElementById ("sort_button").style.display="none"
}