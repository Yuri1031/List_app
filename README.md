# ⚪︎ToDo List 機能　（作成中）
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

<!--
### ⚪︎工夫した点
<details>
<summary>１. ユーザビリティとデザインの工夫</summary>
- タイマーやストップウォッチの基本的な機能に加え、ユーザーが次にどのボタンを押すべきか視覚的、尚且つ直感的にわかるように工夫いたしました。
</details>

<details>
<summary>２. ブーストモード</summary>
- 「ブーストモード」には「ランダム(初期設定)」「偉人名言」「キャラクター名言」とカテゴリー分けされており、ユーザーの気分にあったものを選べるようにしております。<br>
- タイマーやストップウォッチの本来の機能を損なわせないために、「ブーストモード」ボタンは、あえて控えめなデザイン(カーソルを合わせると現れるデザイン)にしております。<br>
- しかし、1度選択したらモチベーションアップのため目立つようにデザインしております。
</details>
<br>


-->
