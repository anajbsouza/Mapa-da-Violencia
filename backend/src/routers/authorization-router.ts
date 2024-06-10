import { Router } from "express";
import { authorizationController } from "../controllers/authorization-controller";

const authorizationRouter = Router();

// authorizationRouter.post('/authorize-location', authorizationController.postAuthorized);
authorizationRouter.post('/unauthorize-location/:id', authorizationController.postUnauthorized);

export default authorizationRouter;