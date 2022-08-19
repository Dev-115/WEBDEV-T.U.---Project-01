import mysql from "mysql2/promise";

export async function query({query, values = []}){
    const dbconnection = await mysql.createConnection({
        host: process.env.DATABASE2_HOST,
        database: process.env.DATABASE2_NAME,
        user: process.env.DATABASE2_USER,
        password: process.env.DATABASE2_PASSWORD,
    })
    try{
        const [results] = await dbconnection.execute(query, values);
        dbconnection.end();
        return results
    }catch (error){
        throw Error(error.message);
        return {error};
    }
}