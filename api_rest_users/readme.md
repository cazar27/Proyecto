# Node Express MongoDB Proyect

### How to use

## 1. Download example & install dependencies

Clone this repository:

```
git clone https://github.com/cazar27/Proyecto.git
```

Install npm dependencies:

```
cd api_rest_users
npm install
```

## 2. Configure the database connection URL

This proyect uses the `DATABASE_URL` environment variable defined in the `.env` file (in the same folder as `package.json`) to connect to the database.

Create the file:

```bash
touch .env
```

Then add the following line:

```
DATABASE_URL="mongodb+srv://carloszr27:******@cluster0.oirpa.mongodb.net/prueba_tecnica"
```

## 3. Run local server

To run the script `main.ts`, run the following command: 

```bash
npm run start
```

## 4. Run the tests

To run the test in `test/test.js`, run the following command:

```bash
npm run test
```
## 5. Api Documentation

[link to documentation of api in postman](https://documenter.getpostman.com/view/10600647/2sA2xfZDv5)