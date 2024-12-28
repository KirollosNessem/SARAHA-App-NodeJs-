const userModel = require("../../../DB/models/user");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email })
        if (!user) {
            res.status(404).json({ message: "in-valid email" })
        } else {
            const match = await bcrypt.compare(password, user.password)
            if (match) {
                const token = jwt.sign({ id: user._id, isLoggedIn: true },
                    process.env.tokenSignature, { expiresIn: '1h' })
                    res.status(200).json({ message: "Done", token })
            } else {
                res.status(404).json({ message: "in-valid email or password" })
            }
        }
    } catch (error) {

        res.status(500).json({ message: "catch err ", error })

    }

}
module.exports = { login }