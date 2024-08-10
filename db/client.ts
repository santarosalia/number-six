
import { MongoClient } from 'mongodb';

// const user = encodeURIComponent(process.env.USER!);
// const pass = encodeURIComponent(process.env.PASS!);
const user = process.env.USER!;
const pass = process.env.PASS!;
const uri = `mongodb+srv://${user}:${pass}@devmon.nckrf2c.mongodb.net/?retryWrites=true&w=majority&appName=Devmon`;

const client = new MongoClient(uri, {});

export default client;