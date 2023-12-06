var inputes = document.querySelector("#input");
var taskArea = document.querySelector("#list");

function clickbtn(){
    if(inputes.value === ""){
        alert("enter the task ")
    }
    else{
       var li = document.createElement("li");
       li.innerHTML = inputes.value;
       taskArea.appendChild(li)
       var span = document.createElement("span");
       span.innerHTML = "\u00d7"
       li.appendChild(span);
    
    }
    inputes.value = "";
   
}
taskArea.addEventListener ("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        }
    

})