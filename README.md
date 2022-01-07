# README

This README would normally document whatever steps are necessary to get the
application up and running.

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
Things you may want to cover:

* Ruby version
2.7
* System dependencies

* Configuration

* Database creation
postgresql
* Database initialization
```
$ docker-compose up -d
$ docker-compose run api bundle exec rake db:create
```
* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
