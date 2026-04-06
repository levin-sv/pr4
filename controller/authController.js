// const authService = require('../services/authService');
const authService = require('../services/authservice');
exports.registerUser = (req, res) => {
    const { email, password } = req.body;
    authService.registerUser(email, password, (err, user) => {
        if (err){
            return  console.error(err);
        res.status(500).json({ message: 'kwiYANDIKISHA BYANZE' });
        }
        // if (!user) {
        //     return res.status(400).json({ message: 'Invalid email or password' });
        // }
        res.status(201).json({ message: 'User registered successfully', user });
    });


};
exports.login = (req, res) =>{
    const {email,password} = req.body;
    authService.registerUser(email,password,(err,user)=>{
        if(err){
            return res.status(500).json({message:"kwinjira byanze"});
        }
        if(!user){
            return res.status(401).json({message:"washyizeho email/ijambo banga ritariryo"});
        }
    })
}

