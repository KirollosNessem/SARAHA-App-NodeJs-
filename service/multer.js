const multer = require('multer');
const path = require('path');
const fs = require('fs');
// const nanoid = require('nanoid');

function multerfuc(customDest){

if(!customDest || customDest ==""){
    customDest="genalData" 
}

    if(!fs.existsSync(path.join(__dirname,`../uploads/${customDest}`))){
        fs.mkdirSync(path.join(__dirname,`../uploads/${customDest}`),{recursive: true});
        
    }
    const storage = multer.diskStorage({
        
            destination: function(req, file, cb) {
                req.destinationFile = `uploads/${customDest}`;
                console.log(file);
                cb(null,path.join(__dirname,`../uploads/${customDest}`));
    
            },
            filename: function(req, file, cb) {
                console.log({file});
                const fullname = Date.now()+'-'+file.originalname
    
    
                cb(null, fullname);
            }
        
    })
   const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        req.fileUploadError = true;
        cb(null, false);
      
    }
   }
    const uploads = multer({ dest: path.join(__dirname,`../uploads/${customDest}`),fileFilter,storage });
return uploads;
}



module.exports = multerfuc;