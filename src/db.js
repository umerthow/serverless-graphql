
import $ from 'config';
import serverlessMysql from 'serverless-mysql';

const mysql = serverlessMysql({
  config: {
    host     : $.db.host,
    database : $.db.database,
    user     : $.db.user,
    password : $.db.password,
  }
})




// const initializeConnection = async (mysql) => {
//   await mysql.connect()
//   console.log('conected..')
// }

// initializeConnection(mysql)

export default mysql