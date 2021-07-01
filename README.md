## 医療従事者向け 医療機関口コミサービス openmedical
「医療従事者の就職をもっとクリアに！」　

医療従事者同士で職場の口コミを共有する事で、医療従事者の就職ミスマッチを減らす事を目的としたWebアプリです。

URL: http://35.74.112.246/
※後でドメイン追加します。

</br>
<image src="https://user-images.githubusercontent.com/36041745/123840175-fcf94780-d948-11eb-885e-ced934d2e333.png">
</br>

### 開発者Twitter
https://twitter.com/sugya_k

</br>

 ## 作成した意図
医療従事者の転職活動において、職場の人間関係や福利厚生等を重要視されている方が非常に多い。

しかし、上記の情報を取得する術が少な過ぎるあまり、ミスマッチが多く起きてしまっている。

医療従事者同士が職場の内情を良い面、悪い面ともに共有する事で、少しでもミスマッチを減らしたいと考えました。

</br>

## 使い方紹介
スライド画像または動画を貼り付ける

</br>

## 使用技術(概略)※詳細後述
* Backend
  * Ruby 2.7.2 / Rails(api_mode) 5.2.5 / Rspec(Factorybot) / rubocop(rubocop_airbnb) / Nginx / Puma
* Frontend
  * React 17.0.1(create-react-app / eslint / prettier / axios) / Material-UI / Firebase(FirebaseAuth)
* Infra
  * AWS(VPC / EC2 / ECR / Route53 / ALB) / Docker(docker-compose)
* DB
  * mariadb 10.5.10 
</br>

## インフラ構成
<image src="https://user-images.githubusercontent.com/36041745/124082735-09d08500-da88-11eb-8937-a4e1e8c8dda8.png">

</br>

## ER図
<image src="https://user-images.githubusercontent.com/36041745/123961754-ab55c900-d9eb-11eb-95f4-1a099f3decdb.png" >
</br>
 
## 機能一覧
### ユーザー利用機能
※axiosを使用してReactからRailsのapiリクエストを投げております。
* ユーザー登録・ログイン機能
  * FirebaseAuthによる認証
  * useContext/usereduserによるログイン状態保持
* 口コミ投稿  
* 医療機関検索
* Route53による独自ドメイン化
　* 後ほど追加
### 非ユーザー利用機能
* puma-socketを通したRailsのNginx配信
* Dockerを使用して開発環境を完全コンテナ化
* ECRを利用してFrontendのイメージをpush
### テスト
* Rspec
 * 単体テスト(model)
 * 単体テスト(request)
</br>

## 使用技術(詳細)
### Backend
* `rspec`: Rubyで使用率の高いと言われるテスト用ライブラリ
 * `factorybot`: テストデータ作成に使用されるライブラリ
* `rubocop`:　Ruby用の静的コード解析ライブラリ(airbnbが用いるルールが良く使用されるらしい)
* `rack-cors`: 異なるオリジン(URLの(スキーム/ホスト/ポート))間の通信を可能にするライブラリ
</br>

### Frontend
* `Material-UI`: Googleが提供するUIパックライブラリ
* `eslint &prettier` : javascript用の静的コード解析ライブラリ
* `firebase`: Googleが提供するバックエンド開発をクラウド上で行えるようにしたサービス(ライブラリ)
 * `firebaseAuth`:  firebaseのうちの認証認可を行う機能




