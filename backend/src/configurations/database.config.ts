export default ()=> ({
    db_type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    username: process.env.USER_NAME,
    password: process.env.USER_PASSWORD,
    database: process.env.DATABASE
})
