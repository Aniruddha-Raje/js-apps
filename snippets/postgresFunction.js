const { Pool } = require('pg');

let test = async () => {

    const pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'postgres',
      password: 'root'
    });
  
    try {
      const res = await pool.query('select * FROM public.wor_transaction',[]);
      console.log('Response => \n', res);
    } catch (error) {
      console.log("error => \n", error);
    }
    finally{
      await pool.end();
    }
}

test();