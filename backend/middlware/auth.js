import jwt from "jsonwebtoken";
import User from "../model/UserModel.js";

const JWT_SECRET = 'your_jwt_secret_here';

export default async function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({success: false, 
            message: "Unauthorized, token missing"});
    }

    const token = authHeader.split(' ')[1];

    // Verify token and extract user information
    try{
        const payload = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(payload.id).select('-password');

        if(!user){
            return res.status(401).json({success: false, 
                message: "user not found"
            });
        }
        req.user = user;
        next();
    }catch(error){
        console.error('JWT verification failed', error);
        return res.status(401).json({
            success: false,
            message: "invalid token or expired"
        })
    }
}