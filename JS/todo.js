console.log('connected to todo.js!');

const textInput = document.getElementById("add_task");
const todoLists = document.getElementById("todo_lists");

/////////////////////////////////////////////
function createTaskLists(text){
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

    li.appendChild(taskArea);
    taskArea.appendChild(taskGroup);
    taskArea.appendChild(subTaskGroup);
    taskGroup.appendChild(delBtn);
    taskGroup.appendChild(taskText);
    subTaskGroup.appendChild(groupBtn);
    subTaskGroup.appendChild(toggleBtn); 
    todoLists.appendChild(li);

    // button setting
    delBtn.addEventListener("click", () => {
        li.remove();
        saveTaskToStorage();
    });

    let subTaskArea = null;
    let subInput = null;

    function updateGroupBtn(){
        if (subTaskArea && subTaskArea.classList.contains("active")) {
            const hasSubTasks = subTaskArea.querySelector(".subtask_text");
            groupBtn.textContent = hasSubTasks ? "▲" : "+";
        } else if (subTaskArea) {
            const hasSubTasks = subTaskArea.querySelector(".subtask_text");
            groupBtn.textContent = hasSubTasks ? "▼" : "+";
        } else {
            groupBtn.textContent = "+";
        }
    }
    
    groupBtn.addEventListener("click",()=>{
        if(subTaskArea){
            if (subTaskArea.classList.contains("active")) {
                subTaskArea.classList.remove("active");
            } else {
                subTaskArea.classList.add("active");
                subInput.focus();
            }
            updateGroupBtn(); 
        } else {
            subTaskArea = document.createElement("div");
            subTaskArea.classList.add("subtask_area");

            const addSubTask = document.createElement("div");
            addSubTask.classList.add("add_subtask");

            subInput = document.createElement("input");
            subInput.type = "text";
            subInput.placeholder = "add your subtask and push the enter";
            subInput.classList.add("input_subtask"); 

            const subTaskLists = document.createElement("ul");
             subTaskLists.classList.add("subtask_lists");
            
            subTaskArea.appendChild(addSubTask);
            subTaskArea.appendChild(subTaskLists);
            addSubTask.appendChild(subInput); 
            
            
            li.appendChild(subTaskArea);

            subTaskArea.classList.add("active");
            subInput.focus();
            updateGroupBtn();
            saveTaskToStorage()

            subInput.addEventListener("keydown", e =>{
                const subtext = subInput.value.trim();
                if(subtext == "" || e.key !== "Enter"){
                    return
                }
                console.log(subInput.value);

                // create subtask
                const subTask = document.createElement("li");
                subTask.classList.add("subtask");

                const delBtn = document.createElement("button");
                delBtn.classList.add("del");
                delBtn.textContent = "✔︎";

                const subTaskText = document.createElement("span");
                subTaskText.classList.add("subtask_text");
                subTaskText.textContent = subtext;

                subTask.appendChild(delBtn);
                subTask.appendChild(subTaskText);
                subTaskLists.appendChild(subTask);
                
                saveTaskToStorage()
                subInput.value="";
                updateGroupBtn(); 

                // button setting
                delBtn.addEventListener("click", () => {
                    subTask.remove();
                    saveTaskToStorage();
                    updateGroupBtn(); 
                });
            })
        }
    });
    return li;
}

// localStorage
function saveTaskToStorage(){
    const todos = [];
    document.querySelectorAll(".task").forEach(task => {
        const taskText = task.querySelector(".task_text").textContent;
        const subTaskTexts = [];

        task.querySelectorAll(".subtask_text").forEach(subtask => {
            subTaskTexts.push(subtask.textContent);
        });

        todos.push({
            text: taskText,
            subtasks: subTaskTexts
        });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function saveSubtaskToStorage(){
    const todos = [];
    document.querySelectorAll(".subtask_text").forEach(subtask => {
        todos.push(subtask.textContent);
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function showTask(){
    const savedTodos = JSON.parse(localStorage.getItem("todos"))|| [];
    console.log(savedTodos);
}

function loadTaskStorage() {
    const todos = JSON.parse(localStorage.getItem("todos"))|| [];
    todos.forEach(todo => {
        const li = createTaskLists(todo.text);

        // サブタスクを追加
        if (todo.subtasks && Array.isArray(todo.subtasks)) {
            todo.subtasks.forEach(sub =>{
                const event = new Event('click');
                li.querySelector(".group").dispatchEvent(event);

                const input = li.querySelector(".input_subtask");
                input.value = sub;

                const enterEvent = new KeyboardEvent("keydown", { key: "Enter" });
                input.dispatchEvent(enterEvent);
            });
        }
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
    saveTaskToStorage()
    textInput.value="";  
});