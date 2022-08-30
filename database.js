const {createpool}= require("mysql2");

const pool = createpool({
    host:'localhost',
    database: 'employee_data',
    user:'root',
    password:'root',
    connectionLimit: 10
});

pool.query('select * from employee_data.employee_info1', (err,res)=>{
    return console.log(res)
});