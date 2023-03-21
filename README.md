# Este es un proyecto que sirve como test práctico para ingresar al área de front-end de Mercado Libre.

El proyecto se creo con create-react-app. Se corre con `npm start`.

Se abre en [http://localhost:3000](http://localhost:3000) dentro del navegador.

El sitio del lado del cliente consiste en una barra de búsqueda, un listado de los productos que se buscaron
y una página que muestre el detalle del producto seleccionado. 

Del lado del servidor se usó Express para cambiar la estructura de la API y así poder consumirla del lado del cliente. 

## Cliente

Se uso sass para los estilos y el sitio es responsive.
También se uso react-redux y redux toolkit para el manejo del estado y así poder utilizar los datos de una manera más eficiente.
Se agregó la tipografía `proxima_nova` que descargué de DaFont. Y me ayudé de bootstrap para el grid, la barra de búsqueda y botones (por nombrar algunos ejemplos).
Utilicé react-router-dom para redirigir entre páginas, así como axios para la petición fetch.
Se puede ver una vista previa en [https://ml-silviag.netlify.app/](https://ml-silviag.netlify.app/) 

## Servidor

Después de la manipulación de la información se subió a DigitalOcean [https://seashell-app-fpkyl.ondigitalocean.app/](https://seashell-app-fpkyl.ondigitalocean.app/) para que después la pudiera poner del lado del cliente y se pudiera visualizar información en netlify. 

## Deployment

Si se quiere hacer deploy a Netlify o a Digitalocean sólo es necesario hacer un push a los repositorios a la rama de main

## Pendientes

Las cosas que me gustaría agregar (y estaré haciendo en las próximas horas) son: 
- Agregar imagen skeleton para que no haga el parpadeo de imagen en el detalle.
- Agregar loadings para mostrar que está cargando la información.
- Mejorar el breadcrumb para la página de inicio y en detalle.
- Redireccionar el botón de comprar al producto dentro de MeLi.


