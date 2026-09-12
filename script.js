const taskInput=document.getElementById("taskInput")

const taskList=document.getElementById("taskList")

function addTask(){

    if(taskInput.value===''){
        alert("you must write something!")
    }else{
        let li=document.createElement("li");
        li.innerHTML=taskInput.value;

        taskList.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    taskInput.value=""; //input ko clear krne ke liye
    saveData();
}

taskList.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",taskList.innerHTML); //refress kr ne ke baad data remove horha tha usko fix kra
}

function showTask(){
    taskList.innerHTML=localStorage.getItem("data"); //element ko show krenge kon kon se hai
}

showTask(); //call the function