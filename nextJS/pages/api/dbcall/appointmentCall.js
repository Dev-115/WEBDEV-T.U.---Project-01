import { query } from "../../../lib/getDBDATA";

export default async function callAppointment(req, res) {

    if (req.method == "POST") {
        try {

            const data = await query({ query: req.body.sql, values: req.body.valuesParams });

            if (data.length == 0) {
                return res.status(500).json({ message: '123' });
            }

            return res.status(200).json(data);

        } catch (error) {
            return res.status(500).json({ message: '123' });
        }
    } else {
        return res.status(500).json({ message: 'Sorry Request Denied' });
    }

}
