# MarketNow
<img src="https://github.com/IgnadlO/MarketNow/blob/main/public/img/logotipo.png" height="200" align="center">

### Importante!
Crear un archivo llamado ".env.default" en el directorio raiz con los siguientes datos de su servidor SQL:
```
# Informacion de MySQL
DB_PASS=(Su constaseña en MySQL)
DB_USER=root (o su nombre)
DB_DATABASE=marketnow

# Informacion de Email, en fase de desarollo se recomienda utilizar ethereal.email para las pruebas.
NM_EMAIL=
NM_PASS=
NM_ACT=false

# Determina si es necesario estar logueado. 
LOGIN=true
```
y recuerde importar dataBase.sql en su gestor MySQL.

### Instalacion
Este proyecto utiliza NodeJs (14.17 LTS) para su funcionaminto,
por lo cual debe instalarlo y poner los siguientes comandos
en la consola de windows (posicionado en la carpeta raiz del proyecto):
```
npm i 
```
### Uso
Para iniciar el servidor se debe ingresar en la consola (posicionada en la carpeta raiz del proyecto):
```
npm start
```
Para acceder al sitio web se debe ir a la siguiente url:
```
localhost:3000/
```
y, mientras este en fase de desarollo, con:
```
localhost:3000/dev/(nombre del html, sin el .html)
```
se podra acceder a cualquier html, aunque de esta forma ciertos datos pueden faltar ya que son propios de usuarios logueados.

### Lista de comandos:
- npm start: transipila ts e inicia el servidor.
- npm run build: transpila ts cada vez que se produce un cambio en un archivo.

### Aclaraciones:
- Ciertas cosas pueden fallar ya que el proyecto todavia se encuentra en un fase muy temprana de desarrollo
