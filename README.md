## 医療従事者向け 医療機関口コミサービス openmedical
### 解説記事(Qiita)
### 開発者Twitter
## 作成した意図
## 使い方紹介
## 使用技術
* Backend
  * Ruby 2.7.2
  * Rails(api_mode) 5.2.5
  * Rspec
    * Factorybot
  * rubocop
    * rubocop_airbnb
  * Nginx
  * Puma
* Frontend
  * React 17.0.1
    * create-react-app
    * eslint
    * prettier
    * axios
  * Material-UI
  * Firebase
    * FirebaseAuth 
* Infra
  * AWS
    * VPC
    * EC2
    * ECR
    * Route53
    * ALB
  * Docker
    * docker-compose
  * DB
    * mariadb 10.5.10 
## インフラ構成
### 構成図を書くとなおよし
## 機能一覧
### ユーザー利用機能
※axiosを使用してReactからRailsのapiリクエストを投げております。
* ユーザー登録・ログイン機能
  * FirebaseAuthによる認証
  * useContext/usereduserによるログイン状態保持
* 口コミ投稿  
* 医療機関検索
* Route53による独自ドメイン化
### 非ユーザー利用機能
* puma-socketを通したRailsのNginx配信
* Dockerを使用して開発環境を完全コンテナ化
* ECRを利用してFrontendのイメージをpush
### テスト
* Rspec
 * 単体テスト(model)
 * 単体テスト(request)
