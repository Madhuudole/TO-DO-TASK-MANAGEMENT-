# Task Manager Backend

## A. About
Spring Boot backend for the Task Manager app.

## B. Build
`./mvnw clean package` builds the jar.

## C. Configuration
Main config is `src/main/resources/application.properties`. Dev profile uses `application-dev.properties`.

## D. Database
MySQL by default. H2 in-memory when using the `dev` profile.

## E. Endpoints
- POST `/api/auth/register`
- POST `/api/auth/login`
- GET `/api/tasks`
- POST `/api/tasks`
- PUT `/api/tasks/{id}`
- DELETE `/api/tasks/{id}`

## F. Folders
Source code is in `src/main/java`. Configuration is in `src/main/resources`.

## G. Getting Started
Run `./mvnw spring-boot:run` and the app starts on port 8081.

## H. Health
No explicit health endpoint is configured.

## I. Install
Prereqs: Java 17 and Maven (or use `./mvnw`).

## J. Java
Target is Java 17.

## K. Key Classes
`SecurityConfig`, `TaskController`, `AuthController`, `TaskService`, `EmailService`, `TaskReminderScheduler`.

## L. Logging
Spring Boot logs to the console.

## M. Mail
Configure `spring.mail.*` for email reminders.

## N. Notes
`/api/**` is open; other endpoints require Basic Auth.

## O. Observability
No metrics or tracing configured.

## P. Ports
Backend uses port 8081.

## Q. Quick Start
1. `./mvnw spring-boot:run`
2. Call `/api/tasks` or `/api/auth/register`

## R. Run With Docker
`docker compose up --build` (starts MySQL and backend).

## S. Security
BCrypt password encoding. Dev profile uses lower strength for speed.

## T. Tests
`./mvnw test`.

## U. Users
Registration and login are handled via `/api/auth/*`.

## V. Version
Project version is 1.0.0 in `pom.xml`.

## W. Workflow
Scheduler runs daily at 9 AM to send reminder emails.

## X. eXtras
CORS is enabled for all origins.

## Y. YAML and Docker
`docker-compose.yml` provides a MySQL service and the backend service.

## Z. Zero to Prod
Review secrets and credentials before deployment.
