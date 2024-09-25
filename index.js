let write = document.getElementById("write");
let todoList=document.getElementById("todo-list");

// write.addEventListener("keyup", function(e){
//     if(e.key == "Enter"){
//         addTodo(this.value)

//         this.value=''
//     }
// })



// function addTodo(val){
//     let list=document.createElement("li");
//     list.innerHTML=`${val}`;
//     todoList.appendChild(list);
//     console.log(val)

//     list.addEventListener("click",function(){
//         this.classList.toggle('done')
//     })
// }


function addTask(){
    if(write.value == ''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML = write.value;
        todoList.appendChild(li);
         let span=document.createElement("span");
         span.innerHTML = "\u00d7";
         li.appendChild(span);
    }
    write.value ="";
    saveData();
}

todoList.addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName =="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);


function saveData(){
    localStorage.setItem("data", todoList.innerHTML)
}

function showTask(){
    todoList.innerHTML = localStorage.getItem("data");
}

showTask();


