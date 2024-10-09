
Backend using HTTP-Cookie to maintain session. you don't need store HTTP-Cookie in local Storage and send with request. Browser will automatically send this request.
#### Sample Request Method `:POST`

```JSX
const handleSubmit = async (event) => {

        event.preventDefault();
        try {
           const response = await axios.post('http://localhost:5000/api/login', {
                email: username,
                password: password,
            }, { withCredentials: true });

            if (response.status === 200) {
                setMessage("Login successful!");
            }

        } catch (error) {
            setMessage("Login failed. Please check your credentials.");
            console.error("Login error:", error);
        }
    };
```
#### Sample Request Method `:GET`

```JSX
const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/posts', { withCredentials: true });
            
            console.log(response);
        } catch (err) {
            setError("Failed to load posts. Please try again.");
            console.error("Posts fetch error:", err);
        }
    };
```


***ONLY USE  `{ withCredentials: true }` FOR ENDPOINT WITH MIDDLEWARE 



# Authentication

| Method | Endpoint                   | Description                                                         | MW  |
| ------ | -------------------------- | ------------------------------------------------------------------- | --- |
| POST   | `/auth/api/register`       | Creates a new user account with the provided credentials.           | ❌   |
| POST   | `/auth/api/login`          | Authenticates a user and provides a session token if successful.    | ❌   |
| POST   | `/auth/api/logout`         | Ends the user's session and invalidates the session token.          | ❌   |
| POST   | `/auth/api/reset-password` | Sends a password reset link or code to the user's registered email. | ❌   |
| GET    | `/auth/api/getProfile`     | Retrieves the profile information of the authenticated user.        | ✔   |

### `POST:/auth/api/register`

REQUEST BODY:
```
{
  "username": "",
  "email": "",
  "password": ""
}
```


### `POST:/auth/api/login

REQUEST BODY:
```
{
  "email": "",
  "password": ""
}
```

### `POST:/auth/api/reset-password`

REQUEST BODY:
```
{
  "email": ""
}
```

### `GET:/auth/api/getProfile`

RESPONSE BODY:
```
{
    "profile": {
        "_id": " ",
        "username": " ",
        "email": " ",
        "emailVerified": true,
        "interests": [],
        "posts": [ ],
        "replies": [],
        "__v": 0
    }
}
```


# Posts

| Method | Endpoint      | Description  | MW  |
| ------ | ------------- | ------------ | --- |
| POST   | `/api/posts/` | Create Post  | ✔   |
| GET    | `/api/posts/` | Get all post | ❌   |
### `POST:/api/posts/`

REQUEST BODY:
```
{
  "title": "",
  "content": ""
}
```

### `GET:/api/posts/`

RESPONSE BODY:
```
[

    {
        "_id": "",
        "title": "",
        "content": "",
        "author": "",
        "replies": [],
        "createdAt": "",
        "updatedAt": "",
        "__v": 0
    }

]
```
