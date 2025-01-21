# TOTAL SEAL

1.Clonas el repositorio
<<<<<<< HEAD
2.Crear una copia del ```.env-template``` renombrarlo como  ```.env```` y
crear variables de entorno
=======

2.Crear una copia del `.env-template`, renombrarlo como ```.env```` y
creas variables de entorno
>>>>>>> development

3.Instalar dependencias

    ```npm install ```

4.Levantar la BD

<<<<<<< HEAD
    ``` docker compose up -d```

5.Corres las migraciones de prisma con:

    ```npx prisma migrate dev```

6.Corres el proyecto con  
    ```npm run dev```

## Comandos adicionales

Hay un comando para hacer seed de la bd solo tienes que ejecutar;

    ```npm run seed```
=======
    ``` docker compose up -d````

5.Corres las migraciones de prisma con

    ```npx prisma migrate dev````

6.Corres el proyecto con

    ```npm run dev````

## PRISMA CONFIG

Estamos usando prisma para crear nuestras queries es por eso que es necesario configurar

Existen 2 comandos importantes

1. Ejecuta `prisma db pull` para convertir el database schema a un Prisma client

2. Ejecuta `prisma generate`oara generar el Prisma Client .

¿Como usar prisma?
1 . Crear un schema dentro de /prisma/schema.prisma. (si ya esta, no es necesario crearlo nuevamente)

2 . Ejecuta:

    ```shell
    npx prisma migrate dev --name Alerts
    ```
>>>>>>> development
