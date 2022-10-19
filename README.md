# わだいほりだー

[![IMAGE ALT TEXT HERE](https://jphacks.com/wp-content/uploads/2022/08/JPHACKS2022_ogp.jpg)](https://www.youtube.com/watch?v=LUPQFB4QyVo)

## 製品概要
### 背景(製品開発のきっかけ、課題等）
### 製品説明（具体的な製品の説明）
### 特長
#### 1. 特長1
#### 2. 特長2
#### 3. 特長3

### 解決出来ること
### 今後の展望
### 注力したこと（こだわり等）
* 
* 

## 開発技術
### 活用した技術
#### API・データ
* 
* 

#### フレームワーク・ライブラリ・モジュール
* 
* 

#### デバイス
* 
* 

### 独自技術
#### ハッカソンで開発した独自機能・技術
* 独自で開発したものの内容をこちらに記載してください
* 特に力を入れた部分をファイルリンク、またはcommit_idを記載してください。

#### 製品に取り入れた研究内容（データ・ソフトウェアなど）（※アカデミック部門の場合のみ提出必須）
* 
* 

### 起動方法
**dockerによる仮想環境で開発しています。
まずはdocker desktop等のインストールを行い、docker CLIを使用可能にしてください。**

1. `docker-compose build`によりimageを作成
2. `docker-compose run react-app sh -c "cd wadaihorider && yarn"`で必要パッケージをインストール。
3. `docker-compose up --build`でコンテナ起動。
4. [localhost:3000](http://localhost:3000/)にアクセスしてサービスの起動を確認してください。