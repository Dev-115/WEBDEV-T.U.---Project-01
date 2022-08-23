import { query } from "../../../lib/getDBDATA";

export default async function credCheck (req, res){

if(req.method == "POST"){
    const credData = req.body;
        try{
            const sql = "SELECT * From user WHERE user.email = ?";
            const valuesParams = [credData.username];

            const data = await query({query: sql, values: valuesParams});

            if(data.length == 0){
                return res.status(500).json({message: ''});
            }

            console.log(data);
            return res.status(200).json(data[0]);
            // console.log(req);

        }catch(error){
            console.log(error);
            return res.status(500).json({error: error.message});
        }
    }else{
        return res.status(500).json({message: 'Sorry Request Denied'});
    }

}
