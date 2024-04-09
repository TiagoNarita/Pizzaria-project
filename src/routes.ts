import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserControllers";

const router = Router();

//-- Rotas USERS --
router.post("/users", new CreateUserController().handle);

export { router };
