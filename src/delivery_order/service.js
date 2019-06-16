import mysql from '../db'

const DoService = {}

DoService.getAllData = async () => {
  let results = await mysql.query('SELECT * FROM tms_do_copy1 limit 100')

  // Run clean up function
  await mysql.end()
  return results
}

DoService.getDatabyDoIdSap = async ({do_id_sap}) => {
  let results = await mysql.query(`SELECT * FROM tms_do_copy1 where do_id_sap = ${do_id_sap}`);
  // Run clean up function
  await mysql.end();

  return results[0];
}


DoService.getSoByDeliveryOrder = async ({do_id_sap}) => {
  let results = await mysql.query(`SELECT * FROM tms_do_copy1 where do_id_sap = ${do_id_sap}`)
  // Run clean up function
  await mysql.end();

  return results[0];
}


DoService.getDoItemDatabySoIdSap = async ({so_id_sap}) => {
  let results = await mysql.query(`SELECT a.*
  FROM 
  tms_do_copy1 a 
  INNER JOIN 
  tms_do_sales_order b

  ON a.so_id_sap = b.so_id_sap AND a.reference_item = b.so_item
  
  where b.so_id_sap = ${so_id_sap}
  `);

  // Run clean up function
  await mysql.end();
  return results;
}





export default DoService;