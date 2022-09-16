import mysql from "mysql2/promise";

export default async function handleAppointmentDel(req, res) {
    const dbconnection = await mysql.createConnection({
        host: process.env.DATABASE2_HOST,
        database: process.env.DATABASE2_NAME,
        user: process.env.DATABASE2_USER,
        password: process.env.DATABASE2_PASSWORD,
    })

    if (req.method == "POST") {
        try {

            const body = req.body;
            const sql = body.sql;
            const data = await dbconnection.execute(sql, [body.refcode]);

            dbconnection.end();

            return res.status(200).json("Appointment has been Deleted");


        } catch (error) {
            console.log('dbsert 26>> ', error);

            return res.status(500).json({ error: error.message });
        }
    } else {
        return res.status(500).json({ message: 'Sorry Request Denied' });
    }
}