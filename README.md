# To do list with next.js

A small project for practising next.js

## Tech

- Next.js with TS
- Tailwind
- Flowbite
- React-flowbite
- Payload CMS

## How to run in dev env?

1. Start MongoDB (has to be installed and C:/MongoDBFiles/data/db directory created)

```
mongod --dbpath="C:/MongoDBFiles/data/db"
```

2. Start PayloadCMS:

```
cd PAYLOADCMS
npm run dev
```

3. Access your server data on localhost:8090/admin. Create account with:

```
email: admin@example.com
password: admin
```

3. Start frontend:

```
npm run dev
```

## Bugs

1. When deleting or checking as done doesn't refresh on it's own.
2. Logs in only after some time, therefore throws errors in console.
3. Text fields sometimes lag.
