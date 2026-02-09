# Task Manager Full Stack

## A. About
This repository contains a full stack Task Manager app with an Angular frontend and a Spring Boot backend.

## B. Backend
`taskmanager-backend/` is a Spring Boot 3.2.5 app using Java 17, Spring Web, JPA, Security, and Mail.

## C. Client
`frontend/task-manager-frontend/` is an Angular 21 app with SSR support and a proxy to the backend.

## D. Data Store
Default config uses MySQL; a dev profile uses an in-memory H2 database.

## E. Email Reminders
A daily scheduler sends reminder emails for tasks due tomorrow.

## G. Getting Started
Prereqs: Java 17, Node 20+, npm 11, and MySQL or Docker.

## H. HTTP API
- POST `/api/auth/register`
- POST `/api/auth/login`
- GET `/api/tasks`
- POST `/api/tasks`
- PUT `/api/tasks/{id}`
- DELETE `/api/tasks/{id}`

## I. Install
Backend:
1. `cd taskmanager-backend`
2. `./mvnw spring-boot:run`

Frontend:
1. `cd frontend/task-manager-frontend`
2. `npm install`
3. `npm start`

## J. Java
Target is Java 17.

## K. Key Commands
- `./mvnw test`
- `npm test`
- `docker compose up --build`

## L. Local Dev
Backend runs on `http://localhost:8081`. Frontend runs on `http://localhost:4200` and proxies `/api` to the backend.

## M. Mail
Set `spring.mail.*` in `taskmanager-backend/src/main/resources/application.properties`. Use an app password for Gmail.

## N. Notes
`/api/**` is `permitAll` in `SecurityConfig`. Non-API endpoints use Basic Auth. Change default credentials before deployment.

## O. Observability
Logs are printed to the console. No metrics or tracing are configured.

## Q. Quick Start
1. Start backend: `cd taskmanager-backend` then `./mvnw spring-boot:run`
2. Start frontend: `cd frontend/task-manager-frontend` then `npm install` and `npm start`

## R. Run With Docker
From `taskmanager-backend/`, run `docker compose up --build` to start MySQL and the backend.

## S. Security
Uses BCrypt password encoding. The `dev` profile uses a lower strength encoder for speed.

## T. Tests
Backend: `./mvnw test`. Frontend: `npm test`.

## U. UI
The UI supports task creation, assignment to people, editing, completion, filtering, and sorting.

## V. Versions
Backend: Spring Boot 3.2.5, Java 17. Frontend: Angular 21.1.x.

