# Simple Next.js + MongoDB

## Notes

### Setup

- npm install mongodb
- put MONGO_URI in .env.local

### Server Components vs Client Components vs Server Routes

- Server function: runs on server only, e.g. mongodb functions
- Server/SSR components can use server functions directly ("use server" / default)
- Client components hydrate after sending, need to send request to server ("use client")
- Server routes run when a request is sent, can run server functions (route.ts)

### Structure

- lib/ is for shared code
- app/.../route.ts is for server routes

### MongoDB Functions

- find, insert, update, delete, count, (distinct, watch, bulk)
- mongodb query operators (https://www.mongodb.com/docs/manual/reference/operator/query)
- mongodb update operators (https://www.mongodb.com/docs/manual/reference/operator/update-field)
