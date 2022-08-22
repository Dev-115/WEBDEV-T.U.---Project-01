import { query } from "../../../lib/getDBDATA";
export default async function handler (req, res){
    console.log(req.method);

    if(req.method == "POST"){
        try{
            const sql = req.body.sql;
            const valuesParams = [req.body.sqlParam];

            // const data = await query({query: sql, values: valuesParams});
            const data = await query({query: sql, values: valuesParams});

            console.log(req.body);

            return res.status(200).json(data[0]);

        }catch(error){
            return res.status(500).json({error: error.message});
        }
    }else{
        return res.status(500).json({message: 'Sorry Request Denied'});
    }
}
