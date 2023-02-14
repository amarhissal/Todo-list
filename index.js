let update=()=>{
    let title1=tit.value;
    let disc=dic.value;
    let toDo=[];
    let items=localStorage.getItem("items");
if(items==null){
  
toDo.push({title:title1,discription:disc});
localStorage.setItem("items",JSON.stringify(toDo));
let tbody=document.getElementById("tbody");
}
else{

console.log(items);
let oldTodo=JSON.parse(items)
console.log(oldTodo);
oldTodo.push({title:title1,discription:disc})
console.log("updated to do after push ",oldTodo);
localStorage.setItem("items",JSON.stringify(oldTodo));


}

}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
   let a= required();
    if(a){
  update();
  addElement();}

      
});
clear.addEventListener("click",(e)=>{
    e.preventDefault();
    localStorage.clear();
    location.reload();
   
})
let addElement=()=>{
let items=localStorage.getItem("items")
let oldTodo=JSON.parse(items)
let tbody=document.getElementById("tbody")
let str="";

oldTodo?.forEach((element,index) => {
    index=index+1

str+=`
<tr>
<th scope="row">${index}</th>
<td id="td1" class= "fs-5 text">${element.title}</td> 
<td id="td2">${element.discription}</td>
<td id="td3"><button type="delete" onclick="deleted(${index-1})" class="btn btn-primary">Delete</button></td>

</tr>
`
console.log(index,element)
});
 tbody.innerHTML=str;
}
 addElement();

function deleted(index){
    let items=localStorage.getItem("items")
    let oldTodo=JSON.parse(items)
  oldTodo.splice(index,1)
    console.log(oldTodo);
    localStorage.setItem("items",JSON.stringify(oldTodo))
    addElement();
 }

 function required()
 { console.log("form validation");
 let empt = tit.value;
 if (empt === "")
 {
 alert("Please input a Value");
 return false;
 }
 else 
 {
 return true; 
 }
 }