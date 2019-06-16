import mysql from '../db'


const SoService = {}

SoService.getAllData = async () => {
  let results = await mysql.query('SELECT * FROM tms_do_sales_order limit 100')

  // Run clean up function
  await mysql.end();
  return results;
}

SoService.getDatabySoIdSap = async ({so_id_sap}) => {
  let results = await mysql.query(`SELECT * FROM tms_do_sales_order where so_id_sap = ${so_id_sap}`)

  // Run clean up function
  await mysql.end()

  return results[0]
}


SoService.getSoItemDatabySoIdSap = async ({so_id_sap}) => {
  let results = await mysql.query(`SELECT b.*
  FROM 
  tms_do_copy1 a 
  INNER JOIN 
  tms_do_sales_order b

  ON a.so_id_sap = b.so_id_sap AND a.reference_item = b.so_item
  
  where b.so_id_sap = ${so_id_sap}
  `)

  // Run clean up function
  await mysql.end()
  return results
}
export default SoService;