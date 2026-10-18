# Parte 3: Uso de los metodos HTTP
Los métodos HTTP son las operaciones que utilizamos para comunicarnos con un servidor web o API REST, permitiéndonos realizar consultas, creaciones, modificaciones y eliminaciones de datos en un sistema.
En el que usaremos como ejemplo el servidor de prueba publico (https://jsonplaceholder.typicode.com/posts).
A continuación, explicaremos el propósito y funcionamiento de cada uno de los 5 métodos principales, 
ejecutando las pruebas con la herramienta Thunder Client:

# -------------------------------------------------------------------------------------------------------------

1. GET.- Este metodo se utiliza para consultar o recuperar información del servidor sin modificar ningún recurso (es una operación de solo lectura e idempotente).

GET https://jsonplaceholder.typicode.com/posts
Rsta.- 200 OK, muestra todos los posts de los usuarios

GET https://jsonplaceholder.typicode.com/posts/1
Rsta.- 200 OK, muestra el post del usuario 1 

# Ejemplo en JavaScript
fetch('[https://jsonplaceholder.typicode.com/posts/1](https://jsonplaceholder.typicode.com/posts/1)')
  .then(response => {
    console.log('Status Code:', response.status); // 200
    return response.json();
  })
  .then(data => console.log(data));

# -------------------------------------------------------------------------------------------------------------

2. POST.- Este método se utiliza para crear un nuevo recurso en el servidor enviando los datos en el cuerpo (Body) de la petición.

POST https://jsonplaceholder.typicode.com/posts
Body:
{
  "title": "Nuevo post de prueba",
  "body": "Contenido del post",
  "userId": 1
}
Rsta.- 201 Created, devuelve el post creado con su nuevo id

# Ejemplo en JavaScript
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Nuevo post de prueba',
    body: 'Contenido del post',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response => {
    console.log('Status Code:', response.status); // 201
    return response.json();
  })
  .then(data => console.log(data));

# -------------------------------------------------------------------------------------------------------------

3. PUT.- Este método se utiliza para reemplazar o actualizar por completo un recurso existente. Si falta un campo en el Body, este se borrará o quedará nulo.

PUT https://jsonplaceholder.typicode.com/posts/1
Body:
{
  "id": 1,
  "title": "Post totalmente modificado",
  "body": "Nuevo contenido completo del post",
  "userId": 1
}
Rsta.- 200 OK, devuelve el post completamente actualizado

# Ejemplo en JavaScript
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'Post totalmente modificado',
    body: 'Nuevo contenido completo del post',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response => {
    console.log('Status Code:', response.status); // 200
    return response.json();
  })
  .then(data => console.log(data));

# -------------------------------------------------------------------------------------------------------------

4. PATCH.- Este método se utiliza para realizar una actualización parcial. Solo modifica el o los campos específicos que le envíes en el Body sin afectar el resto.

PATCH https://jsonplaceholder.typicode.com/posts/1
Body:
{
  "title": "Solo cambié el título"
}
Rsta.- 200 OK, devuelve el post con el título modificado

# Ejemplo en JavaScript
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'Solo cambié el título',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response => {
    console.log('Status Code:', response.status); // 200
    return response.json();
  })
  .then(data => console.log(data));

# -------------------------------------------------------------------------------------------------------------

5. DELETE.- Este método se utiliza para eliminar un recurso específico del servidor mediante su ID.

DELETE https://jsonplaceholder.typicode.com/posts/1
Body: Ninguno
Rsta.- 200 OK, devuelve un objeto vacío {} confirmando la eliminación

# Ejemplo en JavaScript
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
  .then(response => {
    console.log('Status Code:', response.status); // 200
    return response.json();
  })
  .then(data => console.log(data));

# -------------------------------------------------------------------------------------------------------------

# Diferencia entre PUT y PATCH: 
PUT.- Se utiliza para reemplazar o actualizar por completo un recurso existente.
PATCH.- se utiliza para realizar una actualización parcial, osea, solo se envía el atributo específico que quieres cambiar y los demás campos se mantienen intactos.

*Nota:* La API `jsonplaceholder.typicode.com` es un simulador de pruebas; devuelve respuestas exitosas (200, 201), pero no guarda los cambios permanentemente en su base de datos.