# ⚪︎ToDo List 機能
<br>


## ⚪︎アプリケーション概要
リスト機能を実装いたしました。
<br>


## ⚪︎開発のきっかけ
JavaScriptの理解を深めるため、個人的な実践練習として作成いたしました。<br>
制作にあたって、ToDoリストについて自分なりに考えたところ、<br>
私たちは会社や日常生活等場面を問わず、何かしらのタスクをこなしており、タスクの大きさは大小様々だと感じました。<br>
例えば、以下のイメージです。<br>
　　タスク　（サブタスク）<br>
　・買い物　（にんじん、豚肉、牛乳...）<br>
　・Aプロジェクト　（会議、資料作成...）<br>
　・Bプロジェクト　（プレゼン準備、プレゼン練習...）<br>

上記のイメージのように、大きいタスクを一覧にして一目で見られるようにするのはもちろんのこと、<br>
それに加えて、タスク自体をさらにサブタスクに細分化し、見やすくすれば、より使いやすいのではないかと考えました。<br>
そこで、タスクにサブタスクを追加し、トグルリストで視覚的にも分かりやすい、機能の実装に至りました。<br>
詳しい内容は、以下に記させていただきます。よろしければご覧ください。<br>


## ⚪︎詳細
### ⚪︎機能一覧
<table width="100%" cellspacing="10">
  <tr>
    <td width="50%" align="center"><b>カテゴリー画面</b></td>
    <td width="50%" align="center"><b>カテゴリー画面動作紹介</b></td>
  </tr>
  <tr>
    <td width="50%"><img src="https://github.com/user-attachments/assets/2995641c-05cb-44d8-9a24-c3cd36a04c71" width="100%"></td>
    <td width="50%">
      <a href="https://gyazo.com/f98a7cd0ccd5e1ff19d9cd66c0cc813e">
        <img src="https://i.gyazo.com/f98a7cd0ccd5e1ff19d9cd66c0cc813e.gif" alt="Image from Gyazo" width="100%"/>
      </a>
    </td>
  </tr>
  <tr>
    <td width="50%">
      「WORK」「LIFE」「HOBBY」の3種類のカテゴリーを作成いたしました。これにより、各カテゴリーに沿ったタスクを管理できます。<br>
      カテゴリーボタンは、現在選択しているカテゴリーが分かりやすいように、クリック後の色を工夫しております。</td>
    <td width="50%"></td>
  </tr>
</table>

<table width="100%" cellspacing="10">
  <tr>
    <td width="50%" align="center"><b>タスク登録</b></td>
    <td width="50%" align="center"><b>サブタスク登録</b></td>
  </tr>
  <tr>
    <td width="50%"><img src="https://github.com/user-attachments/assets/80ede405-b4bb-44d3-bf8d-09442f231431" width="100%"></td>
    <td width="50%"><img src="https://github.com/user-attachments/assets/59e699c0-9326-41cf-b251-0d503ea322b9"  width="100%"></td>
  </tr>
  <tr>
    <td width="50%">
      上部の入力欄よりタスクを入力し、Enterキーで登録が行える仕様になっております。<br>
      また、タスクが完了したら、「✔︎」ボタンにてタスクを削除できます。<br>
      「＋」ボタンをクリックすると、サブタスクの登録が行えます。
    </td>
    <td width="50%">
      「＋」（または「▼」）ボタンをクリックすると、サブタスク入力欄が下部に表示され、サブタスクの登録が行えます。<br>
      また、タスクが完了したら、「✔︎」ボタンにてタスクを削除できます。<br>
      「▲」ボタンをクリックすると、サブタスクリストが折り畳まれ、視覚的にタスクの整理が可能です。
    </td>
  </tr>
</table>

<table width="100%" cellspacing="10">
  <tr>
    <td width="50%" align="center"><b>タスク動作紹介</b></td>
    <td width="50%" align="center"><b>サブタスク動作紹介</b></td>
  </tr>
  <tr>
    <td width="50%">
      <a href="https://gyazo.com/ae5a42e36aa95b5870ff347b0ea66fa6">
        <img src="https://i.gyazo.com/ae5a42e36aa95b5870ff347b0ea66fa6.gif" alt="Image from Gyazo" width="100%"/>
      </a>
    </td>
    <td width="50%">
      <a href="https://gyazo.com/09d5eb9bb23f87944045fc885ba2e81f">
        <img src="https://i.gyazo.com/09d5eb9bb23f87944045fc885ba2e81f.gif" alt="Image from Gyazo" width="100%"/>
      </a>
    </td>
  </tr>
  <tr>
    <td width="50%"></td>
    <td width="50%"></td>
  </tr>
