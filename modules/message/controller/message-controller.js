const messageModel = require("../../../DB/models/message");
const userModel = require("../../../DB/models/user");



const sendmessage = async (req, res) => {
    try {
        const { id } = req.params; // reciver id
        const { messageBody } = req.body;
        const user = await userModel.findById(id).select("name email")
        if (user) {
            const message = await messageModel.insertMany({ messageBody, reciverId: user._id })
            res.status(201).json({ message: "Done" })
        } else {
            res.status(404).json({ message: "in-valid user account" })
        }
        
    } catch (error) {
      
        return res.status(500).json({ message: "Internal server error", error });
    }
   
}


const deletMessage = async (req, res) => {
    try {
        const { id } = req.params // message id
        const message = await messageModel.deleteOne({ _id: id, reciverId: req.user._id })
        res.status(200).json({ message: "Done", message })
    } catch (error) {
        res.status(500).json({ message: "catch error", error })

    }

}

module.exports = {
    sendmessage,
    deletMessage

}