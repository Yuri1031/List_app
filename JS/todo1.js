console.log('connected to todo.js!');

const textInput = document.getElementById("add_task");
const todoLists = document.getElementById("todo_lists");

/////////////////////////////////////////////
function createTaskLists(text, subtext = ""){
    // task area
    const li = document.createElement("li");
    li.classList.add("task");

    const taskArea = document.createElement("div");
    taskArea.classList.add("task_area");

    const taskGroup = document.createElement("div");
    taskGroup.classList.add("task_group");

    const delBtn = document.createElement("button");
    delBtn.classList.add("del");
    delBtn.textContent = "✔︎";

    const taskText = document.createElement("span");
    taskText.classList.add("task_text");
    taskText.textContent = text;

    const subTaskGroup = document.createElement("div");
    subTaskGroup.classList.add("sub_task_group");

    const groupBtn = document.createElement("button");
    groupBtn.classList.add("group");
    groupBtn.textContent = "+";

    const toggleBtn  = document.createElement("button");
    toggleBtn.classList.add("toggle_btn");
    toggleBtn.textContent = "▼";
    
    // task area 子要素
    taskArea.appendChild(taskGroup);
    taskArea.appendChild(subTaskGroup);
    taskGroup.appendChild(delBtn);
    taskGroup.appendChild(taskText);
    subTaskGroup.appendChild(groupBtn);
    subTaskGroup.appendChild(toggleBtn);   
    li.appendChild(taskArea);    

    //todoLists.appendChild(li);// subtaskにliを渡す。 
    
    createSubTaskLists(li);
    //const { subTaskArea, subInput, subTaskLists } = createSubTaskLists(li);
    
    let subTaskArea = null;
    let subInput = null;

    const openSubtask = () => {
        if (!subTaskArea) {
            const subtaskElements = createSubTaskLists(li);
            subTaskArea = subtaskElements.subTaskArea;
            subInput = subtaskElements.subInput;
        }
        subTaskArea.classList.add("active");
        subInput.focus();
    };
    
    // storageに保存
    saveTaskToStorage();

    // delete機能
    delBtn.addEventListener("click", () => {
        li.remove();
        saveTaskToStorage();
    });

    groupBtn.addEventListener("click", openSubtask);
    toggleBtn.addEventListener("click", openSubtask);

    // // toggleボタン(+,▼)表示切り替え
    // groupBtn.addEventListener("click", ()=>{
    //     subTaskArea.classList.add("active");
    //     subInput.focus();
    // });
    // toggleBtn.addEventListener("click",() => {
    //     subTaskArea.classList.add("active");
    //     subInput.focus();
    // });
    
    
}
function createSubTaskLists(li){
    // subtask area
    const subTaskArea = document.createElement("div");
    subTaskArea.classList.add("subtask_area");

    const addSubTask = document.createElement("div");
    addSubTask.classList.add("add_subtask");

    const subInput = document.createElement("input");
    subInput.type = "text";
    subInput.placeholder = "add your subtask and push the enter";
    subInput.id = "input_subtask";

    // subtask area 子要素
    subTaskArea.appendChild(addSubTask);
    subTaskArea.appendChild(subTaskLists);
    addSubTask.appendChild(subInput); 
    li.appendChild(subTaskArea);    

    if(subtext){
        const subTaskLists = document.createElement("ul");
        subTaskLists.classList.add("subtask_lists");

        const subTask = document.createElement("li");
        subTask.classList.add("subtask");

        const delBtn = document.createElement("button");
        delBtn.classList.add("del");
        delBtn.textContent = "✔︎";
        
        const subTaskText = document.createElement("span");
        subTaskText.classList.add("subtask_text");
        
        // 子要素
        subTask.appendChild(delBtn);
        subTask.appendChild(subTaskText);
        subTaskLists.appendChild(subTask);
    }

    return {
        subTaskArea,
        subInput,
        subTaskLists
    };
    
        
    
}

// localStorage
function saveTaskToStorage(){
    const todos = [];
    document.querySelectorAll(".task_text").forEach(task => {
        todos.push(task.textContent);
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function showTask(){
    const savedTodos = JSON.parse(localStorage.getItem("todos"))|| [];
    console.log(savedTodos);
}

function loadTaskStorage() {
    const todos = JSON.parse(localStorage.getItem("todos"))|| [];
    todos.forEach(todoText => {
        createTaskLists(todoText);
    });
}
window.addEventListener("DOMContentLoaded", () => {
    loadTaskStorage();
});

/////////////////////////////////////////////
textInput.addEventListener("keydown", enter =>{
    const text = textInput.value.trim();
    if(text == "" || enter.key !== "Enter"){
        return;
    }

    createTaskLists(text);
    textInput.value="";    
});

