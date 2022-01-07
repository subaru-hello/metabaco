# 仮想タバコミュニケーションアプリ
タバコを吸う人たちが集まる空間ってディープですよね。
そんな空間に自分も入りたい、でも自分はタバコを吸いたくない。
そんな人に、タバコミュニティ内のタバコミュニケーションをお届けするアプリになります。

# backendの環境構築
### mainディレクトリにて下記コマンドを実行
```
$ docker-compose run backend rails new  ./backend --force --no-deps --database=postgresql  --api
$ docker compose build
```

# frontendの環境構築
### mainディレクトリにて下記コマンドを実行
```
$ docker compose run --rm frontend sh -c "yarn global add create-react-app && create-react-app ./frontend --template typescript"
```

# Docker起動方法
```
$ docker-compose up --build
```

```

* Ruby version
2.7
* Rails
6.1

* System dependencies
Mac OS
* Configuration

* Database creation
postgresql
* Database initialization

$ docker-compose up -d
$ docker-compose run api bundle exec rake db:create

* ...
