import { insertSchedulingToDb } from "@/services/scheduling.service";



export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      const insertedId = await insertSchedulingToDb(data);
      res.status(201).json({ insertedId });
    } catch (error) {
      res.status(500).json({ error: "Failed to insert data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
