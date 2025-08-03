console.log('connected to switch.js!')

const workTab = document.getElementById("tabWork");
const lifeTab = document.getElementById("tabLife");
const hobbyTab = document.getElementById("tabHobby");


/////////////////////////////////////////////
// tabによってmain_list変更
function changeList(){
    document.querySelectorAll(".head").forEach(btn => {
        btn.addEventListener("click",()=>{
            
            // tabとlist remove "active" 処理
            // tab 
            document.querySelectorAll(".head").forEach(tab => {
                tab.classList.remove("active");
            });
            // list
            document.querySelectorAll(".main_list .list").forEach(list => {
                list.classList.remove("active");
            });
            
 
            // tabとlistの add "active" 処理
            // tab 
            btn.classList.add("active");
            // list
            let targetClass = '';
            if (btn.id === "tabWork") targetClass = ".work-list";
            else if (btn.id === "tabLife") targetClass = ".life-list";
            else if (btn.id === "tabHobby") targetClass = ".hobby-list";

            const targetList = document.querySelector(targetClass);
            if (targetList) {
                targetList.classList.add("active");
            }

        });            
    });
}

changeList();


/* click時にactive
function tabClicked(){
    document.querySelectorAll(".head").forEach(div => {
        div.addEventListener("click",()=>{
            // active クラスを全ての head から除去, 今クリックされたタブに active を付与
            document.querySelectorAll(".head").forEach(head => head.classList.remove("active"));
            div.classList.add("active");
        });
    }); 
}
/////////////////////////////////////////////
// 初回にtab_timerを表示
document.addEventListener("DOMContentLoaded", () => {
    tabClicked();
    timerTab.click(); 
});

timerTab.addEventListener("click",() => {
    console.log("click the timeTab")
    loadPage("timer.html", "../JS/timer.js");
})

stopWatchTab.addEventListener("click",() => {
    console.log("click the stopwatchTab")
    loadPage("stopwatch.html", "../JS/stopwatch.js");
})



*/


    
