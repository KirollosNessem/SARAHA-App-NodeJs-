const jwt = require('jsonwebtoken');
const userModel = require('../DB/models/user');
const Roles ={

    Admin :"Admin",
    User:"User",
    Hr:"Hr"
}
const auth = (accessRoles) => {
    return async (req, res, next) => {
        try {
            const headerToken = req.headers['authorization']
            console.log(headerToken);
            if (!headerToken ||
                headerToken == null ||
                headerToken == undefined ||
                !headerToken.startsWith(`${process.env.Bearerkey} `)) {
                res.status("401").json({ message: "header token error" })
            } else {
                const token = headerToken.split(" ")[1];
                console.log(token);
                if (!token ||
                    token == null ||
                    token == undefined || token.length < 1) {
                    res.status("401").json({ message: "in-valid token " })
    
                } else {
    
                    const decoded = jwt.verify(token, process.env.tokenSignature);
                    console.log(decoded);
                    const findUser = await userModel.findById(decoded.id).select('name  email role')
                    if (!findUser) {
                        res.status("401").json({ message: "in-valid loggin user " })
                    } else {
                        console.log(findUser);

                        if (accessRoles.includes(findUser.role)) {
                            req.user = findUser
                            next()
                        } else {
                            res.status(401).json({ message: "not auth user" })   
                        }
                       
                       
                         
                       
                    }
    
                }
    
            }
        } catch (error) {
            res.status("500").json({ message: "token catch error" , error })
            
        }
       
    }
}

module.exports = {
    auth,
    Roles
}