console.log('connected to order.js!');

document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector(".todo_lists");
    const tasks = document.querySelectorAll(".task");

    tasks.forEach(task => {
        task.addEventListener("dragstart", e => {
            e.target.classList.add("drag");
        });

        task.addEventListener("dragend", e => {
            e.target.classList.remove("drag");
        });        
    })

    list.addEventListener("dragover", e => {
        e.preventDefault();
        // drag対象物
        const dragTask = document.querySelector(".drag");
        // drag対象物以外（ドロップされる候補）※ nodeListだとfindメソッドが使用不可のためスプレッド構文で配列にする。
        let anotherList = [...list.document.querySelectorAll(".task:not(.drag)")];
        // drag対象物以外（ドロップされるもの）
        let dropped = anotherList.find((another)=>{
            // dragした際に対象物が乗った候補
            return e.clientY <= another.offsetTop + another.offsetHeight / 2;
        });
        list.insertBefore(dragTask, dropped);
    })
})

