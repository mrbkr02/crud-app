import User from "../model/userModel.js"

export const create = async(req, res) => {
    try {
        const userData = new User(req.body);

        const { fname, lname, email, password } = req.body;
        if (!fname || !lname || !email || !password) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        const savedData = await userData.save();
        res.status(200).json({savedData});

    } catch (error) {
        res.status(500).json({error : error.message});
    }
}

export const read = async(req, res) => {
    try {
        const usersData = await User.find();
        if(!usersData) {
            return res.status(400).json({msg : "cannot fetch the datas of users"});
        }
        res.status(200).json(usersData)
    } catch (error) {
        res.status(500).json({error : error.message});
    }
}

export const readOne = async(req, res) => {
    try {
        // console.log("Request Params:", req.params); 
        const id = req.params.id;
        if(!id) {
            res.status(400).json({message : "cannot find the id"});
        }
        const userData = await User.findById(id);
        if(!userData) {
            res.status(400).json({message : `cannot find the User by id ${id}`});
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({error : error.message});
    }
}

export const update = async(req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {new : true});
        if(!updatedUser) {
            res.status(400).json({message : `The user with user id ${id} does not exist`});
        }
        res.status(200).json(updatedUser);

    } catch (error) {
        res.status(500).json({error : error.message});
    }
}

export const deleteUser = async(req, res) => {
    try {
        const id = req.params.id;
        const deleteUser = await User.findByIdAndDelete(id);
        if(!deleteUser) {
            res.status(400).json({message : `The user with user id ${id} does not exist`});
        }
        res.status(200).json({message : `The user with id ${id} has been deleted from database`});
    } catch (error) {
        res.status(500).json({error : error.message});
    }
}