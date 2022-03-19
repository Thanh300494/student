function saveStudent(){
   let name= document.getElementById('name').value
   let gender= document.getElementById('gender').value
   let city= document.getElementById('city').value
   let yearBirth= document.getElementById('yearBirth').value
   let school =document.getElementById('school').value
   if(name && gender &&city&&yearBirth&&school){
     let listStudent = localStorage.getItem("listStudent")?JSON.parse(localStorage.getItem("listStudent")):[]
         listStudent.push({
             name:name,
             gender:gender,
             city:city,
             yearBirth:yearBirth,
             school:school
     })
     localStorage.setItem("listStudent",JSON.stringify(listStudent))
     renderStudents();
     resetStudent();
    } 
    else{
        alert("Vui lòng nhập thông tin đầy đủ ! ")
    }
}
function renderStudents(){
    let listStudent = localStorage.getItem("listStudent")?JSON.parse(localStorage.getItem("listStudent")):[]
    let Student=`
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Gender</th>
      <th>City</th>
      <th>Year of birth</th>
      <th> School</th>
      <th>choose</th>
   </tr>`
  listStudent.map((value,index)=>{
      Student +=`
      <tr>
        <td>${index+1}</td>
        <td>${value.name}</td>
        <td>${value.gender}</td>
        <td>${value.city}</td>
        <td>${value.yearBirth}</td>
        <td>${value.school}</td>
        <td>
           <button onclick="editStudent(${index})">Edit</button>
           <button onclick="deleteStudent(${index})">Delete</button>
        </td>
     </tr>`
  })
  document.getElementById('table').innerHTML=Student
}
function editStudent(index){
    let listStudent = localStorage.getItem("listStudent")?JSON.parse(localStorage.getItem("listStudent")):[]
    document.getElementById('name').value= listStudent[index].name
    document.getElementById('city').value= listStudent[index].city
    document.getElementById('gender').value= listStudent[index].gender
    document.getElementById('school').value= listStudent[index].school
    document.getElementById('yearBirth').value= listStudent[index].yearBirth
    document.getElementById('save').style.display='none'
    document.getElementById('edit').style.display='block'
    document.getElementById('index').value=index
}
function changeStudent(){
    let listStudent = localStorage.getItem("listStudent")?JSON.parse(localStorage.getItem("listStudent")):[]
    let studentname= document.getElementById('name').value
    let studentCity= document.getElementById('city').value
    let studentGender= document.getElementById('gender').value
    let studentschool= document.getElementById('school').value
    let studentYearBirth= document.getElementById('yearBirth').value
    let index= document.getElementById('index').value
    listStudent[index]={
       city:studentCity,
       gender:studentCity,
       name:studentname,
       school:studentschool,
       yearBirth:studentYearBirth,
       gender:studentGender
    }
    localStorage.setItem("listStudent",JSON.stringify(listStudent))
    document.getElementById('save').style.display='block'
    document.getElementById('edit').style.display='none'
    renderStudents()
    resetStudent()
}
function resetStudent(){
    document.getElementById('name').value=""
    document.getElementById('city').value=""
    document.getElementById('gender').value=""
    document.getElementById('school').value=""
    document.getElementById('yearBirth').value=""
}
function deleteStudent(index){
    let listStudent=localStorage.getItem("listStudent")? JSON.parse(localStorage.getItem("listStudent")):[]
    if(confirm("Are you sure delete ?")){
        listStudent.splice(index,1)
    }
    localStorage.setItem("listStudent",JSON.stringify(listStudent))
    renderStudents()
}