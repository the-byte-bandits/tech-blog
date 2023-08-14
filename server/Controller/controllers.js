const bcrypt = require('bcrypt');
const UserModel = require('../Models/User'); // Import your User model
const JWT=require('jsonwebtoken')
const cookieParser = require('cookie-parser');


async function logoutController(req, res) {
    // req.headers['authorization']=null;

    // res.clearCookie('access_token');
    res.send({message:'Logged Out'})
}

async function dashboradController(req, res) {

    res.send({message:`Welcome ${req.user.email}`})

}

async function updateUserController(req, res) {
    console.log('PATCH - /user-update');

    const { name, email } = req.body;

    try{
        await UserModel.findOneAndUpdate({email:email},{name:name})
        res.status(200).json({message:'User Updated'})
    }catch(err){
        console.log(err)
        res.status(500).json({message:'User Not Updated'})
    }


}



async function loginController(req, res) {
    console.log('POST - /login');

    const { email, password } = req.body;

    const user = await UserModel.findOne({ email: email});
    if (user) {
        if(await bcrypt.compare(password, user.password)){
            // Logged In
            // Enable JWT

            const authUser={email:email};
            const accessToken=JWT.sign(authUser,process.env.ACCESS_TOKEN_SECRET)

            res.cookie('access_token', accessToken, {
                httpOnly: true,
                secure: true, // Use in production over HTTPS
                sameSite: 'strict',
              });
              
            // res.send({accessToken:accessToken})
            res.status(200).json({name:user.name,email:user.email});
        }else{
            res.status(401).json({ error: 'Incorrect password' });
        }
    } else {
        res.status(404).json({ error: 'User not found' });
    }
    
}

async function registerController(req, res) {
    console.log('POST - /register');

    try{
        const { name, email, password } = req.body;

        // Check if user with the same email already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: 'User already exists' }); // Conflict status code
        }

        const img = req.body.img || 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png';
        const hashedPassword = await bcrypt.hash(password, 10)

        const user=new UserModel({
            name,
            email,
            password:hashedPassword,
            img
        })
    
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: 'User already exists' });
    }
}

module.exports = {
    loginController,
    registerController,
    dashboradController,
    logoutController,
    updateUserController
};
