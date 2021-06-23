# coworking_HAB

## HELPERS

### dbHelpers

-   **getConnection** - Conecta con la base de datos.
-   **insertRegistration** - Ejecuta una sentencia SQL de busqueda sencilla.
    Recibe ( nombre de la tabla en formato string , objectSearch objeto con las propiedades que han de ser iguales )
-   **getRegistrations** - Ejecuta una sentencia SQL de inserción sencilla.
    Recibe ( nombre de la tabla en formato string , objectUpdate objeto con las propiedades a buscar )
-   **updateRegistration** - Ejecuta una sentencia SQL de modificacion sencilla.
    Recibe ( nombre de la tabla en formato string , id del registo a modificar, objectUpdate objeto con las propiedades a modificar )
-   **deleteRegistrations** - Ejecuta una sentencia SQL de borrado sencilla.
    Recibe ( nombre de la tabla en formato string , objectSearch objeto con las propiedades que se han de cumplir para borrar )

-   **createSelectAllWhereQuerry** - Crea una sentencia SQL de busqueda sencilla.
    Recibe ( nombre de la tabla en formato string , objectSearch objeto con las propiedades que han de ser iguales )
-   **createInsertQuerry** - Crea una sentencia SQL de inserción sencilla.
    Recibe ( nombre de la tabla en formato string , objectUpdate objeto con las propiedades a insertar )
-   **createUpdateQuerry** - Crea una sentencia SQL de modificacion sencilla.
    Recibe ( nombre de la tabla en formato string , id del registo a modificar, objectUpdate objeto con las propiedades a modificar )
-   **createDeleteQuerry** - Crea una sentencia SQL de borrao sencilla.
    Recibe ( nombre de la tabla en formato string , objectSearch objeto con las propiedades que se han de cumplir para borrar )

## ENDPOINTS

### Users

-   **POST - [api/users/login/]** - Logea a un usuario retornando un token. ✅
    **Requiere:** ✅
-   **GET - [api/users/] -** Retorna información de un usuario concreto y su avatar.✅
    **Requiere:** userIsLogin / userExist / userIsOwner ✅
-   **POST - [api/users] -** Crea un usuario.✅
    **Requiere:** ✅
-   **PUT - [api/users/] -** Edita un usuario.✅
    **Requiere:** userIsLogin/userExist/userIsOwner ✅
-   **DELETE - [api/users/] -** Borra un usuario.✅
    **Requiere:** userIsLogin /userExist / userIsOwner ✅

-   **POST - [api/users/photo/]** - Cambia la foto usuario.✅
    **Requiere:** userIsLogin / userExist / userIsOwner ✅

#### Middlewares:

        - userExists - Comprueba la existencia de un usuario. ✅
        - userIsLogin - Comprueba si el usuario tiene token valido. ✅
        - userIsOwner - Comprueba si el usuario accede a sus datos propios. ✅

### Admins

-   **GET - [api/admins/] -** Retorna información de un administrador concreto y avatar.
    **Requiere:** adminExist / adminIsLogged / adminIsOwner ✅
-   **POST - [api/admins/] -** Crea un administrador.
    **Requiere:** ✅
-   **PUT - [api/admins/validate/] -** Activa un administrador recién creado.
    **Requiere:** ✅
-   **POST - [api/admins/login/]** - Logea a un administrador retornando un token.
    **Requiere:** ✅
-   **DELETE - [api/admins/] -** Borra un administrador.
    **Requiere:** adminExist / adminIsLogged / adminIsOwner ✅
-   **PUT - [api/admins/] -** Edita un administrador.
    **Requiere:** adminExist / adminIsLogged / adminIsOwner ✅
-   **POST - [api/admins/photo/]** - Cambia la foto administrador.
    **Requiere:** adminExist / adminIsLogged / adminIsOwner ✅

#### Middlewares utilizados:

        - adminExists - Comprueba la existencia de un administrador. ✅
        - adminIsLogged - Comprueba si el administrador tiene token valido. ✅
        - adminIsOwner - Comprueba si el administrador accede a sus datos propios. ✅

### Spaces

-   **GET - [api/spaces/] -** Retorna información de un espacio concreto, sus servicios e imagenes.✅
    **Requiere:** spaceExists ✅
-   **POST - [api/spaces] -** Crea un espacio, servicios y servicios extra. ✅
    **Requiere:** adminIsLogged / adminOwnsSpaceCenter ✅
-   **PUT - [api/spaces/] -** Edita un espacio, servicios y servicios extra. ✅
    **Requiere:** spaceExists / adminIsLogged / adminOwnsSpace ✅
-   **DELETE - [api/spaces/] -** Borra un espacio, servicios y servicios extra. ✅
    **Requiere:** spaceExists / adminIsLogged / adminOwnsSpace ✅

-   **POST - [api/spaces/photo/]** - Añade una foto del espacio.✅
    **Requiere:** spaceExists / adminIsLogged / adminOwnsSpace ✅
-   **DELETE - [api/spaces/photo/]** - Borra una foto del espacio.✅
    **Requiere:** adminIsLogged / photoExists / adminIsOwner ✅

#### Middlewares:

        - adminIsLogged - Comprueba que se trate de un administrador logueado. ✅
        - adminIsOwner - Comprueba que el administrador sea propietario. ✅
        - spaceExists - Comprueba la existencia del espacio. ✅

### Centers

-   **GET - [api/centers/] -** Retorna información de un centro concreto, sus imagenes y los espacios que contiene.
    **Requiere:** entityExists ✅
-   **POST - [api/centers] -** Crea un centro.
    **Requiere:** adminIsLogged ✅
-   **PUT - [api/centers/] -** Edita un centro.
    **Requiere:** entityExists / adminIsLogged / adminOwnsCenter ✅
-   **DELETE - [api/centers/] -** Borra un centro.
    **Requiere:** entityExists / adminIsLogged / adminOwnsCenter ✅

-   **POST - [api/centers/photo/]** - Añade una foto del centro.
    **Requiere:** entityExists / adminIsLogged / adminOwnsCenter ✅
-   **DELETE - [api/centers/photo/]** - Borra una foto del centro.
    **Requiere:** adminIsLogged ✅

#### Middlewares utilizados:

        - adminIsLogged - Comprueba que se trate de un administrador logueado. ✅
        - adminOwnsCenter - Comprueba que el administrador sea propietario del centro. ✅
        - entityExists - Comprueba la existencia del espacio. ✅

### Reserves

-   **GET - [api/reserves/myreserves] -** Retorna información con las reservas vinculadas a un usuario.
    **Requiere:** userIsLogin. ✅
-   **GET - [api/reserves/] -** Retorna información de una reserva específica.
    **Requiere:** entityExists / userIsLogin / userOwnReservation. ❌
-   **POST - [api/reserves/] -** Crea una nueva reserva por parte de un usuario logeado.
    **Requiere:** userIsLogin. ❌
-   **PUT - [api/reserves/rate] -** El usuario puntua una reserva previamente creada.
    **Requiere:** entityExists / userIsLogin / userOwnReservation. ❌
-   **POST - [api/reserves/payment] -** El usuario paga una reserva previamente creada.
    **Requiere:** entityExists / userIsLogin / userOwnReservation. ❌
    ❌

#### Middlewares utilizados:

    - entityExists - Comprueba la existencia de la reserva. ✅
    - userIsLogin - Comprueba que se trate de un usuario logueado. ✅
    - userOwnReservation - Comprueba que el usuario sea el propietario de la reserva ❌
