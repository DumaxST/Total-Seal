# TOTAL SEAL

1.Clonas el repositorio
2.Crear una copia del ```.env-template``` renombrarlo como  ```.env```` y
crear variables de entorno

3.Instalar dependencias

    ```npm install ```

4.Levantar la BD

    ``` docker compose up -d```

5.Corres las migraciones de prisma con:

    ```npx prisma migrate dev```

6.Corres el proyecto con  
    ```npm run dev```

## Comandos adicionales

Hay un comando para hacer seed de la bd solo tienes que ejecutar;

    ```npm run seed```
