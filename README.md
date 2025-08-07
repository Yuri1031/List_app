# ⚪︎ToDo List 機能　（作成中）
<br>


## ⚪︎アプリケーション概要
リスト機能を実装いたしました。
<br>


## ⚪︎開発のきっかけ
JavaScriptの理解を深めるため、個人的な実践練習として作成いたしました。<br>
制作にあたって、ToDoリストについて自分なりに考えたところ、<br>
私たちは会社や日常生活等場面を問わず、何かしらのタスクをこなしており、タスクの大きさは大小様々だと感じました。例えば、以下のイメージです。<br>
　　タスク　（サブタスク）<br>
　・買い物　（にんじん、豚肉、牛乳...）<br>
　・Aプロジェクト　（会議、資料作成...）<br>
　・Bプロジェクト　（プレゼン準備、プレゼン練習...）<br>

上記のイメージのように、大きいタスクを一覧にしてパッと見られるようにするのはもちろんのこと、それに加えて、細分化した小さいタスク(サブタスク)も見やすくすれば、より使いやすいのではないかと考えました。<br>
そこで、タスクの下にトグルリストでサブタスクを作成できる機能の実装に至りました。<br>
詳しい内容は、以下に記させていただきます。よろしければご覧ください:)<br>

<!--
## ⚪︎詳細
### ⚪︎機能一覧
<table width="100%" cellspacing="10">
  <tr>
    <td width="50%" align="center"><b>タイマー機能</b></td>
    <td width="50%" align="center"><b></b></td>
  </tr>
  <tr>
    <td width="50%"><img src="https://github.com/user-attachments/assets/77239507-bf55-4f3d-89dc-ba2d9fd5ee4f" width="100%"></td>
    <td width="50%"><img src="https://github.com/user-attachments/assets/1fb9be75-fdbc-4ac0-be73-da5b308df40c" width="100%"></td>
  </tr>
  <tr>
    <td width="50%">「START」「STOP」「RESET」ボタンがあり、タイマー設定後に操作が可能です。ボタンも直感的に使いやすいように工夫しております。</td>
    <td width="50%">タイマーの設定した時間になると、アラートでお知らせいたします。</td>
  </tr>
</table>

<table width="100%" cellspacing="10">
  <tr>
    <td width="50%" align="center"><b>ストップウォッチ機能</b></td>
    <td width="50%" align="center"><b>ブーストモード</b></td>
  </tr>
  <tr>
    <td width="50%"><img src="https://github.com/user-attachments/assets/05a35f3c-0e5a-4c8b-ae21-89b07f9924f1" width="100%"></td>
    <td width="50%"><img src="https://github.com/user-attachments/assets/898e4b30-7ee1-4bdd-b5b6-5e007797bacc" width="100%"></td>
  </tr>
  <tr>
    <td width="50%">「
      START」「STOP」「RESET」「BOOST(RESETボタンの下)」ボタンがあり、ストップウォッチに合わせて操作可能です。ボタンも直感的に使いやすいように工夫しております。
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
