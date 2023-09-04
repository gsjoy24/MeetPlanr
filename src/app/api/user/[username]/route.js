export const GET = async (request) => {
    try {
        const db = await DbConnect();
        const schedulingCollection = db.collection("users");
        const result = await schedulingCollection.find().toArray();
        return NextResponse.json(result);
    }
    catch (error) {
        console.error("error for geting data", error);
        NextResponse.json({ error: "eroor for geting data" });
    }
};