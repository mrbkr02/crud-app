import express from "express"
import { create, deleteUser, read, readOne, update} from "../controller/userController.js"

const route = express.Router();

route.post("/create", create);
route.get("/read", read);
route.get("/readOne/:id", readOne);
route.put("/update/:id", update);
route.delete("/deleteUser/:id", deleteUser);

export default route;