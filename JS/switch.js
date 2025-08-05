console.log('connected to switch.js!');

const workTab = document.getElementById("tabWork");
const lifeTab = document.getElementById("tabLife");
const hobbyTab = document.getElementById("tabHobby");

/////////////////////////////////////////////

/////////////////////////////////////////////
// tabによってmain_list変更

document.querySelectorAll(".head").forEach(btn => {
    btn.addEventListener("click",()=>{
        const target = btn.dataset.target;
        // tabとlist remove "active" 処理
        // tab 
        document.querySelectorAll(".head").forEach(tab => {
            tab.classList.remove("active");
        });
        // list
        document.querySelectorAll(".main_list .category").forEach(list => {
            list.classList.remove("active");
        });
        

        // tabとlistの add "active" 処理
        // tab 
        btn.classList.add("active");
        // list
        

        const targetList = document.querySelector(`.${btn.dataset.target}`);
        if (targetList) {
            targetList.classList.add("active");
        }

    });            
});


    
