import { Router } from "express";
import { authorizationController } from "@/controllers/authorization-controller";

const authorizationRouter = Router();

authorizationRouter.post('/authorize-location', authorizationController.postAuthorized);
authorizationRouter.get('/authorize-location', authorizationController.getAuthorized);

export default authorizationRouter;