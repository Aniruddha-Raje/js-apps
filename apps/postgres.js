const { Pool } = require('pg');

let createPoolClient = async (pool) => {
  let response = {};

  try {
    const client = await pool.connect();
    response.client = client;
    response.hasError = false;
    console.log('Connection created!');
    return response;
  } catch (error) {
    response.hasError = true;
    response.error = '5300';
    console.log("RDS Postgres client creation error => ", error);
    console.log('RDS Postgres client creation failure response => ', response);
    return response;
  }
};

let test = async () => {

  const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'root1'
  });

  let tableName = 'wor_transaction';

  try {
    console.log("pool => ", pool, "\n~~~~~~~~~~~");
    pool.end();
    console.log("asdasda");
    //let res = await pool.query('select * from public.',tableName,' WHERE transaction_id > $1 order by transaction_id desc',[4]);
    let res = await pool.query('select * from public.wor_transaction',[]);
    console.log('\nRows 1 => \n', res.rows[0]);

    res = await pool.query('select * from public.wor_transaction WHERE transaction_id > 20',[]);
    console.log('\nRows 2 => \n', res.rows[0]);
  } catch (error) {
    console.log("error => \n", error);
  }
  finally{
    await pool.end();
  }

  // let client = '';
  // let createPoolClientResponse = await createPoolClient(pool);
  // if(!client.hasError){
  //   client = createPoolClientResponse.client;
  // }
  // else{
  //   console.log(createPoolClientResponse.error);
  // }

  // try {
  //   let sqlStatement = `INSERT INTO public.test 
  //   (user_id,created_date,debit_amount,credit_amount,previous_balance,new_balance,
  //   reference_id,activity_type,activity_title,activity_desc,activity_desc_show,
  //   added_by,added_by_role) 
  //   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING transaction_id`;
    
  //   let sqlData = [13,1564106585,13000.00,null,13000.00,13000.00,'2','D ',
  //   'Redemption','Postgres test',0,'aniruddha.raje@gmail.com','user'];
    
  //   await client.query('BEGIN');
  //   let queryResponse = await client.query(sqlStatement, sqlData);
  //   await client.query('COMMIT');
  //   console.log("success");

  // } catch (error) {
  //   await client.query('ROLLBACK');
  //   console.log("failure ROLLBACK complete, error => \n ", error);
  // } finally {
  //   console.log('Releasing connection!');
  //   client.release();
  // }
};

test();
//createPoolClient();
