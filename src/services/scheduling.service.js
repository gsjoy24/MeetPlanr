import DbConnect from "./DbConnect";


export const insertSchedulingToDb = async (data) => {
    const db = await DbConnect();
    const schedulingCollection = db.collection("scheduling");
  
    try {
      const result = await schedulingCollection.insertOne(data);
      return result.insertedId;
    } catch (error) {
      console.error("Error inserting data:", error);
      throw error;
    }
  };
  