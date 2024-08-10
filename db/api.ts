import client from "./client"

export const write = async (item: {
    date: string,
    numbers: number[]
}) => {
    const conn = await client.connect();
    const db = conn.db('Devmon');
    const number = db.collection('number');
    number.insertOne(item);
}