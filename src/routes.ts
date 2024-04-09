import { Router, Request, Response } from "express";

import { CreateUserController } from "./controllers/user/CreateUserControllers";

const router = Router();

//-- Rotas USERS --
router.get("/user", new CreateUserController().handle);

export { router };
