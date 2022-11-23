import { MongoClient } from "mongodb";
// /api/example
// POST /api/example

function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;

    MongoClient.connect();
  }
}

export default handler;
