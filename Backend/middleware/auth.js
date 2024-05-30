import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    // take token from user and Destructure
    const { token } = req.headers;
    if(!token) {
        return res.json({success:false, message:"Not Authorized Login Again"});
    }
    try {
        // decode token
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        // after decode get ID
        req.body.userId = token_decode.id; //Take token convert to userID for add/remove in CART
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error get token decode"});
    }
}


export default authMiddleware;