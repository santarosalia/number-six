import client from "./client"

export const write = async (item: {
    created: Date,
    numbers: number[]
}) => {
    const conn = await client.connect();
    const db = conn.db('Devmon');
    const number = db.collection('number');
    number.insertOne(item);
}

export const getThisWeekCount = async () => {
    const conn = await client.connect();
    const db = conn.db('Devmon');
    const coll = db.collection('number');
    const serverTime = new Date();
    const koreanTimeString = serverTime.toLocaleString('en-US', { timeZone: 'Asia/Seoul' });
    const today = new Date(koreanTimeString);
    const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -5 : 1)); // Monday
    startOfWeek.setHours(0);
    startOfWeek.setMinutes(0);
    startOfWeek.setSeconds(0);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // Sunday
    const count = await coll.countDocuments({
        created: {
            $gte: startOfWeek,
            $lt: endOfWeek
        }
    });
    return count;
}