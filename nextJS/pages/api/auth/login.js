import { query } from "../../../lib/getDBDATA";

export default async function handler (req, res){
    if(req.method == "POST"){
        try{
            const sql = "SELECT * From user WHERE user.name = ?";
            const valuesParams = ['Pipay Taso'];

            const data = await query({query: sql, values: valuesParams});
            res.status(200).json(data[0]);

        }catch(error){
            res.status(500).json({error: error.message});
        }
    }else{
        return res.status(500).json({message: 'Sorry Request Denied'});
    }
}

// export default (_req: NextApiRequest, res: NextApiResponse) : void =>{
//     res.status(200).json({name: 'John Doe', email : 'John@gmail.com'})
// };