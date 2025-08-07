console.log('connected to todo.js!');

const textInput = document.getElementById("add_task");

/////////////////////////////////////////////
function createTaskLists(text, targetList, subtasks = []){
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
    targetList.appendChild(li);

    // button setting
    delBtn.addEventListener("click", () => {
        li.remove();
        saveTaskToStorage();
        updateGroupBtn(); 
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
            document.querySelector('input[name="subtask"]');
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

            subInput.addEventListener("keydown", e =>{
                const subtext = subInput.value.trim();
                if(subtext == "" || e.key !== "Enter"){
                    return;
                }

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
                const subTaskLists = subTaskArea.querySelector(".subtask_lists");
                subTaskLists.appendChild(subTask);
                
                subInput.value="";
                updateGroupBtn(); 
                saveTaskToStorage();

                // button setting
                delBtn.addEventListener("click", () => {
                    subTask.remove();
                    saveTaskToStorage();
                    updateGroupBtn(); 
                });
            })
        }
    });

    if (subtasks.length > 0) {
        // subTaskArea が未定義なら作成
        if (!subTaskArea) {
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
        }

        // subtaskを描画
        const subTaskLists = subTaskArea.querySelector(".subtask_lists");

        subtasks.forEach(subtext => {
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

            subInput.value = "";
            updateGroupBtn();
            saveTaskToStorage();

            delBtn.addEventListener("click", () => {
                subTask.remove();
                saveTaskToStorage();
                updateGroupBtn(); 
            });
        });

        // 表示切替ボタン処理
        subTaskArea.classList.add("active");
        updateGroupBtn();
    }
}



// // localStorage
function saveTaskToStorage(){
    const data = {};
    document.querySelectorAll(".category").forEach(category => {
        const type = category.dataset.type;
        const taskEls = category.querySelectorAll(".task");
        const taskArray = [];

        taskEls.forEach(taskEl => {
            const title = taskEl.querySelector(".task_text").textContent;
            const subtasks = [];

            taskEl.querySelectorAll(".subtask_text").forEach(subEl => {
                subtasks.push(subEl.textContent);
            });

            taskArray.push({ title, subtasks });
        });
        data[type] = taskArray;
    });
    localStorage.setItem("tasks", JSON.stringify(data));
}

function loadTaskStorage(){
    const saveTasks = JSON.parse(localStorage.getItem("tasks")) || {};

    document.querySelectorAll(".category").forEach(category => {
        const type = category.dataset.type;
        const taskList = category.querySelector(".todo_lists");
        categoryTasks = saveTasks[type] || [];

        categoryTasks.forEach(task => {
            createTaskLists(task.title, taskList, task.subtasks);
        });
        
    });
}

// CurrentCategory
function getCurrentCategory (){
    const activeCategory = document.querySelector(".category.active");
    return activeCategory?.dataset.type || "work";
}
/////////////////////////////////////////////
window.addEventListener("DOMContentLoaded", () => {
    loadTaskStorage();
});

textInput.addEventListener("keydown", enter =>{
    const text = textInput.value.trim();
    if(text == "" || enter.key !== "Enter"){
        return;
    }

    const currentCategory = getCurrentCategory();
    const targetCategory = document.querySelector(`.category[data-type="${currentCategory}"]`);
    const targetList = targetCategory.querySelector(".todo_lists");

    createTaskLists(text, targetList);
    saveTaskToStorage(); 
    textInput.value="";  
});