</table>
<br>


### ⚪︎工夫した点
<details>
<summary>１. ユーザビリティとデザインの工夫</summary>
- クリック動作や、トグルリスト表示等、タスクの並び替え等、ユーザーがどのボタンを押すべきか視覚的、尚且つ直感的にわかるように工夫いたしました。<br>
- 特に、トグルリストボタンは、サブタスクがある場合は「▼」と表示され、ない場合は「+」と表示される仕様になっており、一目でサブタスクがあるのかわかるようになっています。
</details>

<details>
<summary>２. Enterキー入力</summary>
- 入力欄に記入後、Enterキーにてタスクの登録ができるように工夫しました。これにより、素早くタスクの登録が可能です。<br>
- 入力欄は、日本語入力の際に候補を決定するEnterキー以外のEnterキーを押された場合のみ、登録するようにしております。
</details>

<details>
<summary>3. タスクとサブタスク</summary>
- タスクを登録後、必要に応じてサブタスクを登録できるよう工夫いたしました。<br>
</details>
<br>

## ⚪︎Making of this app 
自身の学習メモとして見返せるように、制作時に気になったことをこちらに残しております。</summary>
<details>
  <summary>非同期処理による、画面の入れ替え</summary>
  - 「Work」「Life」「Hobby」タブをそれぞれクリックすると、タブに対応したビューを<div class="main_list">箇所に表示させる。<br>
      
```html
　　// index.html
   <div class="contents">
        <div class="header">
            <button class="head tab_work active" id="tabWork" data-target="work-list">Work</button>
            <button class="head tab_life" id="tabLife" data-target="life-list">Life</button>
            <button class="head tab_hobby" id="tabHobby" data-target="hobby-list">Hobby</button>
        </div>

        <div class="main">
          <div class="add_list">
            <input type="text" placeholder="add your task and push the enter" id="add_task">
          </div>

          <div class="main_list"></div>
        </div>
  </div>
```
<br>

```javascript
   //switch.js
   document.querySelectorAll(".head").forEach(btn => {　　　　　　　// ".head" クラスを持つ全ての要素を取得し、それぞれbtnと定義し、{}内の処理を行う。
      btn.addEventListener("click",()=>{　　            　　　　　　// btnがクリックされた時のイベントを登録。
          document.querySelectorAll(".head").forEach(tab => {    // ".head" クラスを持つ全ての要素を取得し、それぞれtabと定義し、{}内の処理を行う。
              tab.classList.remove("active");                    // tabのクラス名から"active"を削除。
          });
          // list
          document.querySelectorAll(".main_list .category").forEach(list => {    // ".main_list"の".category"クラスを持つ全ての要素を取得し、それぞれlistと定義し、{}内の処理を行う。
              list.classList.remove("active");　　            　　　　　        　 // listのクラス名から"active"を削除。
          });
          
          btn.classList.add("active");　　                   　　　　　        　  // btnのクラス名に"active"を追加。
          
          const targetList = document.querySelector(`.${btn.dataset.target}`);　// data-targetの値をクラス名とした要素を取得
          if (targetList) {                                                    // btn(クラス".head"とつく要素)クリック時に、
              targetList.classList.add("active");                              // targetListがあれば、クラス名にactiveを追加する。
          }
      });            
  　});
```
  <table width="80%" cellspacing="10">
    <tr>
      <td width="20%" align="left"><b>data-target</b></td>
      <td width="80%" align="left">
         HTML要素に自由にデータを持たせるための属性のひとつ。<br>
        「どの要素を対象にするか」を紐づけるための目印として使われている。<br>
         htmlで「data-target(←属性名)=""」と記載し、呼び出すときはJSに「要素.dataset.属性名」で呼び出す。<br>
         例）data-target="work-list" → 要素.dataset.target
      </td>
    </tr>
  </table>
</details>

<details>
  <summary>keydownによるEnterキー入力と日本語変換モード対応</summary>
  - 入力欄に入力しEnterキーを押すとタスクの入力が完了する。それにあたって、決定キーを「Enter」に設定した。<br>
  　しかし、Enterキーには、日本語入力の漢字確定を行うEnterと、今回設定する登録のためのEnterの2種類を分ける必要がある。<br>
      
