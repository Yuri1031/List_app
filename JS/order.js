console.log('connected to order.js!');

document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelectorAll(".todo_lists");

    list.forEach(list => {
        list.addEventListener("dragstart", e => {
            if(e.target.classList.contains("task")){
                e.target.classList.add("dragging");
            }
        });

        list.addEventListener("dragend", e => {
            if(e.target.classList.contains("task")){
                e.target.classList.remove("dragging");
            }
        });

        list.addEventListener("dragover", e => {});
    })
})