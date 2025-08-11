// goi cac thu vien da cai dat 
const express = require('express'); // tao server & API 
const cors = require('cors'); // cho phep frontend React goi API
const bodyParser = require('body-parser'); // Doc du lieu JSON tu request
const mysql = require('mysql2'); // ket noi mysql

// khoi tao cong va chay 
const app = express();
const PORT = 5000;

app.use(cors);
app.use(bodyParser.json());

// ket noi MySQL 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '18102004',
    database: 'phone_store'
});

db.connect(err =>{
    if(err){
        console.error('loi ket noi Mysql',err);
    }
    else{
        console.log('ket noi thanh cong');
    }

});

// viet API (routes)



// khoi dong server
app.listen(PORT,() => {
    console.log('server chay tai http://localhost: ${PORT}')
});
