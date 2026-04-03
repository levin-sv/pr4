const {verfyToken}= require ('../utils/jwt');

module.exports = (req,res,next) =>{
    const authHeaders = req.headers.authorization;
    if (!authHeaders) {
        return res.status(401).json({message:'nta token yatanzwe'})
    }
   const token=authHeaders.split('')[1];
   try{
    const decoded = verfyToken(token);
    req.user = decoded;
    next();
   }
   catch(err){
    return res.status(401).json({message:"token watanze siyo"});
   }
};
