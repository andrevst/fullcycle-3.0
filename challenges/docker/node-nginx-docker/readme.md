# Full Cycle Node.js and MySQL Application

> The main idea is that when a user accesses the application through Nginx, it will make a call to our Node.js application. This application, in turn, will add a record to our MySQL database, registering a name in the `people` table. The Node.js application's response to Nginx will be `<h1>Full Cycle Rocks!</h1>` followed by a list of names registered in the database. The `docker-compose` configuration is set up in such a way that simply running `docker-compose up -d` will have everything working and available on port 8080.

## About

This project is a simple web application demonstrating the integration of a Node.js application with a MySQL database, using Nginx as a reverse proxy. The application allows adding names to a database and then displays these names on a web page.

Each component is located in its own page. This is the folder structure:

```bash
├── app
│   ├── Dockerfile
│   ├── app.js
│   ├── package-lock.json
│   └── package.json
├── database
│   └── init.sql
├── docker-compose.yaml
├── nginx
│   └── default.conf
└── readme.md
```

## How to Run

1. **Prerequisites**:
    - Ensure Docker and Docker Compose are installed on your system.

2. **Running the Application**:
    - Clone the repository to your local machine.
    - Navigate to the root directory of the project.
    - Run the following command:
      ```
      docker-compose up -d
      ```
    - Once the containers are up and running, access the application by visiting `http://localhost:8080` in your web browser.

3. **Adding Names**:
    - To add names to the database, use the `/add-user` endpoint. This can be done using a tool like Postman or a simple `curl` command:
      ```
      curl -X POST http://localhost:8080/add-user -H "Content-Type: application/json" -d '{"name": "John Doe"}'
      ```
    - Refresh the main page to see the updated list of names.

4. **Viewing the Database**:
    - To view the list of names directly from the database, access the `/users` endpoint in your browser or via a tool like Postman.

## References

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- [Nginx](https://www.nginx.com/)
- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
