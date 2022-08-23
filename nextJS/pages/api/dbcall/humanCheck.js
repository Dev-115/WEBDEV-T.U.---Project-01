export default async function humanCheck (req, res){

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

const token = recaptchaRef.current.getValue();
captchaRef.current.reset();
const captchaRef = await post(`https://www.google.com/recaptcha/api/siteverify?secret=6Le6_lQeAAAAAKAzGT1KQC6xvXKIsv56SijGPSUT&response=${token}`);