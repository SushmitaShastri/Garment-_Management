// connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'IOT'
});
// connect to database
dbConn.connect(); 