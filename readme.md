# **Descripción del proyecto**

## BACKEND

El Backend es una API REST que permite gestionar usuarios. Está desarrollado con Node.js y utiliza Express. Los datos se almacenan en una base de datos MongoDB.

### **Estructura del proyecto**

El proyecto se organiza en diferentes archivos y directorios:

* **`controller`**: Directorio que contiene los controladores de las acciones.
* **`routes`**: Directorio que contiene los archivos de definición de las rutas de la API.
* **`services`**: Directorio que contiene los archivos de definición de las funcionalidades de la API.
* **`models`**: Directorio que contiene los archivos de definición de los modelos de la API.
* **`index.js`**: Archivo principal del proyecto donde se crea la instancia y se registran las rutas.

### **Modelos de datos**

El modelo **`User`** representa a un usuario y tiene las siguientes propiedades:

* **`id`**: Identificador único del usuario.
* **`name`**: Nombre del usuario.
* **`surnames`**: Apellidos del usuario.
* **`age`**: Edad del usuario.
* **`email`**: Correo electrónico del usuario (único).
* **`password`**: Contraseña del usuario (se guarda encriptada).
* **`active`**: Gestiona si el usuario esta activo o no.
* **`creationDate`**: Fecha de creación del usuario.
* **`lastLogging`**: Fecha del ultimo login realizado por el usuario.

### **Rutas de la API**

El proyecto define varias rutas para la API. A continuación se detallan algunas de ellas:

* **`POST /user/`**: Ruta para registrar un nuevo usuario.
* **`POST /login`**: Ruta para iniciar sesión en la aplicacion (devuelve el token correspondiente a la sesion).
* **`GET /users`**: Ruta para obtener todos los usuarios.
* **`GET /user/:id`**: Ruta para obtener un usuario por su ID.
* **`GET /user/search/:name`**: Ruta para buscar usuarios por un campo específico.
* **`PUT /user/change_password/:id`**: Ruta para cambiar la contraseña de un usuario.
* **`PUT /user/:id`**: Ruta para actualizar los datos de un usuario.
* **`DELETE /user/:id`**: Ruta para eliminar un usuario.

Estas son solo algunas de las rutas disponibles en la API.

### **Colección de Postman**

Puedes importar esta colección en Postman para probar las rutas y realizar las solicitudes correspondientes a la API:api_rest_users.postman_collection.json

[Readme del backend](https://github.com/cazar27/Proyecto/tree/master/api_rest_users#readme)

## FRONTEND