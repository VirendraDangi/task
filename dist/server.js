import { app } from "./src/app.js";
import { ConnectDB } from "./src/db/db.js";
console.log(process.env.MONGODB_URI);
ConnectDB();
app.listen(3000, () => {
    console.log("server is runnnig on port 3000");
});
//# sourceMappingURL=server.js.map