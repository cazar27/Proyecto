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

He creado una aplicacion Angular SSR, ya que renderiza las paginas del lado del servidor en vez del navegador, Mejora la velocidad de carga inicial, etc.
Una aplicacion con sass, he tratado de realizar una aplicacion, simplificada, reutilizable y escalable, analizando previamente toda su funcionalidad para evitar posibles errores o refactorizaciones.

### **Estructura del proyecto**

He usado rutas, guards, interfaces, modelos, interceptores, servicios, animaciones...

* **`admin`**: Directorio en el que se encuentran todos los componentes dedicados a la administracion del o los usuarios(CRUD).
* **`animations`**: Carpeta en la que estan las animaciones que he usado para animar la aplicacion.
* **`auth`**: Directorio en el que se encuentran todos los componentes dedicados a la autentificacion de usuario.
* **`core`**: Carpeta donde estan todos los elementos de core, guards, interceptor, interfaces, models,pipe, directives.
* **`services`**: Aqui se encuentran los servicios, algunos de los mas relevantes auth y users.
* **`services`**: En esta carpeta estan los componentes comunes.

He usado Angular Material como libreria de componentes en la que me apoyado, y obviamente todos los formularios son reactivos.

Cosas pendientes que me han quedado por hacer:
1. hacer un scroll infinito con paginado para listar los usuarios, usando el paginado del backend para ir añadiendo cada x usuarios.
2. Añadir mas validaciones personalizadas a los formularios, como en registro el email o username ya existen, o en login, email no encontrado, o contraseña incorrecta.
3. Queria tanto en el back como en el front añadir un endpoint para recibir el usuario solo con el token para si se entra a la app con un token en el storage del navegador poder loguear.

[Readme del frontend](https://github.com/cazar27/Proyecto/tree/master/users-app#readme)
