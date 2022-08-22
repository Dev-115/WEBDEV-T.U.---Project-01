import mysql from "mysql2/promise";

export default async function handler (req, res){
    const dbconnection = await mysql.createConnection({
        host: process.env.DATABASE2_HOST,
        database: process.env.DATABASE2_NAME,
        user: process.env.DATABASE2_USER,
        password: process.env.DATABASE2_PASSWORD,
    })
    console.log(req.method);

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
            console.log(data);
            return res.status(200).json(data[0]);

        }catch(error){
            return res.status(500).json({error: error.message});
        }
    }else{
        return res.status(500).json({message: 'Sorry Request Denied'});
    }
}