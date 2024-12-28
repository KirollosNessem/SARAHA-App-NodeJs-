const { auth, Roles } = require('../../midelware/auth');
const multerfuc = require('../../service/multer');
const profile = require('./controller/user-profile-controller');

const router = require('express').Router();




router.get('/userprofil', auth([Roles.Admin,Roles.User]),profile.getprofile);
router.get("/user/messages",auth([Roles.Admin,Roles.User]),profile.getmassege)
router.patch("/user/profilpic",auth([Roles.Admin,Roles.User]),multerfuc(`user/profilpic`).single("image"),profile.updateprofilepic)

router.patch("/user/profilCoverPic",auth([Roles.Admin,Roles.User]),multerfuc(`user/coverpics`).array("images",5),profile.updatecaverpics)

router.post('/post',auth([Roles.Admin,Roles.User]),profile.Addpost);

router.post('/post/:id/comment',auth([Roles.Admin,Roles.User]),profile.Addcomment);

router.get('/posts',profile.getposts)
module.exports = router;