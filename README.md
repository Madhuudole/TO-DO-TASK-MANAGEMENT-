✅ To-Do Task Management Application

A simple Task / To-Do Management Application built using Angular, Spring Boot, Docker, and Azure to help users organize and track daily tasks efficiently.

🚀 About the Project

This application allows users to create, manage, and track tasks by organizing them into Pending and Completed categories.
It provides a clean user interface and a robust backend with REST APIs.

✨ Features

User registration and login

Create, edit, and delete tasks

Mark tasks as Pending / Completed

Filter tasks by status

Sort tasks by due date

Responsive and user-friendly UI

🛠️ Tech Stack

Frontend: Angular

Backend: Spring Boot, Spring Data JPA

Database: H2 / PostgreSQL / MySQL

DevOps: Docker

Cloud: Microsoft Azure

🏗️ Architecture

Angular frontend communicates with backend using REST APIs

Spring Boot handles business logic

Spring Data JPA manages database operations

Docker containerizes the application

Azure hosts the containerized backend

▶️ How to Run
Backend
Run Spring Boot application
Backend URL: http://localhost:8081

Frontend
npm install
ng serve

Frontend URL: http://localhost:4200

Docker
docker-compose up

| Method | Endpoint                  | Description   |
| ------ | ------------------------- | ------------- |
| POST   | `/api/auth/login`         | User login    |
| POST   | `/api/task/user`          | Create task   |
| GET    | `/api/task/user`          | Get all tasks |
| PUT    | `/api/task/user/{taskId}` | Update task   |
| DELETE | `/api/tasks/{taskId}`     | Delete task   |

