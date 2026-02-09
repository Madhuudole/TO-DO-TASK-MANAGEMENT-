# Task Manager Frontend

## A. About
Angular frontend for the Task Manager app.

## B. Build
`npm run build` creates production assets in `dist/`.

## C. Commands
Common scripts: `npm start`, `npm test`, `npm run build`.

## D. Dev Server
`npm start` runs on `http://localhost:4200`.

## E. Environment
`proxy.conf.json` proxies `/api` to `http://localhost:8081`.

## F. Features
Login, task list, create, edit, delete, assign people, filter and sort.

## G. Getting Started
1. `npm install`
2. `npm start`

## H. HTTP
Calls the backend at `/api/*`.

## I. Install
Prereqs: Node 20+ and npm 11.

## J. JavaScript and TypeScript
TypeScript is configured in `tsconfig*.json`.

## K. Key Files
`src/app/app.routes.ts`, `src/app/services/*`, `src/app/components/*`.

## L. Linting
No custom lint config in this repo.

## M. Mocking
No mock server is configured.

## N. Notes
SSR support is enabled via Angular SSR.

## O. Output
Build output is in `dist/task-manager-frontend/`.

## P. Proxy
`proxy.conf.json` handles local API routing.

## Q. Quick Start
`npm install` then `npm start`.

## R. Routing
Routes are defined in `src/app/app.routes.ts`.

## S. Styles
Global styles are in `src/app/app.css`.

## T. Tests
`npm test` runs Vitest through Angular CLI.

## U. UI
Standalone components live in `src/app/components/`.

## V. Versions
Angular 21.1.x and TypeScript ~5.9.

## W. Workspace
Angular workspace config is in `angular.json`.

## X. eXtras
Prettier settings are in `package.json`.

## Y. Yarn and npm
This repo uses npm. Yarn is not configured.

## Z. Zero to Deploy
Add a hosting target or CI workflow when ready.
