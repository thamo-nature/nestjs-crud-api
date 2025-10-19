CRUD REST API using NestJS with TypeScript, MySQL, .env configuration, migration support, and validation pipes.


### Migration
```bash
npx typeorm-ts-node-commonjs migration:generate src/migrations/CreateUserTable -d ormconfig.ts
npx typeorm-ts-node-commonjs migration:run -d ormconfig.ts
```

---
