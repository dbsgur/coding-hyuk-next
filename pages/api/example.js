import { MongoClient } from "mongodb";
// /api/example
// POST /api/example

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data;

    const client = await MongoClient.connect();
    const db = client.db;
    const exampleCollection = db.collection("example");

    const result = await exampleCollection.inserOne({ data });

    client.close();
  }
}

export default handler;
