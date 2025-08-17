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
- クリック動作や、トグルリスト表示等、ユーザーがどのボタンを押すべきか視覚的、尚且つ直感的にわかるように工夫いたしました。<br>
- 特に、トグルリストボタンは、サブタスクがある場合は「▼」と表示され、ない場合は「+」と表示される仕様になっており、一目でサブタスクがあるのかわかるようになっています。
</details>

<details>
<summary>２. Enterキー入力</summary>
- 入力欄に記入後、Enterキーにてタスクの登録ができるように工夫しました。これにより、素早くタスクの登録が可能です。<br>
- 入力欄は、日本語入力の際に候補を決定するEnterキー以外のEnterキーを押された場合のみ、登録するようにしております。
 <!--  function inputEnterSetting(inputElement, callback){
          let isComposing = false;
      
          inputElement.addEventListener("compositionstart", () => { // ユーザーが変換モードを開始
              isComposing = true;
          });
      
          inputElement.addEventListener("compositionend", () => { // 変換モードが終了して確定された瞬間
              isComposing = false;
          });
      
          inputElement.addEventListener("keydown", (e) => {
              if (isComposing) return; // 変換中はEnterを無視
              if (e.key === "Enter") {
                  callback(e); // 確定後のEnterで処理実行
              }
          });
      } -->
</details>
<br>

<details>
<summary>3. タスクとサブタスク</summary>
- タスクを登録後、必要に応じてサブタスクを登録できるよう工夫いたしました。<br>
</details>
<br>

<!--  ユーザー「＋」クリック
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
  -->

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
        <b>HTML要素に自由にデータを持たせるための属性のひとつ。<br>
          「どの要素を対象にするか」を紐づけるための目印として使われている。<br>
          htmlで「data-target(←属性名)=""」と記載し、呼び出すときはJSに「要素.dataset.属性名」で呼び出す。<br>
          例）data-target="work-list" → 要素.dataset.target
        </b>
      </td>
    </tr>
  </table>
</details>

