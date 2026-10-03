------------- Aplicacion de Facturacion Sencilla a Base de Excel ------ 05/03/2026 
Notas del momento en el que se creo:
"Un pequeño proyecto que estoy haciendo para "facilitar" sacar cuentas en la tiendita en la que estoy trabajando.
A la par, también sirve para hacer de investigación y estudio para aprender cosas que aun no se
(Como el mismo GIT y GITHUB XD)".

Fue un pequeño proyecto que empece a desarrollar en un empleo que tenia, en dicho empleo tenia el cargo 
de atencion al cliente, debido a que careciamos de un sistema de facturacion en condiciones, surgio este
pequenio prototipo de una app que me premitiera agilizar con bastante velocidad las cuentas que debia sacar
a mano y asi hacer la jornada laboral de hora pico mas ligera sin la necesidad de costear un sistema de facturacion
(ya que el duenio se reusaba a invertir en ello debido a temas legales he he).

La aplicacion es realmente muy sencilla (cabe aclarar que esto se debe a que se inicio en TERMUX, via android)
El objetuivo de la app nunca es cobrar, solo asistir en la venta
Permite hacer notas individuales de cada producto en los que consiste
	- Mostrar precios, 
	- Multiplicar por las unidades solicitadas 
	- Mostrar el precio total de las cantidades de ESE producto
cada "sesion" o factura, permite pueda crearse las notas necesarias de cada producto,
ya que al final se realiza una sumatoria del total de las cuentas de tooodas las notas.

Tanto la logica y estructura de la pagina estan escrita en javascript
Usa la extension xlsl, se extrae informacion de un archivo EXCEL previamente formateado que 
luego es cargado para alimentar una estructura JSON que actuara de base de datos.

Esta aplicacion aun sigue en desarrollo, ya que busco afinar su funcionamiento y darle un acabado estetico en condiciones.
