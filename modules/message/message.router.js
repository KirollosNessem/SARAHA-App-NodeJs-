const { auth, Roles } = require('../../midelware/auth');
const { validation } = require('../../midelware/validation');
const  message  = require('./controller/message-controller');


const { sendMessage, deleteMessage } = require('./message.validation');

const router = require('express').Router();


router.post('/sendmassage/:id',validation(sendMessage),message.sendmessage);

// router.delete('/massage/:id',validation(deleteMessage),auth([Roles.Admin,Roles.User]),message.deleteMessage);

router.delete("/message/:id" ,  validation(deleteMessage) , auth([Roles.Admin,Roles.User]) , message.deletMessage)





module.exports = router;