```javascript
　　// todo.js
   function inputEnterSetting(inputElement, callback){          // どの入力要素にイベントを付けるか (inputElement) / 実際にキーが押されたときに動かす処理 (callback)
      let isComposing = false;　　　　　　　　　　　　　　　　　　　　 // 初めは、isComposing = false と定義する。
  
      inputElement.addEventListener("compositionstart", () => { // ユーザーが変換モードを開始すると
          isComposing = true;　　　　　　　　　　　　　　　　　　　　　// isComposing = ture にする
      });
  
      inputElement.addEventListener("compositionend", () => { // 変換モードが終了して確定された瞬間
          isComposing = false;　　　　　　　　　　　　　　　　　　　// isComposing = false にする
      });
  
      inputElement.addEventListener("keydown", (e) => {
          if (isComposing) return; 　　　　　　　　　　// isComposing = ture の場合、処理を実行しない。
          if (e.key === "Enter") {                 // （isComposing = false で）Enterキーを押された場合、
              callback(e);          　　　　        // (e)の処理を実行
          }
      });
    } 
```
<br>
  <table width="80%" cellspacing="10">
    <tr>
      <td width="20%" align="left"><b>keydown</b></td>
      <td width="80%" align="left">
        キーを押したときに発火するイベントを設定。<br>
          イベントリスナーで渡される e（イベントオブジェクト）の プロパティ を使って、押されたキーを判定する。<br>
          ・e.key ...キーの意味(文字や機能)を表す。<br>
          ・e.code ...キーの物理的な位置を表す。<br>
      </td>
    </tr>
    <tr>
      <td width="20%" align="left"><b>compositionstart</b></td>
      <td width="80%" align="left">
        ユーザーが変換モードを開始した瞬間に発火するイベントを設定。<br>
      </td>
    </tr>
    <tr>
      <td width="20%" align="left"><b>compositionend</b></td>
      <td width="80%" align="left">
        ユーザーが変換モードを終了し、入力が確定した瞬間に発火するイベントを設定。<br>
      </td>
    </tr>
  </table>
</details>

<details>
  <summary>サブタスク構造</summary>
  - 「＋」ボタンをクリックすると、入力欄とサブタスクエリアが表示される。以下、構造を自分用に残しております。<br>

  <table width="80%" cellspacing="10">
    <tr>
      <td width="50%" align="left"><img src="https://github.com/user-attachments/assets/5ee68d32-2b4d-440d-a400-7df73ffd8c71" width="100%"/></td>
      <td width="50%" align="left"><img src="https://github.com/user-attachments/assets/89c58f49-d12a-4e3d-84b6-0b30f3921ef4" width="100%"/></td>
    </tr>
  </table>

  ```html
  ユーザー「＋」クリック
           ↓
    [GroupBtnSetting] のイベント発火
           ↓
    subTaskArea 存在？
       ├─ いいえ → createSubtaskArea() で生成
       │         ↓
       │     subInput に Enterイベント設定
       │         ↓
       └─ はい（既に存在）
           ↓
    subTaskArea の表示切替（.active）
           ↓
    ユーザーが subInput に入力 → Enter押下
           ↓
    入力値が空？ ── はい → 無視
           │
           └─ いいえ
               ↓
        createSubtaskLists() 実行
               ↓
        subtask(li) を生成して subTaskListUl に追加
               ↓
        DelBtn設定（削除可能にする）
               ↓
        saveTaskToStorage() で保存
               ↓
        画面に表示＋localStorage更新  
```
</details>

<details>
  <summary>タスクの保存（localStorage）</summary>
  - カテゴリーごとにタスク・サブタスクの保存を行う。<br>
  
```javascript
// todo.js
function saveTaskToStorage(){
    const data = {};        　　　　                 // dataという空の箱を作成。
    document.querySelectorAll(".category").forEach(category => {
        const type = category.dataset.type;
        const taskEls = category.querySelectorAll(".task");
        const taskArray = [];　　 　                // taskArrayという空の箱を作成。

        taskEls.forEach(taskEl => {
            const title = taskEl.querySelector(".task_text").textContent;
            const subtasks = [];  　 　            // subtasksという空の箱を作成。

            taskEl.querySelectorAll(".subtask_text").forEach(subEl => {
                subtasks.push(subEl.textContent);  // subtasksという箱に"subtask_text"を格納（⭐︎）
            });

            const subTaskArea = taskEl.querySelector(".subtask_area");
            const isOpen = subTaskArea?.classList.contains("active") || false;

            taskArray.push({ title, subtasks, isOpen });     // taskArrayという箱に"title", "subtasks"（⭐︎）, "isOpen"を格納
        });
        data[type] = taskArray;　　　// dataという箱に[カテゴリー(htmlのdata-type=""部分)]ごとにtaskArray(title,subtasks,isOpen)を格納。
    });
    localStorage.setItem("tasks", JSON.stringify(data));　　　// JSON.stringify()でdataを文字列に変換し、tasksという名で保存している。
}

// localStorage イメージ
//  └── "tasks" : "{ "work":[...], "life":[...] }" ← dataを文字列化したもの
  
```

  <table width="80%" cellspacing="10">
    <tr>
      <td width="20%" align="left">localStrage</td>
      <td width="80%" align="left">
        Webブラウザにデータを保存するための仕組みで、ページを閉じたりリロードしてもデータが保持される。<br>
        データは、キーと値を文字列として保存できる。<br>
        （配列やオブジェクトを保存するにはそのまま保存できないため、「JSON.stringify()」 で文字列に変換して保存する）<br>
        削除はユーザーでも行える。(開発ツールから削除可能)<br>
      </td>
    </tr>
     <tr>
      <td width="20%" align="left">.push</td>
      <td width="80%" align="left">
        配列の末尾に追加するメソッド。<br>
      </td>
    </tr>
  </table>
  
