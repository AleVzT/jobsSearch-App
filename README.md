# Xplace Chellenge

## Sobre la construcción de la App 🛠️

Trata de una App web desarrollada con React. Trata de una interfaz web que maneja 2 tipos de usuarios reclutador y solicitante que tienen la siguiente funcionalidad: 
   1. Para el usuario solicitante
     Dar la posibilidad de buscar puestos de trabajo.
     Dar la posibilidad de aplicar a puestos de trabajo.
   2. Para el usuario reclutador
     Dar la posibilidad de publicar trabajos.
     Activar/Desactivar trabajos publicados.
     Editar trabajos publicados
     Eliminar trabajos publicados

Ademas de la view de register, ambos usuarios pueden hacer login y logout. 


## Comenzando 🚀

Para iniciar con la instalación y ejecución de la app web. debemos clonar el proyecto en el directorio de tu preferencia y donde no requieras permisos especiales para acceder

### Pre-requisitos 📋

Una teniendo los archivos que componen la app web en tu Pc. debemos verificar que contemos con ciertos pre-requisitos. Nota: acontinuacion te dare una serie de comandos deben ser utilizados en la terminal de tu sistema operativo.

    1.- Node v10.15.3 o superior: Si no estas seguro sobre que version de node tienes instalada o si tienes instalado node en tu Pc debes ejecutar el siguiente comando 

        ```
        node -v
        ```

    Esto de deberia arrojar la version de node, en caso de que no sea asi te dejo un link para su instalación. 

        https://nodejs.org/es/download/

    2.- Manejador de paquetes npm v6.14: este manejador de paquete por lo general viene con instalado por defecto cuando instalamos node pero de igual forma se los coloco para que verifiquen su existencia.

        ```
        npm -v
        ```

    En caso de no tenerlo o querer actualizar su versión podrias probar el siguiente comando.

        ```
        npm install -g npm@latest
        ```

### Instalación 🔧

Una vez revisado y completada la lista de pre-requisitos podemos acceder a la instalación y ejecución de la app web en tu maquina local.

Para esto es necesito que abrar la terminal de tu sistema operativo y navegues a la carpeta que contiene el proyecto.

Una vez dentro de la carpeta principal debemos ejecutar desde la terminal el siguiente comando.

    npm install

Esto instalará todas las dependencias o paquetes de node necesarios para ejecutar la app web. Una vez finalizada esta instalación, estamos listo para levantar la app web localmente. Haciendo uso del comando 

    npm run dev

Una vez ejecutado este comando y compilado el código se deberia cargar de forma automatica, en tu navegador predeterminado la app web en el puerto :4200

Si por alguna extraña razon esto no llegará a pasar puedes colocar en la barra de direcciones de tu navegador web preferido la url

    http://localhost:3000/

Esto debería cargar la página inicial de nuestra app web.

## NOTA IMPORTANTE:
Para el funciona de la app, esta debe estar integrada al backend server.
