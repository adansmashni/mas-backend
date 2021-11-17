module.exports = 
{
    "type": "postgres" ,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    
    "entities": process.env.NODE_ENV == "production" 
        ? ["dist/models/*.js"] 
        : ["src/models/*.ts"],

    "migrations": process.env.NODE_ENV == "production"
        ? ["dist/database/migrations/*.js" ]
        : ["src/database/migrations/*.ts" ],
        
    "cli": {
        "migrationsDir": [
            "src/database/migrations"
        ],
        "entitiesDir": "src/models"
    }
}