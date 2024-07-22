const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-containers");

function addTask(){
    if(inputBox.value ==''){
   alert("You must write something!")
    }
    else{
        let li=document.createElement("LI");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("SPAN");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName =="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data", list-containers.innerHTML);
}
function showTask(){
    listContainer.innerHTML =localStorage.getItem("data");
}
showTask();