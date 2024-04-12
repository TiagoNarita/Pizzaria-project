import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserControllers";
import AuthUserController from "./controllers/user/AuthUserController";
import DetailUserController from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

//-- Rotas USERS --
router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", isAuthenticated, new DetailUserController().handle);

//-- Rotas CATEGORY --

export { router };
