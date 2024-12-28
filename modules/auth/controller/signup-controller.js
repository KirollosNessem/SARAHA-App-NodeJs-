const userModel = require('../../../DB/models/user')

const signup = async (req, res) => {
    try{
    const { name, email, password } = req.body;
    const newUser = new userModel({ name, email, password });
    const savedUser = await newUser.save()
    res.status(200).json({ message: "Done", savedUser })
    }catch(err){
        res.status(500).json({ message: "Error", err})
    }

};
module.exports = {signup};