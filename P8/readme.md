# Práctica 8.
*En este readme se detalla el código implementado para la realización de esta práctica así como los objetivos de ella*

## Objetivos:
-Se tendrá que crear una página web en la que mediante animaciones de jquery se muestre el texto de introducción de la película Star Wars I. La Amenaza Fantasma, en el que el texto se deslize y se aleje hacia arriba y atrás, siendo el estilo de la página (background, fuente del texto, tamaño, velocidad del texto) lo más fidedigno posible al obtenido en la película.

-También se tendrá que incluir en la página la síntonía principal de la película.

## Descripción del código empleado:

### Index.html
-Este archivo contiene la parte que se va a mostrar al usuario, lo más destacable del archivo son los diferentes sections en los que divido el texto introductorio, así como el texto que se muestra explicando la introducción a la película.

### functions.js
-El archivo functions.js contiene el código que implementa las distintas funciones para las animaciones del texto. Algunas de ellas son:
*this.start.bind('click', $.proxy(function(): Esta función será la encargada de iniciar la animación al hacer click en el texto "Iniciar"*
*$(this.audio).bind('ended', $.proxy(function(): Esta función nos devuelve a la pantalla inicial cuando termina el audio.*

### style.css 

-Este archivo se encarga de darle estilo a la página y a su contenido(alineación, color, tamaño...etc.

