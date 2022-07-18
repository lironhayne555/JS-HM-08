var StudentsList=[];
var student={};
function AddStudent()
{
     var name=document.querySelector("#name").value;
     var sub=document.querySelector("#subj").value;;
     var grade=document.querySelector("#grade").value;
     var maker=document.querySelector("#maker").value;
     var year=document.querySelector("#year").value;
     var color=document.querySelector("#color").value;
     student.name= name;
     student.subject=sub;
     student.grade=grade;
     student.maker=maker;
     student.year=year;
     student.color=color;
     console.log(student);
     StudentsList.push(student);
     name= "";
     sub="";
     grade="";
     maker="";
     year="";
     color="";
     
}
function Render()
{
     for (let stud of StudentsList)
     {
          let rend=document.querySelector("#result");
          rend.innerHTML+='<div class="inner-stud bg-info">';
          rend.innerHTML+=`<h3>Student name is: ${stud.name}</h3>`;
          rend.innerHTML+=`<h1>Student is studing: ${stud.subject}</h1>`;
          rend.innerHTML+=`<div>Student grade is ${stud.grade}</div>`;
          rend.innerHTML+=`<div>The car of the student is ${stud.maker}</div>`;
          rend.innerHTML+=`<div>The car year is ${stud.year}</div>`;
          rend.innerHTML+=`<div>The color of the car is${stud.color}</div>`;
          rend.innerHTML+='</div>';
     }
}