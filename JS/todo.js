console.log('connected to todo.js!');

const textInput = document.getElementById("add_task");

// ------------------------------
// function
// ------------------------------
function createTaskLists(text, targetList, subtasks = []){
  const li = document.createElement("li");
    li.classList.add("task");
    li.draggable = true; 

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

    DelBtn(delBtn, li);

    GroupBtnSetting(groupBtn, li, subtasks);

}

function createSubtaskArea (){
  const subTaskArea = document.createElement("div");
  subTaskArea.classList.add("subtask_area");

  const addSubTask = document.createElement("div");
  addSubTask.classList.add("add_subtask");

  const subInput = document.createElement("input");
  subInput.type = "text";
  subInput.placeholder = "add your subtask and push the enter";
  subInput.classList.add("input_subtask");

  const subTaskList = document.createElement("ul");
  subTaskList.classList.add("subtask_lists");

  addSubTask.appendChild(subInput);
  subTaskArea.appendChild(addSubTask);
  subTaskArea.appendChild(subTaskList);

  return subTaskArea;
}

function createSubtaskLists(subtext, subTaskListUl, updateGroupBtn){
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
  subTaskListUl.appendChild(subTask);

  DelBtn(delBtn, subTask, updateGroupBtn);
}


function DelBtn(delBtn, li, updateGroupBtn) {
  delBtn.addEventListener("click", () => {
    li.remove();
    saveTaskToStorage();
    if (typeof updateGroupBtn === "function") {
      updateGroupBtn();
    }
  });
}


function GroupBtnSetting(groupBtn, taskLi, subtasks) {
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
  };

  groupBtn.addEventListener("click", () => {
    if (!subTaskArea) {
      subTaskArea = createSubtaskArea();
      subInput = subTaskArea.querySelector("input");
      const subList = subTaskArea.querySelector("ul");
      taskLi.appendChild(subTaskArea);

      // 入力イベント設定
      inputEnterSetting(subInput, (e) => {
        const subtext = subInput.value.trim();
        if (subtext === "" || e.key !== "Enter") return;
        createSubtaskLists(subtext, subList, updateGroupBtn);
        subInput.value = "";
        updateGroupBtn();
        saveTaskToStorage();
      });

      // 保存されていたsubtaskを復元
      if (subtasks && subtasks.length > 0) {
        subtasks.forEach(sub => createSubtaskLists(sub, subList, updateGroupBtn));
      }
    }

    subTaskArea.classList.toggle("active");
    if (subInput) subInput.focus();
    updateGroupBtn();
  });
}


// localStorage
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

            const subTaskArea = taskEl.querySelector(".subtask_area");
            const isOpen = subTaskArea?.classList.contains("active") || false;

            taskArray.push({ title, subtasks, isOpen });
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

            const lastTask = taskList.lastElementChild;
            const groupBtn = lastTask.querySelector(".group");

            // サブタスクがある場合、エリアを事前作成
            if (task.subtasks.length > 0 || task.isOpen) {
                groupBtn.click(); // subTaskArea を生成
                if (!task.isOpen) {
                    lastTask.querySelector(".subtask_area").classList.remove("active");
                }
            }
        });
    });
}


// CurrentCategory
function getCurrentCategory (){
    const activeCategory = document.querySelector(".category.active");
    return activeCategory?.dataset.type || "work";
}


// Enter setting (日本語入力だとEnter keyが「送信」ではなく入力完了になってしまうから。)
function inputEnterSetting(inputElement, callback){
    let isComposing = false;

    inputElement.addEventListener("compositionstart", () => { //ユーザーが変換モードを開始した瞬間
        isComposing = true;
    });

    inputElement.addEventListener("compositionend", () => { //変換モードがが終了し、変換が確定された瞬間
        isComposing = false;
    });

    inputElement.addEventListener("keydown", (e) => {
        if (isComposing) return;
        if (e.key === "Enter") {
            callback(e);
        }
    });
}



// ------------------------------
// 
// ------------------------------
window.addEventListener("DOMContentLoaded", () => {
  loadTaskStorage();

  inputEnterSetting(textInput, () => {
    const text = textInput.value.trim();
    if (text === "") return;

    const currentCategory = getCurrentCategory();
    const targetCategory = document.querySelector(`.category[data-type="${currentCategory}"]`);
    const targetList = targetCategory.querySelector(".todo_lists");

    createTaskLists(text, targetList);
    saveTaskToStorage();
    textInput.value = "";
  });
});
