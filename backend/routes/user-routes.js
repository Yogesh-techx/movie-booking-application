import { getAllUsers } from "../controllers/user-controller";
import express from express;

const userRouter = express.Router();

userRouter.get('/', getAllUsers)

export default userRouter;