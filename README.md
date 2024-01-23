## Author

Dmytro Kerimet  
Email: [dmytro.kerimet@apriorit.com](mailto:dmytro.kerimet@apriorit.com)

## Description

This is a RESTful API for user management. It provides the following capabilities:

1. Retrieve a list of all users.
2. Get information about a specific user by their ID.
3. Create new users.
4. Update information about existing users.
5. Delete users.
6. Upload images (e.g., user avatars).

## How to Start the Project from Scratch

1. Clone the repository:

    ```bash
    git clone <Repository URL>
    ```

2. Navigate to the project directory:

    ```bash
    cd <my-express-app>
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    node server/app.js
    ```

   or if you are using nodemon:

    ```bash
    npm start
    ```

## How to Use the API

## Swagger is Installed on the Project
- **URL:** `http://localhost:3000/api-docs`

### Retrieve a List of All Users

- **Method:** `GET`
- **URL:** `http://localhost:3000/users`

### Get Information About a User by ID

- **Method:** `GET`
- **URL:** `http://localhost:3000/users/{id}`

### Create a New User

- **Method:** `POST`
- **URL:** `http://localhost:3000/users`
- **Request Body:** JSON object with user information.

### Update Information About a User

- **Method:** `PUT`
- **URL:** `http://localhost:3000/users/{id}`
- **Request Body:** JSON object with new user information.

### Delete a User

- **Method:** `DELETE`
- **URL:** `http://localhost:3000/users/{id}`

### Upload an Image

- **Method:** `POST`
- **URL:** `http://localhost:3000/users/upload`
- **Data Type:** `multipart/form-data`
- **Parameter:** `image` (image file)

## Examples Using `curl`

### Retrieve a List of All Users

```bash
curl -X GET http://localhost:3000/users
```

### Get Information About a User with ID=1

```bash
curl -X GET http://localhost:3000/users/1
```

### Create a New User
```bash
curl -X POST -H "Content-Type: application/json" -d "{\"name\":\"John\", \"email\":\"john@example.com\"}" http://localhost:3000/users
```

### Update Information About a User with ID=1
```bash
curl -X PUT -H "Content-Type: application/json" -d "{\"name\":\"John Updated\", \"email\":\"john.updated@example.com\"}" http://localhost:3000/users/1
```

### Delete a User with ID=1
```bash
curl -X DELETE http://localhost:3000/users/1
```

### Upload an Image
```bash
curl -X POST -F "image=@path/to/image.jpg" http://localhost:3000/users/upload
```