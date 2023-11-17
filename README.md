# Gestor-Sistema-Encuestas-de-Ventas

## ¡ANTES DE COMENZAR!

Una vez clonado el repositorio en nuestro local deberemos abrir dos terminales: una para el backend y otra para el frontend.

### Backend

En la terminal de backend deberemos instalar todas las dependencias de node indicadas en el documento package.json con el comando npm i:

```
npm i cookie-parser cors express simple-stateless-auth-library slonik uuid
```

También se deberán instalar las devDependencies:

```
npm i -D dotenv nodemon
```

también será necesario levantar un contenedor de docker utilizando el comando docker-compose up

Una vez levantado el contenedor, podremos ponerlo en marcha con el comando docker-compose start.

Ahora podremos abrir el adminer en el puerto 8080:8080 para comporbar en todo momento nuestra base de datos.

En el adminer deberemos importar el documento con nombre "creation.sql"

Finalmente ejecutaremos el comando

```
npm run dev
```

para que todo nuestro backend se ejecute correctamente

### Frontend

En la terminal del frontend también deberemos instalar las dependencias que se indican en el documento package.json:

```
npm i axios react-hook-form react-query styled-components wouter
```

Una vez instaladas todas las dependencias ejecutaremos también el comando

```
npm run dev
```

en la terminal y podremos visualizar la aplicación en nuestro local.

## Definición de usuario

Se trata de una aplicación de gestión de encuestas de venta.

Para poder acceder a la aplicación habrá que acceder con un email y contraseña registrados. En caso de no tener usuario se puede acceder a la página de registro, donde se podrá introducir el email, contraseña, nombre de usuario y se podrá especificar si el usuario tiene permiso para editar y eliminar registros denrto de la aplicación.

Para comenzar crearemos un usuario cuyos datos de acceso serán los siguientes:

- email: user1@gmail.com,
- username: User 1,
- contraseña: 1234,
- Autorizado?: selecionaremos la opción "SÍ"

Antes de acceder a la aplicación crearemos otro usuario con los siguientes datos:

- email: user2@gmail.com,
- username: User 2,
- contraseña: 1234,
- Autorizado?: selecionaremos la opción "NO"

Una vez creados los usuarios accederemos con los datos de acceso del usuario 1 en la página de login:

- email: user1@gmail.com
- contraseña: 1234

La aplicación nos llevará al panel principal en el que se mostrarán las encuestas registradas. Ahora mismo no habrá ningún registro, por lo que en el nav bar que se encuentra en la parte de arriba a la derecha elegiremos la opción "Nueva encuesta".

En esta página deberemos insertar un DNI y seleccionar el producto que queramos. En función de qué producto se elija se mostrarán otras opciones a continuación. Una vez hayamos seleccionado una opción para cada campo le daremos al botón "enviar". Ahora la aplicación nos devolverá a la página principal donde ya podremos ver el primer registro que hemos creado.

Nota: Para comprobar todo el funcionamiento de la página de registro de nuevas encuestas recomiendo crear al menos 3 registros, eligiendo cada vez una opción distinta en el campo "producto".

Una vez hayamos creado todos los registros podremos acceder a uno de ellos clickando en el DNI en el panel principal. Esto nos llevará a una página similar a la de registro, pero aquí estaremos modificando los datos del registro que hayamos elegido.

Al final tendremos una opción de "Guardar cambios" que deberemos pulsar tras haber indicado los nuevos datos que queremos modificar. Al hacer click en el botón "Guardar Cambios" volveremos al panel principal, donde podremos comprobar que los datos de ese registro se han modificado correctamente.

También podremos comprobar que en la página de modificar un registro habrá un botón para eliminar el registro. Si lo pulsamos nos saldrá un modal donde podremos confirmar si queremos o no eliminar ese registro. Si lo borramos volveremos al panel principal, donde ya no se mostrará el registro eliminado.

Por último, a la derecha del todo de nuestro nav bar se mostrará en rojo el nombre del usuario logeado. Si lo pulsamos nos dará la opción de hacer logout.

Tras salir de nuestro usuario volveremos a la página de login, donde introduciremos los datos del segundo usuario que creamos:

- email: user2@gmail.com
- contraseña: 1234

Esto nos llevará de nuevo al panel principal, donde la aplicación funcionará de la misma manera que con el anterior usuario, con la diferencia de que si tratamos de modificar un registro no nos aparecerán los botones de "Guardar Cambios" ni eliminar.

## Definición técnica

### Backend

La base de datos consta de dos tablas de sql. Una para los usuarios y otra para las encuestas.

El backend se ha creado con Node.js para poder establecer una arquitectura modelo-controlador-ruta utilizando express.js.

Se han creado tres modelos con sus controladores: uno para las queries a la tabla de encuestas, otro para controlar los procesos de autenticación y creación de usuarios y por último uno para obtener y utilizar la información del usuario logeado.

Para la información del usuario logeado hay un único endpoint:

```
GET /users
```

que recupera el nombre de usuario, email y los permisos del usuario logeado.

Para la autenticación hay tres endpoints distintos:

```
POST /auth/signup
```

para la creación de un usuario nuevo;

```
POST /auth/signin
```

para el login de un usuario ya creado;

```
POST /auth/signout
```

para deslogear.

Para las queries relacionadas con las encuestas:

```
POST /encuestas/new
```

para añadir una nueva encuesta a la base de datos;

```
GET /encuestas/all
```

para recuperar todas las encuestas registradas;

```
GET /encuestas/:id
```

para recuperar una única encuesta de la base de datos;

El endpoint que nos permite modificar una encuesta de la base de datos es el siguiente:

```
PUT /encuestas/:id
```

Así mismo, para eliminar una encuesta de la base de datos el endpoint es:

```
DELETE /encuestas/:id
```

### Frontend
