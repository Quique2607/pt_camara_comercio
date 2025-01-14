## Endpoints

### METHOD GET

#### Mostrar todos los videos
```
GET http://localhost:3320/videos
```

#### Mostrar video por ID
```
GET http://localhost:3320/videos/{id}
```

#### Mostrar videos por tema
```
GET http://localhost:3320/videos/tema/{nombre_del_tema}
```

#### Mostrar videos randoms
```
GET http://localhost:3320/videos/random/aleatorio
```

### METHOD POST

#### Agregar videos
```
POST http://localhost:3320/videos
```
El ID ya no se coloca porque se genera automáticamente.

##### Estructura del cuerpo de la solicitud
```json
{
    "nombre": "aprende a invertir",
    "tema": "educacion financiera",
    "url": "https://hp.camaracomercioexterior.org:5443/Ciclero/streams/485649599248543263375556.mp4"
}
```

### METHOD PATCH

#### Actualizar videos
```
PATCH http://localhost:3320/videos/{id}
```

##### Estructura del cuerpo de la solicitud
```json
{
    "nombre": "aprende a invertir",
    "tema": "educacion financiera",
    "url": "https://hp.camaracomercioexterior.org:5443/Ciclero/streams/485649599248543263375556.mp4"
}
```

### METHOD DELETE

#### Eliminar videos
```
DELETE http://localhost:3320/videos/{id}
```

## Notas adicionales

- Asegúrate de que el servidor esté corriendo en el puerto 3320.
- Reemplaza `{id}` y `{nombre_del_tema}` con los valores correspondientes.
- Los videos se almacenan en la URL proporcionada en el campo `url`.
- reemplazar los siguientes valores de conexion, `{user}, {host}, {password}`

```json
{
    user: "root",
    host: "localhost",
    password: "1234",
}
```
- antes de ejecutar el programa colocar el comando `npm i` 
  para que descargue todas las dependencias
- las solicitudes del tipo `POST ` y `PUT` probarlas con postman