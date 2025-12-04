import { MongoClient } from "mongodb";

let client;

export const getClient = async () => {
  if (!client) {
    client = new MongoClient("mongodb://movie:1234@localhost:27017/moviedb");
    await client.connect();
  }
  return client;
};
