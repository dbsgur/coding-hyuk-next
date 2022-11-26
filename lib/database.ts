import * as mongo from "mongodb";
import { NextApiRequest } from "next";

const MONGO_URI = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`;

interface Database {
  client?: mongo.MongoClient;
}

export interface DatabaseRequest extends NextApiRequest {
  db: Database;
}