```javascript
　// localStrageの使い方
　// 保存
　localStorage.setItem("key", "value");

　// 取得
　localStorage.getItem("key"); 

　// 削除
　localStorage.removeItem("key");

　// オブジェクトを文字列にして保存（JSON.stringify）
　const obj = { name: "Taro", age: 20 };
　localStorage.setItem("user", JSON.stringify(obj)); // userデータを保存

　// 文字列をオブジェクトにして保存（JSON.parse）
 const restored = JSON.parse(localStorage.getItem("user")); // userデータを復元
```
</details>

<details>
  <summary></summary>
  - カテゴリーごとにタスク・サブタスクの保存を行う。<br>
  
```javascript
// todo.js
function saveTaskToStorage(){
    const data = {};        　　　　                 // dataという空の箱を作成。
    document.querySelectorAll(".category").forEach(category => {
        const type = category.dataset.type;
        const taskEls = category.querySelectorAll(".task");
        const taskArray = [];　　 　                // taskArrayという空の箱を作成。

        taskEls.forEach(taskEl => {
            const title = taskEl.querySelector(".task_text").textContent;
            const subtasks = [];  　 　            // subtasksという空の箱を作成。

            taskEl.querySelectorAll(".subtask_text").forEach(subEl => {
                subtasks.push(subEl.textContent);  // subtasksという箱に"subtask_text"を格納（⭐︎）
            });

            const subTaskArea = taskEl.querySelector(".subtask_area");
            const isOpen = subTaskArea?.classList.contains("active") || false;

            taskArray.push({ title, subtasks, isOpen });     // taskArrayという箱に"title", "subtasks"（⭐︎）, "isOpen"を格納
        });
        data[type] = taskArray;　　　// dataという箱に[カテゴリー(htmlのdata-type=""部分)]ごとにtaskArray(title,subtasks,isOpen)を格納。
    });
    localStorage.setItem("tasks", JSON.stringify(data));　　　// JSON.stringify()でdataを文字列に変換し、tasksという名で保存している。
}

// localStorage イメージ
//  └── "tasks" : "{ "work":[...], "life":[...] }" ← dataを文字列化したもの
  
```

  <table width="80%" cellspacing="10">
    <tr>
      <td width="20%" align="left">localStrage</td>
      <td width="80%" align="left">
        Webブラウザにデータを保存するための仕組みで、ページを閉じたりリロードしてもデータが保持される。<br>
        データは、キーと値を文字列として保存できる。<br>
        （配列やオブジェクトを保存するにはそのまま保存できないため、「JSON.stringify()」 で文字列に変換して保存する）<br>
        削除はユーザーでも行える。(開発ツールから削除可能)<br>
      </td>
    </tr>
     <tr>
      <td width="20%" align="left">.push</td>
      <td width="80%" align="left">
        配列の末尾に追加するメソッド。<br>
      </td>
    </tr>
  </table>
  
```javascript
　// localStrageの使い方
　// 保存
　localStorage.setItem("key", "value");

　// 取得
　localStorage.getItem("key"); 

　// 削除
　localStorage.removeItem("key");

　// オブジェクトを文字列にして保存（JSON.stringify）
　const obj = { name: "Taro", age: 20 };
　localStorage.setItem("user", JSON.stringify(obj)); // userデータを保存

　// 文字列をオブジェクトにして保存（JSON.parse）
 const restored = JSON.parse(localStorage.getItem("user")); // userデータを復元
```
</details>
