/**
 * http://usejsdoc.org/
 */
//載入MySQL模組
var mysql = require('mysql');
//建立連線
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'user'
});

connection.connect();
//接著就可以開始進行查詢
connection.query('SELECT * from user',function(error, rows, fields){
    //檢查是否有錯誤
    if(error){
        throw error;
    }

    console.log('The solution is: ', rows[0]); //2
    var userData=rows[0];
    console.log('The User Data is: ',userData.email);
});

//插入資料
var data = {
    rows: 'columns',
    strings: 'integers'
};

//connection.query('INSERT INTO `table` SET ?', data, function(error){
//    if(error){
//        console.log('寫入資料失敗！');
//        throw error;
//    }
//});
connection.end();