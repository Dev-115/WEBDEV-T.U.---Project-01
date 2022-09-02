import mysql from "mysql2/promise";

export default async function handler (req, res){
    const dbconnection = await mysql.createConnection({
        host: process.env.DATABASE2_HOST,
        database: process.env.DATABASE2_NAME,
        user: process.env.DATABASE2_USER,
        password: process.env.DATABASE2_PASSWORD,
    })

    if(req.method == "POST"){
        try{
            const body = req.body;
            const sql = body.sql;
            const data = await dbconnection.execute(sql, [body.sqlParamid, body.sqlParamname, body.sqlParamemail, body.sqlParamPassword]);
            dbconnection.end();

            // const data = await query({query: sql, values: valuesParams});
            // const data = await query({query: sql, values: });
            // console.log(req.body);
            // console.log({query: sql, values: [body.sqlParamid, body.sqlParamname, body.sqlParamemail, body.sqlParamemail]});
            return res.status(200).json('User has been registred');

        }catch(error){
            console.log('dbsert 26>> ',error);

            return res.status(500).json({error: error.message});
        }
    }else{
        return res.status(500).json({message: 'Sorry Request Denied'});
    }
}