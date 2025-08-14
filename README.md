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

上記のイメージのように、大きいタスクを一覧にしてパッと見られるようにするのはもちろんのこと、<br>
それに加えて、タスク自体をさらにサブタスクに細分化し、見やすくすれば、より使いやすいのではないかと考えました。<br>
そこで、タスクにさらにサブタスクを追加し、トグルリストで視覚的にも分かりやすい機能の実装に至りました。<br>
詳しい内容は、以下に記させていただきます。よろしければご覧ください:)<br>


## ⚪︎詳細
### ⚪︎機能一覧
<table width="100%" cellspacing="10">
  <tr>
    <td width="50%" align="center"><b>カテゴリー画面</b></td>
    <td width="50%" align="center"><b></b></td>
  </tr>
  <tr>
    <td width="50%"><img src="https://github.com/user-attachments/assets/2995641c-05cb-44d8-9a24-c3cd36a04c71" width="100%"></td>
    <td width="50%"><img src="https://github.com/user-attachments/assets/1fb9be75-fdbc-4ac0-be73-da5b308df40c" width="100%"></td>
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
    <td width="50%">「
      上部の入力欄よりタスクを入力し、Enterキーで登録が行える仕様になっております。<br>
      また、タスクが完了したら、「✔︎」ボタンにてタスクを削除できます。<br>
      「＋」ボタンをクリックすると、サブタスクの登録が行えます。
    </td>
    <td width="50%">
      「BOOST(RESETボタンの下)」ボタンをクリックすると、ブーストモードとして下部に偉人やキャラクターの名言がスライドショーとして表示されます。<br>
      さらに、枠内の「偉人(紳士アイコン)」「キャラクター(本アイコン)」ボタンをクリックすると、カテゴリー毎に名言が表示されます。<br>
      集中力が切れそうなときに、モチベーションアップとしてご活用ください。<br>
      例）<br>
      ・「偉人(紳士アイコン)」ボタン　→ 偉人の名言集。<br>
      ・「キャラクター(本アイコン)」ボタン　→　漫画の名言集。<br>
    </td>
  </tr>
</table>

<table width="100%" cellspacing="10">
  <tr>
    <td width="50%" align="center"><b>タイマー動作紹介</b></td>
    <td width="50%" align="center"><b>ストップウォッチ動作紹介</b></td>
  </tr>
  <tr>
    <td width="50%">
      <a href="https://gyazo.com/e5a871c59ed67d3f2ad580de40d4d0e8">
        <img src="https://i.gyazo.com/e5a871c59ed67d3f2ad580de40d4d0e8.gif" alt="Image from Gyazo" width="100%"/>
      </a>
    </td>
    <td width="50%">
      <a href="https://gyazo.com/a1a12135bca036c545c5e8604c4b42a2">
        <img src="https://i.gyazo.com/a1a12135bca036c545c5e8604c4b42a2.gif" alt="Image from Gyazo" width="100%"/>
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
