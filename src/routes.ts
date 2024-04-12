import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserControllers";
import AuthUserController from "./controllers/user/AuthUserController";
import DetailUserController from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";

const router = Router();

//-- Rotas USERS --
router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", isAuthenticated, new DetailUserController().handle);

//-- Rotas CATEGORY --

router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);
export { router };
