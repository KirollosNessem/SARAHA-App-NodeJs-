const CommentModel = require("../../../DB/models/comments.model");
const messageModel = require("../../../DB/models/message");
const postmodel = require("../../../DB/models/post.model");
const userModel = require("../../../DB/models/user")

const getprofile =async (req,res)=>{
try{
   console.log(req.user._id);
    const user = await userModel.findById(req.user._id)
    if(!user) { res.status(400).json({message: 'User not found'})}
    else{
        res.status(200).json({message:"Done",user})
    }
}catch(err){
    res.status(500).json({message:"catch Error",err})
}
}



const getmassege =async (req,res)=>{
    try{
       
        const massege = await messageModel.find({reciverId:req.user._id})
        if(!massege) { res.status(400).json({message: 'User not found'})}
        else{
            res.status(200).json({message:"Done",massege})
        }
    }catch(err){
        res.status(500).json({message:"catch Error",err})
    }
    }




    const updateprofilepic = async (req,res)=>{
        if(req.fileUploadError){
             res.status("422").json({message:"invaled file"})
        }
        else{
            const filename = `${req.protocol}://${req.headers.host}/${req.destinationFile}/${req.file.filename}`
   
             const updateuser = await userModel.findByIdAndUpdate(req.user._id, {profilePic:filename}, {new: true})

             res.json({message:"Done",updateuser})
        }
    }

const updatecaverpics = async (req,res)=>{


    if(req.fileUploadError){
        res.status("422").json({message:"invaled file"})
   }
   else{
      

      let imageurl =[];
      for(let i=0; i<req.files.length; i++){
       imageurl.push(`${req.protocol}://${req.headers.host}/${req.destinationFile}/${req.files[i].filename}`);
      }

       

        const updateuser = await userModel.findByIdAndUpdate(req.user._id, {caverpics:imageurl}, {new: true})

        res.json({message:"Done",updateuser})
   }

}


const Addpost = async (req,res)=>{

    let {title,desc} = req.body;

    let addedpost = await postmodel.insertMany({title,desc,userId:req.user._id});
    res.json({message:"Done",addedpost});
}

const Addcomment = async (req,res)=>{
    let {title} = req.body;
    let{id}=req.params;   // post id
    const addedcomment = await CommentModel.insertMany({title,userId:req.user._id});
//$push:  push value into Array
let addCommentToPost = await postmodel.findByIdAndUpdate(id, {$push: {commentsIds: addedcomment[0]._id}}, {new: true});

res.json({message:"Done",addCommentToPost});
   
}

const getposts = async (req,res)=>{

    const allposts = await postmodel.find({}).populate(
        {
            path: "commentsIds",
            model: "Comment",
            select:"title",
            populate: {
                path: "userId",
                model: "User",
                select:"name email"
            },
        }
    );
    res.json({message:"Done",allposts});
}



module.exports = {getprofile,getmassege,updateprofilepic,updatecaverpics,Addpost,Addcomment,getposts};