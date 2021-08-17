# MarketNow
<img src="https://github.com/IgnadlO/MarketNow/blob/main/public/img/logotipo.png" height="200" align="center">

### Importante!
Crear un archivo llamado ".env.default" en el directorio raiz con los siguientes datos de su servidor SQL:
```
DB_PASS=(su contraseña)
DB_USER=(nombre o root, segun corresponda)
DB_DATABASE=marketnow
```
y recuerde importar dataBase.sql en su gestor MySQL.

### Instalacion
Este proyecto utiliza NodeJs (14.17 LTS) para su funcionaminto,
por lo cual debe instalarlo y poner los siguientes comandos
en la consola de windows (posicionado en la carpeta raiz del proyecto):
```
npm i 
npm start
```
### Uso
Para acceder al sitio web se debe ir a la siguiente url:
```
localhost:3000/
```
y, mientras este en fase de desarollo, con:
```
localhost:3000/dev/(nombre del html)
```
se podra acceder a cualquier html, cabe destacar que
accediendo de esta forma ciertos datos pueden faltar
ya que son propios de usuarios logueados.

### Lista de comandos:
- npm start: transipila ts e inicia el servidor.
- npm run build: transpila ts cada vez que se produce un cambio en un archivo.

### Aclaraciones:
Cieras cosas pueden fallar ya que el proyecto todavia se encuentra en un fase muy temprana de desarrollo
