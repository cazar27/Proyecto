# Node Express MongoDB proyect

## How to use

### 1. Download example & install dependencies

Clone this repository:

```
git clone git@github.com/cazar27/prueba_tecnica_users.git
```

Install npm dependencies:

```
cd api_rest_users
npm install
```

### 2. Configure the database connection URL

This proyect uses the `DATABASE_URL` environment variable defined in the `.env` file (in the same folder as `package.json`) to connect to the database.

Create the file:

```bash
touch .env
```

Then add the following line:

```
DATABASE_URL="mongodb+srv://carloszr27:******@cluster0.oirpa.mongodb.net/prueba_tecnica"
```

### 3. Generate Prisma Client

Run the app server using the following command:

```bash
npm run start
```

### 4. Run the tests

To run the test in `test/test.js`, run the following command:

```bash
npm run test
```

### 5. Run the project

To run the script `main.ts`, run the following command: 

```bash
npm run start
```

### 7.Go to Wiki to understand use api rest

[link to wiki](https://github.com/cazar27)

[link to documentation postman collection](https://documenter.getpostman.com)
