CRUD REST API using NestJS with TypeScript, MySQL, .env configuration, migration support, and validation pipes.


### Migration
```bash
npx typeorm-ts-node-commonjs migration:generate src/migrations/CreateUserTable -d ormconfig.ts
npx typeorm-ts-node-commonjs migration:run -d ormconfig.ts
```

---

## Create a User (`POST /users/create`)
```bash
curl -X POST http://localhost:3000/users/create \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice", "email": "alice@example.com"}'
```

---

## Get All Users (`GET /users`)
```bash
curl http://localhost:3000/users
```

---

## Get One User by ID (`GET /users/:id`)
```bash
curl http://localhost:3000/users/1
```

---

## Update a User (`PUT /users/:id`)
```bash
curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice Updated", "email": "alice.updated@example.com"}'
```

---

## Delete a User (`DELETE /users/:id`)
```bash
curl -X DELETE http://localhost:3000/users/1
```
