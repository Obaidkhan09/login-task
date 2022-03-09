import jwt from 'jsonwebtoken';

function auth( req, res, next ) {
    const token = req.header("x-auth-token");
    if (!token) {
        res.status(401).send("Not Authorized!!");
    }
    try {
        const secretKey = process.env.SECRET;
        const payload = jwt.verify(token, secretKey);
        req.user = payload;
        next();
    } catch (error) {
        res.status(400).send("Invalid Token", error.message);
    }
}
export default auth;