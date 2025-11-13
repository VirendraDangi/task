import jwt from "jsonwebtoken";
export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    console.log(token, "token");
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = decoded;
        req.user = user;
        next();
    }
    catch (err) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
};
//# sourceMappingURL=auth.middleware.js.map