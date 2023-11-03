const jwt = require('jsonwebtoken');
const isLogin = (req,res,next)=>{
    try {
        const token = req.headers?.authorization?.split(" ")[1];
        if (!token) return res.status(401).json("Token Not found");
        const payload = jwt.verify(token, "Prafullkey");
        if (payload.id) {
          req.user = payload.id;
          next();
        } else return res.sendStatus(400);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

module.exports = {isLogin}