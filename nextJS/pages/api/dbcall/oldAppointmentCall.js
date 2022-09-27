import { query } from "../../../lib/getDBDATA";

export default async function oldAppointment(req, res) {

    // if(req.method == "POST"){
    try {
        let credData = [];
        credData['refcon'] = req.body.referenceCode;
        if (req.body.referenceCode) {
            credData['refcon'] = "%" + req.body.referenceCode + "%";
        }
        credData['refcon'] = "%" + req.body.referenceCode + "%";


        // const whereval = "%%";
        const valuesParams = [credData.refcon];
        const sql = 'SELECT * FROM `appointmentfinal` WHERE appointmentfinal.pickedDate < DATE(NOW())';
        // const sql = 'SELECT * FROM `appointmentfinal` WHERE appointmentfinal.referenceCode LIKE ?';

        const data = await query({ query: sql, values: valuesParams });

        // const sql = "SELECT * From user WHERE user.email = ?";

        // const data = await query({query: sql, values: valuesParams});

        if (data.length == 0) {
            return res.status(500).json({ message: '123' });
        }

        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
    // }else{
    //     return res.status(500).json({message: 'Sorry Request Denied'});
    // }

}
