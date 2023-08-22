## Автор

Dmytro Kerimet  
Email: [dmytro.kerimet@apriorit.com](mailto:dmytro.kerimet@apriorit.com)

## Описание

Это RESTful API для управления пользователями. Он предоставляет следующие возможности:

1. Получение списка всех пользователей.
2. Получение информации о конкретном пользователе по его ID.
3. Создание новых пользователей.
4. Обновление информации о существующих пользователях.
5. Удаление пользователей.
6. Загрузка изображений (например, аватаров пользователей).

## Как запустить проект с нуля

1. Клонируйте репозиторий:

    ```bash
    git clone <URL репозитория>
    ```

2. Перейдите в директорию проекта:

    ```bash
    cd <my-express-app>
    ```

3. Установите зависимости:

    ```bash
    npm install
    ```

4. Запустите сервер:

    ```bash
    node src/app.js
    ```

   или если вы используете nodemon:

    ```bash
    npm start
    ```

## Как пользоваться API

## На проэкте установлен Swagger
- **URL:** `http://localhost:3000/api-docs

### Получение списка всех пользователей

- **Метод:** `GET`
- **URL:** `http://localhost:3000/users`

### Получение информации о пользователе по ID

- **Метод:** `GET`
- **URL:** `http://localhost:3000/users/{id}`

### Создание нового пользователя

- **Метод:** `POST`
- **URL:** `http://localhost:3000/users`
- **Тело запроса:** JSON объект с информацией о пользователе.

### Обновление информации о пользователе

- **Метод:** `PUT`
- **URL:** `http://localhost:3000/users/{id}`
- **Тело запроса:** JSON объект с новой информацией о пользователе.

### Удаление пользователя

- **Метод:** `DELETE`
- **URL:** `http://localhost:3000/users/{id}`

### Загрузка изображения

- **Метод:** `POST`
- **URL:** `http://localhost:3000/users/upload`
- **Тип данных:** `multipart/form-data`
- **Параметр:** `image` (файл изображения)

## Примеры с использованием `curl`

### Получение списка всех пользователей

```bash
curl -X GET http://localhost:3000/users
 ```

##  Получение информации о пользователе с ID=1

```bash
curl -X GET http://localhost:3000/users/1
 ```

## Создание нового пользователя
```bash
curl -X POST -H "Content-Type: application/json" -d "{\"name\":\"John\", \"email\":\"john@example.com\"}" http://localhost:3000/users
 ```

## Обновление информации о пользователе с ID=1
```bash
curl -X PUT -H "Content-Type: application/json" -d "{\"name\":\"John Updated\", \"email\":\"john.updated@example.com\"}" http://localhost:3000/users/1
 ```

## Удаление пользователя с ID=1
```bash
curl -X DELETE http://localhost:3000/users/1

 ```

## Загрузка изображения
```bash
curl -X POST -F "image=@path/to/image.jpg" http://localhost:3000/users/upload
 ```