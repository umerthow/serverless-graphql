import mysql from '../db'

const MasterStatusService = {}

MasterStatusService.getAllData =  async () => {
  let results = await mysql.query('SELECT * FROM  tms_ref_master_status_sap order by id desc')

  // Run clean up function
  await mysql.end();
  return results;
}

MasterStatusService.getDatabyId= async ({id}) => {
  let results = await mysql.query('SELECT * FROM  tms_ref_master_status_sap where id = ? order by id desc', [id])

  // Run clean up function
  await mysql.end()

  return results[0]
}

MasterStatusService.createData = async (args) => {

  const { code, title, description } = args
  
  let results = await mysql.transaction()
  .query('INSERT INTO tms_ref_master_status_sap (code, title, description) VALUES(?,?,?)', [code, title, description])
  .rollback((e) => {
    console.error(e)
    return e
  })
  .commit()

  // Run clean up function
  await mysql.end();

  console.log('results', results)
  return results[0]
}


export default MasterStatusService;