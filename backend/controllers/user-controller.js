export const getAllUsers = async(req, res, next) => {

    let users;
    try {
        users = User.Users.find()
    }
    catch (err) {
        return next(err);
    }
    if(!users){
        return res.status(500).json({message:"Unexpected error occurred
        "
    }
    return res.status(200).json({users})
}