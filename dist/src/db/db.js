import mongoose from "mongoose";
export const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("db is coonected");
    }
    catch (error) {
        console.log("db error ", error);
    }
};
//# sourceMappingURL=db.js.map