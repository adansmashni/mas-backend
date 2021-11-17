module.exports = 
{
    "type": "postgres" ,
    "url": process.env.DATABASE_URL,
//    "host": process.env.DB_HOST,
//    "port": process.env.DB_PORT,
//    "username": process.env.DB_USER,
//    "password": process.env.DB_PASS,
//    "database": process.env.DB_NAME,
    
    "entities": process.env.NODE_ENV == "production" 
        ? ["dist/models/*.js"] 
        : ["src/models/*.ts"],

    "migrations": process.env.NODE_ENV == "production"
        ? ["dist/databases/migrations/*.js" ]
        : ["src/databases/migrations/*.ts" ],
        
    "cli": {
        "migrationsDir": [
            "src/databases/migrations"
        ],
        "entitiesDir": "src/models"
    }
}