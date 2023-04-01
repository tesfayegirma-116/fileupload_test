
# File Upload MERN

file upload with mysql, Express, react, Node Typescript

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
 For client side in client folder
  npm install 
  npm run dev
```

```bash
 For server side in server folder
  npm install 
  npm run dev
```


## Database setup

```javascript
in server/config folder there is config.json you can set your mysql database connections like this 

{
  "development": {
    "username": "root",
    "password": "YOURPASSWORD",
    "database": "filedb",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "YOURPASSWORD",
    "database": "filedb",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```


## API Reference

#### Get all items

```http
  GET http://localhost:8000/api/files
```



#### Upload file

```http
  POST http://localhost:8000/api/upload
```


#### Delete file

```http
  DELETE http://localhost:8000/api/file/{id}
```




## Author

- [@tesfayegirma](https://github.com/tesfayegirma-116)

